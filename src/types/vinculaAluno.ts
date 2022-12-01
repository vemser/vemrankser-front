export interface IVinculaAluno {
    nome: string,
    email: string,
    statusUsuario: number,
    trilhas: IVinculaTrilha[],
  }
export interface IVinculaTrilha {
    nome: string,
    edicao: number,
    anoEdicao: string,
    idTrilha: number
  }
export interface IChildren{
    children?:React.ReactNode;
}
export interface IVinculaAlunoContext {
     getVinculaAluno: (page: number) => Promise<void>
     vinculaAlunos: IVinculaAluno[]
     setVinculaAlunos: React.Dispatch<React.SetStateAction<IVinculaAluno[]>>
     setTotalPages: React.Dispatch<React.SetStateAction<number>>
  }

