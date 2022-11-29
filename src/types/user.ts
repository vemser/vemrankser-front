export interface IUserLogin {
    email: string,
    senha: string
}

export interface IChildren {
    children?: React.ReactNode
}

export interface IUser {
    nome: string,
    email: string,
    senha: string,
    atuacao: string,
    trilha?: string,
    statusUsuario?: string
}

export interface IUserContext {
    createUser: (User: IUser) => Promise<void>,
    getUsersList: (page: number) => Promise<void>,
    editUser: (data: IUser ) => Promise<void>,
    user: IUser[] | any,
    totalPages: number
}