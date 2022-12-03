import { IAtividadeById } from "./atividade";
import { IUser } from "./user";

export interface IPerfilContext {
    getAtividadesbyId: (userId: IUser) => Promise<void>,
    atividadesById: IAtividadeById[]
}