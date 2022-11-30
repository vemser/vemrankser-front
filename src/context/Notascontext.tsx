import { api } from "../utils/api";
import { createContext, useState } from "react";
import nProgress from "nprogress";
import { toast } from "react-toastify";
import { toastConfig } from "../types/toast";
import { IChildren, INotas, INotasContext } from "../types/notas";

export const NotasContext = createContext({} as INotasContext );

export const NotasProvider = ({ children }: IChildren) => {
  const [ notas, setNotas] = useState<INotas[]>([]);
  const [ totalPages, setTotalPages] = useState(0);
  const token = localStorage.getItem('token');

  const getNotas = async (page: string) => {
    try {
        api.defaults.headers.common['Authorization'] = token;
        nProgress.start();
        const { data } = await api.get(`/atividade/listar-nota?pagina=${parseInt(page) - 1}&tamanho=5`);
        setTotalPages(data.totalPages);
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
    <NotasContext.Provider value={{ getNotas, notas, setNotas }}>
      {children}
    </NotasContext.Provider>
  );
};