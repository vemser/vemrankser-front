import { UsersContext } from "../context/UserContext";

export enum UserStatus{
   INATIVO = 0,
    ATIVO = 1,
}
export interface IAluno {
    nome: string,
    email: string,
    status: UserStatus,
    trilhas: ITrilha[],
  }

  export interface ITrilha {
    nome: string,

  }


export interface IChildren{
    children?:React.ReactNode;
}

export interface IAlunoContext {
    getAlunos: (page: string) => Promise<void>
    alunos: IAluno[]
    setAlunos: React.Dispatch<React.SetStateAction<IAluno[]>>
  }