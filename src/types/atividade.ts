import { ICadastraAtividade } from "./cadastraAtividade";
import { ITrilha } from "./vinculaTrilha";

export interface IAtividade {
    nomeInstrutor: string;
    dataEntrega: string;
    dataCriacao: string;
    trilhas: ITrilha[];
    titulo: string;
    idAtividade: number;
  }
export interface IChildren{
    children?:React.ReactNode;
}

export interface IAtividadeContext {
    getAtividade: (page: number) => Promise<void>
    atividades: IAtividade[]
    setAtividades: React.Dispatch<React.SetStateAction<IAtividade[]>>
    criaAtividade: (payload: ICadastraAtividade) => Promise<void>
    totalPages: number
    avaliar: (idAtividade: number, notaAvaliacao: number, idAluno: number, comentario: string) => Promise<void>
    entregar: (idAtividade: number, link: string, idAluno: number) => Promise<void>
    getAtividadeWithIdTrilha: (page: number, idTrilha: number) => Promise<void>
    getAtividadeAluno: (page: number, idUsuario: number, status: "PENDENTE" | "CONCLUIDA") => Promise<void>
}

export interface IAtividadeById {
    idAtividade?: number,
    titulo?: string,
    instrucoes?: string,
    pesoAtividade?: number,
    dataCriacao?: string,
    dataEntrega?: string,
    statusAtividade?: string,
    nomeModulo?: string,
    trilhaNome?: string,
    edicao?: number
}