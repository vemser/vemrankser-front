import { api } from "../utils/api";
import { createContext, useState } from "react";
import nProgress from "nprogress";
import { toast } from "react-toastify";
import { toastConfig } from "../types/toast";
import { IAluno, IChildren } from "../types/aluno";
import { ITrilha, IVinculaTrilha, IVinculaTrilhaContext } from "../types/vinculaTrilha";
import { useNavigate } from "react-router-dom";

export const VinculaTrilhaContext = createContext({} as IVinculaTrilhaContext);

export const VinculaTrilhaProvider = ({ children }: IChildren) => {
  const [trilhas, setTrilhas] = useState<ITrilha[]>([]);
  const [alunoEmTrilha, setAlunoEmTrilha] = useState<any>();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const getTrilhas = async () => {
    try {
      nProgress.start();
      api.defaults.headers.common['Authorization'] = token;

      const { data } = await api.get(`/trilha/lista-trilha-nome`);

      setTrilhas(data);
    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    }
  }

  const getAlunosEmTrilha = async (idTrilha: string) => {
    try {
      nProgress.start();
      api.defaults.headers.common['Authorization'] = token;

      const { data } = await api.get(`/trilha/lista-alunos-trilha?pagina=0&tamanho=4&idTrilha=${idTrilha}`);

      setAlunoEmTrilha(data);
    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    }
  }

  const vinculaTrilha = async (data: IVinculaTrilha) => {
    try {
      nProgress.start();

      api.defaults.headers.common['Authorization'] = token;

      const queryIdTrilha = data.idTrilha.map((id) => {
        return `&idTrilha=${id}`
      }).join().replace(/,/g, '')

      await api.post(`/trilha/adicionar-aluno-trilha?login=${data.login}${queryIdTrilha}`, data);

      toast.success('Aluno vinculado com sucesso!', toastConfig);
      navigate('/alunos');
    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);

    } finally {
      nProgress.done();
    }
  }
  return (
    <VinculaTrilhaContext.Provider value={{ getTrilhas, getAlunosEmTrilha, trilhas, alunoEmTrilha, vinculaTrilha }}>
      {children}
    </VinculaTrilhaContext.Provider>
  );
};