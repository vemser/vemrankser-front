export interface IModulo{
    nome: string;
    dataIncio: string,
    dataFim: string,
    idModulo: number
}

export interface IModuloContext{
    getModulos: () => Promise<void>
    modulos: IModulo[]
}