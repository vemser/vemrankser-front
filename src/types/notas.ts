export interface INotas {
    nome: string;
    nota: number;
  }

export interface IChildren{
    children?:React.ReactNode;
}

export interface INotasContext {
    getNotas: (page: string) => Promise<void>
    notas: INotas[]
    setNotas: React.Dispatch<React.SetStateAction<INotas[]>>
  }