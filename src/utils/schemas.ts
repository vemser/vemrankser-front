
import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().required('Por favor, digite seu email').min(2, 'Email inválido').email('Por favor, digite um email válido').trim(),
    senha: yup.string().required('Por favor, digite sua senha').trim()
}) 
export const vinculaAlunoSchema = yup.object().shape({
     idTrilha: yup.number().required('Por favor, selecione uma opção')
    .label("nome"),
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
    descricao: yup.string().required('Por favor, digite a descrição da atividade').trim(),
    trilha: yup.string().required('Por favor, selecione pelo meno uma trilha'),
    modulo: yup.string().required('Por favor, selecione um módulo'),
    dataEntrega: yup.date().required().min("2022-11-30", "Date inválida, por favor digite outra data")
});
   

