export interface IUserContext {
    createUser: (user: IUser) => Promise<void>,
    getUsersList: (page: number) => Promise<void>,
    editUser: (data: IUser) => Promise<void>,
    getPhoto: (id: number) => Promise<void>,
    user: IUser[],
    photo: any,
    totalPages: number
}

export interface IChildren {
    children?: React.ReactNode
}

export interface IUserLogin {
    email: string,
    senha: string,
    nome?: string
}

export interface IUserPhoto {
    idUsuario: number,
    foto: FormData
}


export interface IUser {
    nome: string,
    login: string,
    email: string,
    senha: string,
    cidade: string,
    tipoPerfil: number,
    especialidade?: string,
    foto?: any,
    statusUsuario?: string,
    idUsuario?: number
}

