import { api } from "../utils/api";
import { createContext, useState } from "react";
import nProgress from "nprogress";
import { toast } from "react-toastify";
import { toastConfig } from "../types/toast";
import { IAluno, IAlunoContext,IChildren } from "../types/aluno";

export const AlunoContext = createContext({} as IAlunoContext);

export const AlunoProvider = ({ children }: IChildren) => {
  const [alunos, setAlunos] = useState<IAluno[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const token = localStorage.getItem('token');

  const getAlunos = async (page: number) => {
    try {
      nProgress.start();
      api.defaults.headers.common['Authorization'] = token;

      const { data } = await api.get(`/usuario/lista-alunos-trilha-geral?pagina=${page -1}&tamanho=4`);
      
      setTotalPages(data.quantidadePaginas);
      setAlunos(data.elementos);

    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    } finally {
      nProgress.done();
    }
  }
  const getAlunosWithNome = async (page: number, nome: string) => {
    try {
      api.defaults.headers.common['Authorization'] = token;
      nProgress.start();
      const { data } = await api.get(`/usuario/lista-alunos-trilha?pagina=${page - 1}&tamanho=4&nome=${nome}`);
      setTotalPages(data.quantidadePaginas);
      setAlunos(data.elementos);

    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    } finally {
      nProgress.done();
    }
  }
  const getAlunosWithTrilha = async (page: number, idTrilha: number) => {
    try {
      api.defaults.headers.common['Authorization'] = token;
      nProgress.start();
      const { data } = await api.get(`/trilha/lista-usuarios?pagina=${page - 1}&tamanho=4&idTrilha=${idTrilha}`);
      setTotalPages(data.quantidadePaginas);
      
      setAlunos(data.elementos.usuarios);
    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    } finally {
      nProgress.done();
    }
  }

  return (
    <AlunoContext.Provider value={{ getAlunos, alunos, setAlunos, totalPages, getAlunosWithNome, getAlunosWithTrilha }}>
      {children}
    </AlunoContext.Provider>
  );
};