import { api } from "../utils/api";
import { createContext, useState } from "react";
import nProgress from "nprogress";
import { toast } from "react-toastify";
import { toastConfig } from "../types/toast";
import { IChildren, IVinculaAluno, IVinculaAlunoContext } from "../types/vinculaAluno";

export const VinculaAlunoContext = createContext({} as IVinculaAlunoContext);

export const VinculaAlunoProvider = ({ children }: IChildren) => {
  const [vinculaAlunos, setVinculaAlunos] = useState<IVinculaAluno[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const token = localStorage.getItem('token');

  const getVinculaAluno = async (page: number) => {
    try {
      api.defaults.headers.common['Authorization'] = token;
      nProgress.start();
      const { data } = await api.get(`/usuario/lista-alunos-trilha?pagina=${page - 1}&tamanho=4`);
      setTotalPages(data.quantidadePaginas);
      setVinculaAlunos(data.elementos);
      console.log(data.elementos)

    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    } finally {
      nProgress.done();
    }
  }
  return (
    <VinculaAlunoContext.Provider value={{ getVinculaAluno, vinculaAlunos, setVinculaAlunos, setTotalPages }}>
      {children}
    </VinculaAlunoContext.Provider>
  );
};