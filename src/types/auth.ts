import { IUserLogin } from './user';

export interface IAuthContext {
    handleLogin: (user: IUserLogin) => Promise<void>,
    getLoggedUser: () => Promise<void>,
    handleLogout: () => Promise<void>,
    usuario: any
}

export interface IGetUser {
    idUsuario: number,
    foto: string[],
    nome: string,
    login: string,
    email: string,
    pontuacaoAluno: number,
    statusUsusario: number,
    tipoPerfil: number,
    cidade: string,
    especialidade: string,
    trilhas: any
}
