export interface IComentarioContext{
    criaComentario: (idAtividade: number, comentario: string) => Promise<void>
}