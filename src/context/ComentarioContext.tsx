import { api } from "../utils/api";
import { createContext, useState } from "react";
import { IChildren } from "../types/atividade";
import nProgress from "nprogress";
import { toast } from "react-toastify";
import { toastConfig } from "../types/toast";
import { IComentario, IComentarioContext } from "../types/comentario";


export const ComentarioContext = createContext({} as IComentarioContext);

export const ComentarioProvider = ({ children }: IChildren) => {
  const token = localStorage.getItem('token');
  const [comentariosPositivos, setComentariosPositivos] = useState<IComentario[]>([])
  const [comentariosNegativos, setComentariosNegativos] = useState<IComentario[]>([])

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

  const getComentariosAlunos = async ( idAluno: number) => {
    try {
         nProgress.start();
         api.defaults.headers.common['Authorization'] = token;
        const { data } = await api.get(`/comentario/listar-comentarios-aluno?idAluno=${idAluno}`);
        const positivos = data.filter((comentario: IComentario)=>
        comentario.statusComentario===1
        )
        const negativos = data.filter((comentario: IComentario)=>
        comentario.statusComentario===2
        )
        setComentariosPositivos(positivos)
        setComentariosNegativos(negativos)
       } catch (error) {
         console.error(error);
         toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
       } finally {
         nProgress.done();
       }
     }

     const criaFeedbackAlunos = async ( idAluno: number, tipoFeedback: 1|2, comentario: string) => {
      try {
           nProgress.start();
           api.defaults.headers.common['Authorization'] = token;
           await api.post(`/comentario/adicionar-feedback?idAluno=${idAluno}&tipoFeedback=${tipoFeedback===1?'POSITIVO':'NEGATIVO'}`, {comentario, statusComentario:tipoFeedback});
           toast.success('Feedback adicionado com sucesso!', toastConfig);
         } catch (error) {
           console.error(error);
           toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
         } finally {
           nProgress.done();
         }
       }
  

  return (
    <ComentarioContext.Provider value={{ criaComentario, getComentariosAlunos, comentariosPositivos, comentariosNegativos,  criaFeedbackAlunos}}>
      {children}
    </ComentarioContext.Provider>
  );
};