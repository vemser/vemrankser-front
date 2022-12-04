import { api } from "../utils/api";
import { createContext, useState } from "react";
import nProgress from "nprogress";
import { toast } from "react-toastify";
import { toastConfig } from "../types/toast";
import { IChildren, INotas, INotasContext, INotasFilterParams } from "../types/notas";

export const NotasContext = createContext({} as INotasContext );

export const NotasProvider = ({ children }: IChildren) => {
  const [ notas, setNotas] = useState<INotas[]>([]);
  const [ totalPages, setTotalPages] = useState(0);
  const token = localStorage.getItem('token');

  const getNotas = async (page: number, filterParams?: INotasFilterParams) => {
    try {
        api.defaults.headers.common['Authorization'] = token;
        nProgress.start();
        console.log(filterParams)
        let filterString = ''
        if(filterParams?.idTrilha){
          filterString = filterString.concat(`&idTrilha=${filterParams.idTrilha}`)
        }
        if(filterParams?.idModulo){
          filterString = filterString.concat(`&idModulo=${filterParams.idModulo}`)
        }
        if(filterParams?.atividadeStatus){
          filterString = filterString.concat(`&atividadeStatus=${filterParams.atividadeStatus}`)
        }
        const { data } = await api.get(`/atividade/listar-trilha-modulo?pagina=${page - 1}&tamanho=5${filterString}`);
        setTotalPages(data.quantidadePaginas);
        setNotas(data.elementos);
        console.log(data.elementos)

    } catch (error) {
        console.error(error);
        toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    } finally {
        nProgress.done();
    }
}
  return (
    <NotasContext.Provider value={{ getNotas, notas, setNotas, totalPages }}>
      {children}
    </NotasContext.Provider>
  );
};