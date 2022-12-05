export interface IModuloContext {
    getModulos: () => Promise<void>,
    modulos: IModulo[]
    cadastraNovoModulo: (data: ICadastraModulo) => Promise<void>
    vinculaModulo: (data: IVinculaModulo) => Promise<void>
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
}

export interface IVinculaModulo {
    idModulo: number,
    idTrilha: number
}