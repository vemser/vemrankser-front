import { IAluno } from "./aluno"

export interface ITrilha {
  nome: string,
  idTrilha: number,
  edicao: number
}

export interface IVinculaTrilha {
  idTrilha: number[],
  login: string
}

export interface IVinculaTrilhaContext {
  getTrilhas: () => Promise<void>,
  trilhas: ITrilha[]
  vinculaTrilha: (payload: IVinculaTrilha) => Promise<void>
}
