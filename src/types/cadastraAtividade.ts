import { number } from "yup";

export interface ICadastraAtividade{
    titulo: string,
    descricao: string,
    trilha: string,
    modulo: string,
    peso: number,
    dataEntre: string,

}