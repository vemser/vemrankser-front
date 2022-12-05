import { createContext, useState } from 'react';
import { api } from '../utils/api';
import { ICadastraModulo, IModulo, IModuloContext, IVinculaModulo } from '../types/modulo';
import { IChildren } from '../types/aluno';
import { toast } from 'react-toastify';
import { toastConfig } from '../types/toast';
import nProgress from 'nprogress';
import { useNavigate } from 'react-router-dom';

export const ModuloContext = createContext({} as IModuloContext);

export const ModuloProvider = ({ children }: IChildren) => {
  const [modulos, setModulos] = useState<IModulo[]>([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate()

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
  const cadastraNovoModulo = async (data: ICadastraModulo) => {
    try{
      api.defaults.headers.common['Authorization'] = token;
        await api.post(`/modulo/adicionar-modulo`, data);
      toast.success('Módulo criado com sucesso!', toastConfig);
      navigate('/configuracoes/instrutor')
    }
    catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor verifique os dados e tente novamente', toastConfig);
    }
  }
  const vinculaModulo = async (data: IVinculaModulo) => {
    try{
      api.defaults.headers.common['Authorization'] = token;
        await api.post(`/modulo/vincular-modulo-trilha/${data.idModulo}/${data.idTrilha}`, data);
      toast.success('Módulo vinculado com sucesso!', toastConfig);
      navigate('/configuracoes/instrutor')
    }
    catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor verifique os dados e tente novamente', toastConfig);
    }
  }

  return (
    <ModuloContext.Provider value={{ getModulos, modulos, cadastraNovoModulo, vinculaModulo }}>
      {children}
    </ModuloContext.Provider>
  );
};
