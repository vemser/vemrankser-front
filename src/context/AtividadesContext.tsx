import { api } from "../utils/api";
import { createContext, useState } from "react";
import { IAtividade, IAtividadeContext, IChildren } from "../types/atividade";
import nProgress from "nprogress";
import { toast } from "react-toastify";
import { toastConfig } from "../types/toast";
import { ICadastraAtividade } from "../types/cadastraAtividade";
import { useNavigate } from "react-router-dom";


export const AtividadeContext = createContext({} as IAtividadeContext);

export const AtividadeProvider = ({ children }: IChildren) => {
  const [atividades, setAtividades] = useState<IAtividade[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const getAtividade = async (page: number) => {
    try {
      api.defaults.headers.common['Authorization'] = token;
      nProgress.start();
      const { data } = await api.get(`/atividade/listar-paginado?pagina=${page - 1}&tamanho=4`);
      setTotalPages(data.quantidadePaginas);
      setAtividades(data.elementos);
      console.log(data.elementos)

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
      const idTrilha = payload.idTrilha?.map((id)=> `&idTrilha=${id}`).join('')
      await api.post(`/atividade?idModulo=${payload.idModulo}${idTrilha}`, payload);
      toast.success('Atividade cadastrada com sucesso!', toastConfig);
      navigate('/atividades')
    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    } finally {
      nProgress.done();
    }
  }
  const avaliar = async (idAtividade: number, notaAvaliacao: number, idAluno: number, comentario:string) => {
 try {
      nProgress.start();
      api.defaults.headers.common['Authorization'] = token;
      await api.put(`/atividade/avaliar-comentar-atividade?idAtividade=${idAtividade}&idAluno=${idAluno}`, {notaAvaliacao, comentario});
      toast.success('Atividade corrigida com sucesso!', toastConfig);
      // navigate('/atividades')
    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    } finally {
      nProgress.done();
    }
  }

  const entregar = async (idAtividade: number, link: string, idAluno: number) => {
    try {
         nProgress.start();
         api.defaults.headers.common['Authorization'] = token;
         await api.post(`/link/enviar?idAtividade=${idAtividade}&idAluno=${idAluno}`,{link});
         toast.success('Atividade enviada com sucesso!', toastConfig);
       } catch (error) {
         console.error(error);
         toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
       } finally {
         nProgress.done();
       }
     }
     const getAtividadeWithIdTrilha = async (page: number, idTrilha: number) => {
      try {
        api.defaults.headers.common['Authorization'] = token;
        nProgress.start();
        const { data } = await api.get(`/atividade/listar-mural-instrutor?pagina=${page - 1}&tamanho=4&idTrilha=${idTrilha}`);
        setTotalPages(data.quantidadePaginas);
        setAtividades(data.elementos);
        console.log(data.elementos)
      } catch (error) {
        console.error(error);
        toast.error('Nenhuma atividade encontrada nessa trilha! Por favor, selecione outra trilha', toastConfig);
      } finally {
        nProgress.done();
      }
    }
    const getAtividadeAluno = async (page: number, idUsuario: number, status: "PENDENTE" | "CONCLUIDA") => {
      try {
        api.defaults.headers.common['Authorization'] = token;
        nProgress.start();
        const { data } = await api.get(`/atividade/listar-mural-aluno?pagina=${page - 1}&tamanho=4&atividadeStatus=${status}&idUsuario=${idUsuario}`);
        setTotalPages(data.quantidadePaginas);
        setAtividades(data.elementos);
        console.log(data.elementos)
      } catch (error) {
        console.error(error);
        toast.error('Nenhuma atividade encontrada!', toastConfig);
      } finally {
        nProgress.done();
      }
    }

  return (
    <AtividadeContext.Provider value={{ getAtividade, atividades, setAtividades, criaAtividade, totalPages, entregar, avaliar, getAtividadeWithIdTrilha, getAtividadeAluno}}>
      {children}
    </AtividadeContext.Provider>
  );
};