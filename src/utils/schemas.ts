import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().required('Por favor, digite seu email').min(2, 'Email inválido').email('Por favor, digite um email válido').trim(),
    senha: yup.string().required('Por favor, digite sua senha').trim()
})

export const vinculaAlunoSchema = yup.object().shape({
    idTrilha: yup.array().typeError('Por favor, selecione uma opção').required('Por favor, selecione uma opção'),
    login: yup.string().required('Por favor, digite o login').min(2, 'Login  inválido').trim(),
})

export const adicionaUsuarioSchema = yup.object().shape({
    nome: yup.string().required('Por favor, digite o nome').min(2, 'O nome deve conter no mínimo 2 letras').trim(),
    email: yup.string().required('Por favor, digite o email').min(2, 'Email inválido').email('Por favor, digite um email válido').trim(),
    login: yup.string().required('Por favor, digite o login').min(3, 'O login deve conter no mínimo 3 caracters').trim(),
    senha: yup.string().required('Por favor, digite uma senha').trim(),
    cidade: yup.string().required('Por favor, digite a cidade').trim(),
    especialidade: yup.string().trim(),
    tipoPerfil: yup.number().required('Por favor, selecione uma opção')
})

export const editaAlunoSchema = yup.object().shape({
    nome: yup.string().required('Por favor, digite o nome do aluno').min(2, 'Nome  inválido').email('Por favor, digite o nome do aluno corretamente').trim(),
    trilha: yup.string().required('Por favor, selecione uma opção').oneOf(['Geral', 'Backend', 'Frontend', 'QA'])
    .label("Trilha"),
    modulo: yup.string().required('Por favor, selecione uma opção')
})

export const cadastraAtividadeSchema = yup.object().shape({
    titulo: yup.string().required('Por favor, digite o titulo da atividade').trim(),
    instrucoes: yup.string().required('Por favor, digite a descrição da atividade').trim(),
    idModulo: yup.number().required('Por favor, selecione um módulo').typeError('Por favor, selecione uma opção'),
    pesoAtividade: yup.string().required('Por favor, selecione o peso').typeError('Por favor, selecione uma opção'),
    dataEntrega: yup.date().required().typeError('Por favor, selecione uma opção').min("2022-11-30", "Date inválida, por favor digite outra data")
});

export const detalhesNotasSchema = yup.object().shape({
    nota: yup.number().required('Por favor, digite a nota do aluno'),
    link: yup.string().required('Por favor, adicione o link da atividade').trim(),
});

export const editaUsuarioSchema = yup.object().shape({
    nome: yup.string().required('Por favor, digite o nome').min(2, 'O nome deve conter no mínimo 2 letras').trim(),
    email: yup.string().required('Por favor, digite o email').min(2, 'Email inválido').email('Por favor, digite um email válido').trim(),
    login: yup.string().required('Por favor, digite o login').min(3, 'O login deve conter no mínimo 3 caracters').trim(),
    cidade: yup.string().required('Por favor, digite a cidade').trim(),
    especialidade: yup.string().trim(),
    statusUsuario: yup.number().required('Por favor, informe o status'),
    idUsuario: yup.number().required()
})

export const cadastraTrilhaSchema = yup.object().shape({
    nome: yup.string().required('Por favor, digite o nome da trilha').min(2, 'Nome  inválido').trim(),
    edicao: yup.number().required('Por favor, selecione uma opção')
    .label("Edicao"),
    anoEdicao: yup.string().required('Por favor, selecione uma opção')
})

export const vinculaInstrutorSchema = yup.object().shape({
    login: yup.string().required('Por favor, digite o login').min(2, 'Login  inválido').trim(),
})
export const cadastraNovoModuloSchema = yup.object().shape({
    nome: yup.string().required('Por favor, digite o nome do módulo').min(2, 'Nome  inválido').trim(),
    dataInicio: yup.string().required('Por favor, selecione uma opção')
    .label("Edicao"),
    dataFim: yup.string().required('Por favor, selecione uma opção'),
})

export const vinculaModuloTrilhaSchema = yup.object().shape({
    idTrilha: yup.number().required('Por favor, selecione uma opção'),
    idModulo: yup.number().required('Por favor, selecione uma opção')
   
})
