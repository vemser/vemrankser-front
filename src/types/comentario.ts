export interface IComentarioContext {
    criaComentario: (idAtividade: number, comentario: string) => Promise<void>,
    getComentariosAlunos: (idAluno: number, page: number) => Promise<void>,
    comentarios: IComentario[],
    criaFeedbackAlunos: (idAluno: number, tipoFeedback: 1 | 2, comentario: string) => Promise<void>,
    totalPages: number
}

export interface IComentario {
    comentario: string,
    statusComentario: number
}
