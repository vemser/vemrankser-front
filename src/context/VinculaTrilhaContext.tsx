import { api } from "../utils/api";
import { createContext, useState } from "react";
import nProgress from "nprogress";
import { toast } from "react-toastify";
import { toastConfig } from "../types/toast";
import { IChildren } from "../types/aluno";
import { ITrilha, IVinculaTrilha, IVinculaTrilhaContext } from "../types/vinculaTrilha";

export const VinculaTrilhaContext = createContext({} as IVinculaTrilhaContext);

export const VinculaTrilhaProvider = ({ children }: IChildren) => {
  const [trilhas, setTrilhas] = useState<ITrilha[]>([]);
  const token = localStorage.getItem('token');

  const getTrilhas = async () => {
    try {
      api.defaults.headers.common['Authorization'] = token;
      nProgress.start();
      const { data } = await api.get(`/trilha/lista-trilha-nome`);
      setTrilhas(data);

    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    } finally {
      nProgress.done();
    }
  }
  const vinculaTrilha = async (payload:IVinculaTrilha) => {
    try {
      api.defaults.headers.common['Authorization'] = token;
      nProgress.start();
      const { data } = await api.post(`/trilha/adicionar-aluno-trilha?login=${payload.login}&idTrilha=${payload.idTrilha}`);
    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    } finally {
      nProgress.done();
    }
  }

  return (
    <VinculaTrilhaContext.Provider value={{ getTrilhas, trilhas, vinculaTrilha }}>
      {children}
    </VinculaTrilhaContext.Provider>
  );
};