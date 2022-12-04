export interface IVinculaTrilhaContext {
  getTrilhas: () => Promise<void>
  trilhas: ITrilha[]
  vinculaTrilha: (payload: IVinculaTrilha) => Promise<void>
  getRanking: (idTrilha: number) => Promise<void>
  ranking: IRanking[]
}

export interface ITrilha {
  nome: string,
  idTrilha: number,
  edicao: number,
  indexOf?: any
}

export interface ICadastraTrilha{
  nome: string,
  edicao: number,
  anoEdicao:string
}

export interface IRanking{
  nome: string,
  pontuacaoAluno: number,
  foto: string,
  idUsuario: number
}

export interface IVinculaTrilha {
  idTrilha: number[],
  login: string
}
