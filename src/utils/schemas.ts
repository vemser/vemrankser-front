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