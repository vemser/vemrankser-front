export interface INotas {
    nome: string;
    nota: number;
    idAtividade: number;
  }

export interface IChildren{
    children?:React.ReactNode;
}

export interface INotasContext {
    getNotas: (page: number) => Promise<void>
    notas: INotas[]
    setNotas: React.Dispatch<React.SetStateAction<INotas[]>>
    totalPages: number
    
  }