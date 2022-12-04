import { IAtividadeById } from "./atividade";

export interface IPerfilContext {
    getAtividadesbyId: (idUsuario: number) => Promise<void>,
    atividadesById: IAtividadeById[]
}