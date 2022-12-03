import { api } from "../utils/api";
import { createContext } from "react";
import { IChildren } from "../types/atividade";
import nProgress from "nprogress";
import { toast } from "react-toastify";
import { toastConfig } from "../types/toast";
import { IComentarioContext } from "../types/comentario";


export const ComentarioContext = createContext({} as IComentarioContext);

export const ComentarioProvider = ({ children }: IChildren) => {
  const token = localStorage.getItem('token');
  // const [comentarios, setComentarios] = 

  const criaComentario = async (idAtividade: number, comentario: string) => {
 try {
      nProgress.start();
      api.defaults.headers.common['Authorization'] = token;
      await api.post(`/comentario?idAtividade=${idAtividade}`, {comentario});
    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    } finally {
      nProgress.done();
    }
  }

  // const getComentariosAlunos = async ( idAluno: number) => {
  //   try {
  //        nProgress.start();
  //        api.defaults.headers.common['Authorization'] = token;
  //        await api.post(`/comentario?idAtividade=${idAtividade}`, {comentario});
  //      } catch (error) {
  //        console.error(error);
  //        toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
  //      } finally {
  //        nProgress.done();
  //      }
  //    }

    

  return (
    <ComentarioContext.Provider value={{ criaComentario }}>
      {children}
    </ComentarioContext.Provider>
  );
};