import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom'
import { ButtonPrimary, ButtonSecondary } from '../../components/Buttons/Button'
import { Titulo } from '../../components/Styles/Component.styled'
import { ButtonWraper, ContentWrapper } from '../../components/Styles/Container.styled'

export const ConfiguracoesAdicionaModulo = () => {
  return (
      <ContentWrapper>
        <Titulo>
        Adicionar Novo Modulo
        </Titulo>
        <form>
          <TextField
            id="nome-cadastra-modulo"
            label="Nome"
            variant="outlined"
            sx={{
              width: '300px',
              marginTop: "10%",
              backgroundColor: "var(--cor-de-fundo)",
            }}
            size="small"
          />
          <TextField 
          sx={{
            width: '300px',
            backgroundColor: "var(--cor-de-fundo)",
          }}
          fullWidth
          size="small"
           className="input-data" id={'textfield-data-inicio-cadastra-modulo'} placeholder={'teste'} type={'date'} />
            <TextField 
          sx={{
            width: '300px',
            backgroundColor: "var(--cor-de-fundo)",
          }}
          fullWidth
          size="small"
           className="input-data" id={'textfield-data-fim-cadastra-modulo'} placeholder={'teste'} type={'date'} />
          <ButtonWraper>
            <ButtonPrimary
              label="Adicionar"
              id="botao-adiciona-cadastro-modulo"
              type="submit"
            />
            <Link to={"/configuracoes/instrutor"}>
              <ButtonSecondary
                type="button"
                label="Cancelar"
                id="botao-cancela-cadastro-modulo"
              />
            </Link>
          </ButtonWraper>
        </form>
      </ContentWrapper>
  )
}
