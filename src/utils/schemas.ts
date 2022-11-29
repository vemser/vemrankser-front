import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().required('Por favor, digite seu email').min(2, 'Email inválido').email('Por favor, digite um email válido').trim(),
    senha: yup.string().required('Por favor, digite sua senha').trim()
})

export const vinuculaAlunoSchema = yup.object().shape({
    nome: yup.string().required('Por favor, digite o nome do aluno').min(2, 'Nome  inválido').trim(),
    trilha: yup.string().required('Por favor, selecione uma opção').oneOf(['Geral', 'Backend', 'Frontend', 'QA'])
    .label("Trilha"),
    modulo: yup.string().required('Por favor, selecione uma opção')
})
export const adicionaUsuarioSchema = yup.object().shape({
    nome: yup.string().required('Por favor, digite o nome do aluno').min(2, 'Nome  inválido').trim(),
    email: yup.string().required('Por favor, digite seu email').min(2, 'Email inválido').email('Por favor, digite um email válido').trim(),
    senha: yup.string().required('Por favor, digite sua senha').trim(),
    atuacao: yup.string().required('Por favor, selecione uma opção').oneOf(['Instrutor', 'Coordenador', 'Administrador', 'Gestão de Pessoas', 'Aluno'])
    .label("Trilha"),
    trilha: yup.string().required('Por favor, selecione uma opção').oneOf(['BackEnd', 'FrontEnd', 'QA'])
})