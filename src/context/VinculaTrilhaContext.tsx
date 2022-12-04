import { api } from "../utils/api";
import { createContext, useContext, useState } from "react";
import nProgress from "nprogress";
import { toast } from "react-toastify";
import { toastConfig } from "../types/toast";
import { IChildren } from "../types/aluno";
import { IRanking, ITrilha, IVinculaTrilha, IVinculaTrilhaContext } from "../types/vinculaTrilha";
import { useNavigate } from "react-router-dom";

export const VinculaTrilhaContext = createContext({} as IVinculaTrilhaContext);

export const VinculaTrilhaProvider = ({ children }: IChildren) => {
  const [trilhas, setTrilhas] = useState<ITrilha[]>([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [ranking, setRanking] = useState<IRanking[]>([])

  const getTrilhas = async () => {
    try {
      api.defaults.headers.common['Authorization'] = token;

      const { data } = await api.get(`/trilha/lista-trilha-nome`);
      setTrilhas(data);
      
    } catch (error) {
      console.error(error);
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
      toast.error('Houve algum erro, por favor verifique os dados e tente novamente', toastConfig);

    } finally {
      nProgress.done();
    }
  }
  
  const getRanking = async (idTrilha: number) => {
    try {
      api.defaults.headers.common['Authorization'] = token;

      const { data } = await api.get(`/trilha/lista-ranking?idTrilha=${idTrilha}`);
      setRanking(data);
      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <VinculaTrilhaContext.Provider value={{ getTrilhas, trilhas, vinculaTrilha, getRanking, ranking }}>
      {children}
    </VinculaTrilhaContext.Provider>
  );
};