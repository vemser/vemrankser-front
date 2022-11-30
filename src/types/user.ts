export interface IUserLogin {
    email: string,
    senha: string,
    nome?: string
}

export interface IChildren {
    children?: React.ReactNode
}

export interface IUser {
    nome: string,
    login: string,
    email: string,
    senha: string,
    cidade: string,
    tipoPerfil: number,
    especialidade?: string,
    foto?: string,
    statusUsuario?: string,
    idUsuario?: number
}

export interface IUserContext {
    createUser: (user: IUser) => Promise<void>,
    getUsersList: (page: number) => Promise<void>,
    editUser: (data: IUser ) => Promise<void>,
    user: IUser[],
    totalPages: number
}