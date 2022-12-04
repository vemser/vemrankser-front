export interface IModuloContext {
    getModulos: () => Promise<void>,
    modulos: IModulo[]
}

export interface IModulo {
    nome: string,
    dataIncio: string,
    dataFim: string,
    idModulo: number
}

export interface ICadastraModulo {
    nome: string,
    dataInicio: string,
    dataFim: string,
    idModulo: number
}

export interface IVinculaModulo {
   idModulo: number,
    idTrilha: number
}