export interface INotas {
    nome: string;
    nota: number;
    idAtividade: number;
  }

export interface IChildren{
    children?:React.ReactNode;
}

export interface INotasFilterParams {
  idTrilha?: number;
  idModulo?: number;
  atividadeStatus?: 'PENDENTE' | 'CONCLUIDA';

}

export interface INotasContext {
  getNotas: (page: number, filterParams?: INotasFilterParams) => Promise<void>
    notas: INotas[]
    setNotas: React.Dispatch<React.SetStateAction<INotas[]>>
    totalPages: number
    
  }