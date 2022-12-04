import { ITrilha } from "./vinculaTrilha";

export interface IAluno {
  nome: string,
  email: string,
  statusUsuario: number,
  trilhas: ITrilha[],
  login?: string,
  foto?: any
  idUsuario: number
}

export interface IChildren {
  children?: React.ReactNode;
}

export interface IAlunoContext {
  getAlunos: (page: number) => Promise<void>,
  alunos: IAluno[],
  setAlunos: React.Dispatch<React.SetStateAction<IAluno[]>>,
  totalPages: number,
  setTotalPages: React.Dispatch<React.SetStateAction<number>>,
  getAlunosWithNome: (page: number, nome: string) => Promise<void>
  getAlunosPorTrilha: () => Promise<void>
  alunosTrilha: IContaAlunos[]
  getAlunosWithFilter: (page: number, filterParams?: IAlunoFilterParams) => Promise<void>
}
export interface IAlunoFilterParams{
 nome?: string,
 idTrilha?: number,

}

export interface IAlunoTrilha {
  nomeTrilha: string,
  idTrilha: number
}

export interface IContaAlunos {
  nome: string,
  idTrilha: number
  quantidadeAlunos: number,
}

export interface ICriaAlunos {
  nome: string,
  dataNascimento: string,
  cpf: string,
  email: string,
  idPessoa: number
}