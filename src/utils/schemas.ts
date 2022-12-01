import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().required('Por favor, digite seu email').min(2, 'Email inválido').email('Por favor, digite um email válido').trim(),
    senha: yup.string().required('Por favor, digite sua senha').trim()
})

export const vinculaAlunoSchema = yup.object().shape({
    nome: yup.string().required('Por favor, digite o nome do aluno').min(2, 'Nome  inválido').trim(),
    trilha: yup.string().required('Por favor, selecione uma opção').oneOf(['Backend', 'Frontend', 'QA'])
    .label("Trilha"),
    edicao: yup.string().required('Por favor, selecione uma opção').oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'])
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