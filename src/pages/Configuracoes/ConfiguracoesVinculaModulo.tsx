import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { Link } from 'react-router-dom'
import { ButtonPrimary, ButtonSecondary } from '../../components/Buttons/Button'
import { Titulo } from '../../components/Styles/Component.styled'
import { ButtonWraper, ContentWrapper } from '../../components/Styles/Container.styled'

export const ConfiguracoesVinculaModulo = () => {
  return (
      <ContentWrapper>
        <Titulo>
        Vincula Instrutor a nova trilha 
        </Titulo>
        <form>
          <FormControl
            sx={{
              width: '300px',
              
              backgroundColor: "var(--cor-de-fundo)",
            }}
            fullWidth
            size="small"
          >
             <InputLabel id="label-select-escolhe-instrutor">
              Instrutores
            </InputLabel>
            <Select
              labelId="label-select-escolhe-instrutor"
              id="escolhe-instrutor-trilha"
              label="Instrutores"
            //   onChange={}
            >
              <MenuItem value={1}>Cris</MenuItem>
              <MenuItem value={2}>May</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              width: '300px',
              
              backgroundColor: "var(--cor-de-fundo)",
            }}
            fullWidth
            size="small"
          >
             <InputLabel id="label-select-escolhe-edicao">
              Edição
            </InputLabel>
            <Select
              labelId="label-select-escolhe-edicao"
              id="escolhe-edicao-trilha"
              label="Edicao"
            //   onChange={}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>
          <ButtonWraper>
            <Link to={'/configuracoes'}>
            <ButtonPrimary
              label="Adicionar"
              id="botao-vincula-instrutor-trilha"
              type="submit"
            />
            </Link>
            
            <Link to={"/configuracoes"}>
              <ButtonSecondary
                type="button"
                label="Cancelar"
                id="botao-cancela-vincula-instrutor-trilha"
              />
            </Link>
          </ButtonWraper>
        </form>

      </ContentWrapper>

  )
}
