import { createContext, useState } from 'react';
import { api } from '../utils/api';
import { IAluno, IAlunoContext, IAlunoFilterParams, IAlunoTrilha, IChildren, IContaAlunos } from '../types/aluno';
import { toastConfig } from '../types/toast';
import { toast } from 'react-toastify';
import nProgress from 'nprogress';

export const AlunoContext = createContext({} as IAlunoContext);

export const AlunoProvider = ({ children }: IChildren) => {
  const [alunos, setAlunos] = useState<IAluno[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const token = localStorage.getItem('token');
  const [alunosTrilha, setAlunosTrilha] = useState<IContaAlunos[]>([]);

  const getAlunos = async (page: number) => {
    try {
      nProgress.start();

      api.defaults.headers.common['Authorization'] = token;
      const { data } = await api.get(`/usuario/lista-alunos-trilha-geral?pagina=${page - 1}&tamanho=4`);

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
      nProgress.start();

      api.defaults.headers.common['Authorization'] = token;
      const { data } = await api.get(`/usuario/lista-alunos-trilha-geral?pagina=${page - 1}&tamanho=4&nome=${nome}`);

      setTotalPages(data.quantidadePaginas);
      setAlunos(data.elementos);
    } catch (error) {
      console.error(error);
    } finally {
      nProgress.done();
    }
  }

  const getAlunosPorTrilha = async () => {
    try {
      api.defaults.headers.common['Authorization'] = token;

      const { data } = await api.get(`/usuario/lista-alunos-trilha?pagina=${0}`);
      const usuarios: IContaAlunos[] = []
      data.elementos.forEach((usuario: IAlunoTrilha) => {
        const hasUsuario = usuarios.find((u) => u.idTrilha === usuario.idTrilha)
        if (hasUsuario) {
          hasUsuario.quantidadeAlunos++
        } else {
          usuarios.push({ idTrilha: usuario.idTrilha, nome: usuario.nomeTrilha, quantidadeAlunos: 1 })
        }
      })
      setAlunosTrilha(usuarios);
    } catch (error) {
      console.error(error);
    }
  }

  const getAlunosWithFilter = async (page: number, filterParams?: IAlunoFilterParams) => {
    try {
      api.defaults.headers.common['Authorization'] = token;

      let filterString = ''
      if (filterParams?.idTrilha) {
        filterString = filterString.concat(`&idTrilha=${filterParams.idTrilha}`)
      }
      const { data } = await api.get(`/usuario/lista-alunos-trilha?pagina=${page - 1}&tamanho=4${filterString}`);
      setTotalPages(data.quantidadePaginas);
      setAlunos(data.elementos);
    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    }
  }

  return (
    <AlunoContext.Provider value={{ getAlunos, alunos, setAlunos, setTotalPages, totalPages, getAlunosWithNome, getAlunosPorTrilha, alunosTrilha, getAlunosWithFilter }}>
      {children}
    </AlunoContext.Provider>
  );
};
