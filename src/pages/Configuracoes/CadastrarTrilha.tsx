import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { ButtonPrimary, ButtonSecondary } from '../../components/Buttons/Button';
import { Titulo } from '../../components/Styles/Component.styled';
import { ButtonWraper, ContentWrapper } from '../../components/Styles/Container.styled';

export const CadastrarTrilha = () => {
  return (
    <ContentWrapper>
      <Titulo>
        Cadastrar Nova Trilha
      </Titulo>
      <form>
        <TextField id="nome-cadastra-trilha" label="Nome" variant="outlined"
          sx={{ width: "300px", marginBottom: "5%", marginTop: "8%", backgroundColor: 'var(--branco)' }} size="small" />

        <FormControl sx={{ width: '300px', marginBottom: "5%", backgroundColor: 'var(--branco)' }} fullWidth size="small">
          <InputLabel id="label-select-cadastra-trilha">
            Edição
          </InputLabel>
          <Select
            labelId="label-select-cadastra-trilha"
            id="cadastra-trilha"
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

        <label style={{ marginBottom: 4, textAlign: 'left', width: '300px', fontSize: '0.95rem', fontWeight: 500 }}>Ano de edição da Trilha</label>
        <TextField
          sx={{
            width: '300px',
            backgroundColor: 'var(--branco)',
            marginBottom: "5%"
          }}
          fullWidth
          size="small"
          className="input-data" id={'textfield-data-cadastra-trilha'} type={'date'} />

        <ButtonWraper>
          <ButtonPrimary
            label="Adicionar"
            id="botao-adiciona-cadastro-trilha"
            type="submit"
          />
          <Link to={"/configuracoes"}>
            <ButtonSecondary
              type="button"
              label="Cancelar"
              id="botao-cancela-cadastro-trilha"
            />
          </Link>
        </ButtonWraper>
      </form>
    </ContentWrapper>
  )
}
