import { ICadastraAtividade } from "./cadastraAtividade";
import { ITrilha } from "./vinculaTrilha";

export interface IAtividade {
    nomeInstrutor: string;
    dataEntrega: string;
    trilhas: ITrilha[];
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
    avaliar: (idAtividade: number, pontuacao: number) => Promise<void>
    entregar: (idAtividade: number, link: string) => Promise<void>
}


