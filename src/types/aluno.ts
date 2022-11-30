

export interface IAluno {
    nome: string,
    email: string,
    statusUsuario: number,
    trilhas: ITrilha[],
  }

  export interface ITrilha {
    nome: string,

  }


export interface IChildren{
    children?:React.ReactNode;
}

export interface IAlunoContext {
    getAlunos: (page: string) => Promise<void>
    alunos: IAluno[]
    setAlunos: React.Dispatch<React.SetStateAction<IAluno[]>>
    getAlunosWithFilters: (page: string, nome?: string) => Promise<void>
  }