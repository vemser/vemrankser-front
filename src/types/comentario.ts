export interface IComentarioContext{
    criaComentario: (idAtividade: number, comentario: string) => Promise<void>
    getComentariosAlunos: (idAluno: number) => Promise<void>
    comentariosPositivos: IComentario[]
    comentariosNegativos: IComentario[]
    criaFeedbackAlunos: (idAluno: number, tipoFeedback: 1 | 2, comentario: string) => Promise<void>
}

export interface IComentario{
    comentario: string;
    statusComentario: number
}