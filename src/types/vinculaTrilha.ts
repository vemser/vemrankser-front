export interface ITrilha {
    nome: string,
    idTrilha: number
    edicao: number
  }

  export interface IVinculaTrilha {
    nome: string,
    edicao: number,
    login: string
  }

  export interface IVinculaTrilhaContext {
    getTrilhas:() => Promise<void>,
   trilhas: ITrilha[]
   vinculaTrilha: (payload: IVinculaTrilha) => Promise<void>
  }


