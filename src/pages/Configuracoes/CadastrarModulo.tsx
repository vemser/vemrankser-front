import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom'
import { ButtonPrimary, ButtonSecondary } from '../../components/Buttons/Button'
import { Titulo } from '../../components/Styles/Component.styled'
import { ButtonWraper, ContentWrapper } from '../../components/Styles/Container.styled'

export const CadastrarModulo = () => {
  return (
    <ContentWrapper>
      <Titulo>
        Cadastrar Novo Módulo
      </Titulo>
      <form>
        <TextField id="nome-cadastra-modulo" label="Nome do módulo" variant="outlined" sx={{ width: "300px", marginBottom: "6%", marginTop: "8%", backgroundColor: 'var(--branco)' }} size="small" />

        <label style={{ marginBottom: 4, textAlign: 'left', width: '300px', fontSize: '0.95rem', fontWeight: 500 }}>Data de início do Módulo</label>
        <TextField sx={{ width: '300px', marginBottom: "6%", backgroundColor: "var(--branco)" }} fullWidth size="small" className="input-data" id={'textfield-data-inicio-cadastra-modulo'} type={'date'} />

        <label style={{ marginBottom: 4, textAlign: 'left', width: '300px', fontSize: '0.95rem', fontWeight: 500 }}>Data de conclusão do Módulo</label>
        <TextField sx={{ width: '300px', marginBottom: "5%", backgroundColor: "var(--branco)" }} fullWidth size="small" className="input-data" id={'textfield-data-fim-cadastra-modulo'} type={'date'} />

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
