import { ITrilha } from "./vinculaTrilha";

export interface IAluno {
    nome: string,
    email: string,
    statusUsuario: number,
    trilhas: ITrilha[],
  }

export interface IChildren{
    children?:React.ReactNode;
}

export interface IAlunoContext {
    getAlunos: (page: number) => Promise<void>,
    alunos: IAluno[],
    setAlunos: React.Dispatch<React.SetStateAction<IAluno[]>>,
    totalPages: number,
  }


  export interface ICriaAlunos {
    nome: string,
    dataNascimento: string,
    cpf: string,
    email: string,
    idPessoa: number
}