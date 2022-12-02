import { api } from "../utils/api";
import { createContext, useState } from "react";
import nProgress from "nprogress";
import { toast } from "react-toastify";
import { toastConfig } from "../types/toast";
import { IChildren } from "../types/aluno";
import { IModulo, IModuloContext } from "../types/modulo";

export const ModuloContext = createContext({} as IModuloContext);

export const ModuloProvider = ({ children }: IChildren) => {
  const [modulos, setModulos] = useState<IModulo[]>([]);
  const token = localStorage.getItem('token');

  const getModulos = async () => {
    try {
      nProgress.start();
      api.defaults.headers.common['Authorization'] = token;
      const { data } = await api.get(`/modulo/lista-todos-modulos`);
      setModulos(data);

    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    } finally {
      nProgress.done();
    }
  }

  return (
    <ModuloContext.Provider value={{ getModulos, modulos }}>
      {children}
    </ModuloContext.Provider>
  );
};