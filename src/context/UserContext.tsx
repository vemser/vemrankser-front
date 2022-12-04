import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUserContext, IChildren, IUser, IUserPhoto } from '../types/user';
import { api } from '../utils/api';
import { toast } from 'react-toastify';
import { toastConfig } from '../types/toast';
import nProgress from 'nprogress';

export const UsersContext = createContext({} as IUserContext);

export const UsersProvider = ({ children }: IChildren) => {
  const [user, setUser] = useState<IUser[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const createUser = async (user: IUser) => {
    try {
      nProgress.start();

      let userType;

      switch (user.tipoPerfil) {
        case 1:
          userType = 'COORDENADOR'
          break

        case 2:
          userType = 'ALUNO'
          break

        case 3:
          userType = 'INSTRUTOR'
          break

        case 5:
          userType = 'GESTAO'
          break

        default:
          userType = ''
          break
      }

      api.defaults.headers.common['Authorization'] = token;
      await api.post(`/usuario/cadastro?tipoPerfil=${userType}`, user);

      toast.success('Pessoa cadastrada com sucesso!', toastConfig);
      navigate('/usuarios');
    } catch (error) {
      toast.error('Houve algum erro, por favor verifique os dados e tente novamente', toastConfig);
      console.error(error);
    } finally {
      nProgress.done();
    }
  }
  
  const addImage = async (data: IUserPhoto, ) => {
    try {
      nProgress.start();
      api.defaults.headers.common['Authorization'] = token;

      await api.post(`/usuario/upload-imagem/${data.idUsuario}`);

      toast.success('Foto adicionada com sucesso!', toastConfig);
      navigate('/usuarios');
    } catch (error) {
      toast.error('Houve algum erro, por favor verifique os dados e tente novamente', toastConfig);
      console.error(error);
    } finally {
      nProgress.done();
    }
  }

  const editUser = async (data: IUser) => {
    try {
      nProgress.start();

      await api.put(`/usuario/atualizar/${data.idUsuario}`, data);

      toast.success("Usuário atualizado com sucesso!", toastConfig);
      navigate('/usuarios');
    } catch (error) {
      console.error(error);
      toast.error("Houve algum erro, por favor verifique os dados e tente novamente", toastConfig);
    } finally {
      nProgress.done();
    };
  };

  const getUsersList = async (page: number) => {
    try {
      nProgress.start();

      api.defaults.headers.common['Authorization'] = token;

      const { data } = await api.get(`/usuario/lista-usuarios?pagina=${page - 1}&tamanho=6`);
      setTotalPages(data.quantidadePaginas);

      setUser(data.elementos);
    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    } finally {
      nProgress.done();
    }
  }

  return (
    <UsersContext.Provider value={{ createUser, addImage, getUsersList, user, editUser, totalPages }}>
      {children}
    </UsersContext.Provider>
  )
}
