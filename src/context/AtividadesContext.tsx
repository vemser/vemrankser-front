import { api } from "../utils/api";
import { createContext, useState } from "react";
import { IAtividade, IAtividadeContext, IChildren } from "../types/atividade";
import nProgress from "nprogress";
import { toast } from "react-toastify";
import { toastConfig } from "../types/toast";

export const AtividadeContext = createContext({} as IAtividadeContext );

export const AtividadeProvider = ({ children }: IChildren) => {
  const [ atividades, setAtividades] = useState<IAtividade[]>([]);
  const [ totalPages, setTotalPages] = useState(0);
  const token = localStorage.getItem('token');

  const getAtividade = async (page: string) => {
    try {
        api.defaults.headers.common['Authorization'] = token;
        nProgress.start();
        const { data } = await api.get(`/atividade/listar-mural?pagina=${parseInt(page) - 1}&tamanho=1`);
        setTotalPages(data.totalPages);
        setAtividades(data.elementos);
        console.log(data.elementos)

    } catch (error) {
        console.error(error);
        toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    } finally {
        nProgress.done();
    }
}
  return (
    <AtividadeContext.Provider value={ {getAtividade, atividades, setAtividades }}>
      {children}
    </AtividadeContext.Provider>
  );
};