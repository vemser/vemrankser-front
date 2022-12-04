import { createContext, useState } from 'react';
import { api } from '../utils/api';
import { IModulo, IModuloContext } from '../types/modulo';
import { IChildren } from '../types/aluno';
import { toast } from 'react-toastify';
import { toastConfig } from '../types/toast';
import nProgress from 'nprogress';

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
