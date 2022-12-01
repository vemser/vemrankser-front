export interface IAtividade {
    nome: string;
    dataEntrega: string;
  }
  export interface ITrilha {
    nome: string,
    edicao: number,
    anoEdicao: string,
    idTrilha: number
  }

export interface IChildren{
    children?:React.ReactNode;
}

export interface IAtividadeContext {
    getAtividade: (page: string) => Promise<void>
    atividades: IAtividade[]
    setAtividades: React.Dispatch<React.SetStateAction<IAtividade[]>>
}


