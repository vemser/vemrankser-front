import { createContext, useState } from 'react';
import { IComentario, IComentarioContext } from '../types/comentario';
import { IChildren } from '../types/atividade';
import { toast } from 'react-toastify';
import { toastConfig } from '../types/toast';
import { api } from '../utils/api';
import nProgress from 'nprogress';

export const ComentarioContext = createContext({} as IComentarioContext);

export const ComentarioProvider = ({ children }: IChildren) => {
  const token = localStorage.getItem('token');
  const [comentarios, setComentarios] = useState<IComentario[]>([])
  const [totalPages, setTotalPages] = useState(0);

  const criaComentario = async (idAtividade: number, comentario: string) => {
    try {
      nProgress.start();

      api.defaults.headers.common['Authorization'] = token;
      await api.post(`/comentario?idAtividade=${idAtividade}`, { comentario });

    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor verifique os dados e tente novamente', toastConfig);
    } finally {
      nProgress.done();
    }
  }

  const getComentariosAlunos = async (idAluno: number, page: number) => {
    try {
      nProgress.start();

      api.defaults.headers.common['Authorization'] = token;
      const { data } = await api.get(`/comentario/listar-comentarios-aluno?idAluno=${idAluno}&pagina=${page - 1}&tamanho=6`);

      setTotalPages(data.quantidadePaginas);
      setComentarios(data.elementos);
    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    } finally {
      nProgress.done();
    }
  }

  const criaFeedbackAlunos = async (idAluno: number, tipoFeedback: 1 | 2, comentario: string) => {
    try {
      nProgress.start();

      api.defaults.headers.common['Authorization'] = token;
      await api.post(`/comentario/adicionar-feedback?idAluno=${idAluno}&tipoFeedback=${tipoFeedback === 1 ? 'POSITIVO' : 'NEGATIVO'}`, { comentario, statusComentario: tipoFeedback });

      toast.success('Feedback adicionado com sucesso!', toastConfig);
    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor verifique os dados e tente novamente', toastConfig);
    } finally {
      nProgress.done();
    }
  }

  return (
    <ComentarioContext.Provider value={{ criaComentario, getComentariosAlunos, comentarios, criaFeedbackAlunos, totalPages }}>
      {children}
    </ComentarioContext.Provider>
  );
};
