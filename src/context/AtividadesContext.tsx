import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/api';
import { IAtividade, IAtividadeContext, IChildren } from '../types/atividade';
import { toastConfig } from '../types/toast';
import { ICadastraAtividade } from '../types/atividade';
import { toast } from 'react-toastify';
import nProgress from 'nprogress';

export const AtividadeContext = createContext({} as IAtividadeContext);

export const AtividadeProvider = ({ children }: IChildren) => {
  const [atividades, setAtividades] = useState<IAtividade[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const getAtividade = async (page: number) => {
    try {
      nProgress.start();

      api.defaults.headers.common['Authorization'] = token;
      const { data } = await api.get(`/atividade/listar-paginado?pagina=${page - 1}&tamanho=4`);

      setTotalPages(data.quantidadePaginas);
      setAtividades(data.elementos);
    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    } finally {
      nProgress.done();
    }
  }

  const criaAtividade = async (payload: ICadastraAtividade) => {
    try {
      nProgress.start();

      api.defaults.headers.common['Authorization'] = token;
      const idTrilha = payload.idTrilha?.map((id) => `&idTrilha=${id}`).join('');
      await api.post(`/atividade?idModulo=${payload.idModulo}${idTrilha}`, payload);

      toast.success('Atividade cadastrada com sucesso!', toastConfig);
      navigate('/instrutor/atividades');
    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor verifique os dados e tente novamente', toastConfig);
    } finally {
      nProgress.done();
    }
  }

  const avaliar = async (idAtividade: number, notaAvaliacao: number, idAluno: number, comentario: string) => {
    try {
      nProgress.start();

      api.defaults.headers.common['Authorization'] = token;
      await api.put(`/comentario/avaliar-comentar-atividade?idAluno=${idAluno}&idAtividade=${idAtividade}`, { notaAvaliacao, comentario });

      toast.success('Atividade corrigida com sucesso!', toastConfig);
    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor verifique os dados e tente novamente', toastConfig);
    } finally {
      nProgress.done();
    }
  }

  const entregar = async (idAtividade: number, link: string, idAluno: number) => {
    try {
      nProgress.start();

      api.defaults.headers.common['Authorization'] = token;
      await api.post(`/link/enviar?idAtividade=${idAtividade}&idAluno=${idAluno}`, { link });

      toast.success('Atividade enviada com sucesso!', toastConfig);
      navigate('/aluno/atividades')
    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    } finally {
      nProgress.done();
    }
  }

  const getAtividadeWithIdTrilha = async (page: number, idTrilha: number) => {
    try {
      nProgress.start();

      api.defaults.headers.common['Authorization'] = token;
      const { data } = await api.get(`/atividade/listar-mural-instrutor?pagina=${page - 1}&tamanho=4&idTrilha=${idTrilha}`);

      setTotalPages(data.quantidadePaginas);
      setAtividades(data.elementos);
    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    } finally {
      nProgress.done();
    }
  }

  const getAtividadeAluno = async (page: number, idUsuario: number, status: "PENDENTE" | "CONCLUIDA") => {
    try {
      nProgress.start();

      api.defaults.headers.common['Authorization'] = token;
      const { data } = await api.get(`/atividade/listar-mural-aluno?pagina=${page - 1}&tamanho=4&atividadeStatus=${status}&idUsuario=${idUsuario}`);

      setTotalPages(data.quantidadePaginas);
      setAtividades(data.elementos);
    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    } finally {
      nProgress.done();
    }
  }

  return (
    <AtividadeContext.Provider value={{ getAtividade, atividades, setAtividades, criaAtividade, totalPages, entregar, avaliar, getAtividadeWithIdTrilha, getAtividadeAluno }}>
      {children}
    </AtividadeContext.Provider>
  );
};