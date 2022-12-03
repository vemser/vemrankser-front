import { api } from "../utils/api";
import { createContext, useContext, useState } from "react";
import nProgress from "nprogress";
import { toast } from "react-toastify";
import { toastConfig } from "../types/toast";
import { IAluno, IAlunoContext,IChildren } from "../types/aluno";
import { AuthContext } from "./AuthContext";

export const AlunoContext = createContext({} as IAlunoContext);

export const AlunoProvider = ({ children }: IChildren) => {
  const [ alunos, setAlunos ] = useState<IAluno[]>([]);
  const [ totalPages, setTotalPages ] = useState(0);
  const { token } = useContext(AuthContext);

  const getAlunos = async (page: number) => {
    try {
      api.defaults.headers.common['Authorization'] = token;

      const { data } = await api.get(`/usuario/lista-alunos-trilha-geral?pagina=${page -1}&tamanho=4`);
      
      setTotalPages(data.quantidadePaginas);
      setAlunos(data.elementos);
    } catch (error) {
      console.error(error);
    }
  }

  const getAlunosWithNome = async (page: number, nome: string) => {
    try {
      api.defaults.headers.common['Authorization'] = token;
      nProgress.start();

      const { data } = await api.get(`/usuario/lista-alunos-trilha-geral?pagina=${page - 1}&tamanho=4&nome=${nome}`);
      setTotalPages(data.quantidadePaginas);
      setAlunos(data.elementos);

    } catch (error) {
      console.error(error);
    } finally {
      nProgress.done();
    }
  }

  return (
    <AlunoContext.Provider value={{ getAlunos, alunos, setAlunos, setTotalPages, totalPages, getAlunosWithNome }}>
      {children}
    </AlunoContext.Provider>
  );
};