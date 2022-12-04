import { yupResolver } from '@hookform/resolvers/yup';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ButtonPrimary, ButtonSecondary } from '../../components/Buttons/Button';
import { ErrorMessage, Titulo } from '../../components/Styles/Component.styled';
import { ButtonWraper, ContentWrapper } from '../../components/Styles/Container.styled';
import { ICadastraTrilha } from '../../types/trilha';
import { cadastraTrilhaSchema } from '../../utils/schemas';

export const CadastrarTrilha = () => {
  const [edicao, setEdicao] = useState()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICadastraTrilha>({
    resolver: yupResolver(cadastraTrilhaSchema),
  });


  return (
    <ContentWrapper>
      <Titulo>
        Cadastrar Nova Trilha
      </Titulo>
      <form>
        <TextField id="nome-cadastra-trilha" label="Nome" variant="outlined"
          sx={{ width: "300px", marginBottom: "5%", marginTop: "8%", backgroundColor: 'var(--branco)' }} size="small" {...register("nome")}/>
            {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}

        <FormControl sx={{ width: '300px', marginBottom: "5%", backgroundColor: 'var(--branco)' }} fullWidth size="small">
          <InputLabel id="label-select-cadastra-trilha">
            Edição
          </InputLabel>
          <Select
           value={edicao}
           {...register("nome")}
            labelId="label-select-cadastra-trilha"
            id="cadastra-trilha"
            // onChange={handleChangeSelect2}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={2}>3</MenuItem>
            <MenuItem value={2}>4</MenuItem>
            <MenuItem value={2}>5</MenuItem>
            <MenuItem value={2}>6</MenuItem>
            <MenuItem value={2}>7</MenuItem>
            <MenuItem value={2}>8</MenuItem>
            <MenuItem value={2}>9</MenuItem>
            <MenuItem value={2}>10</MenuItem>
            <MenuItem value={2}>12</MenuItem>
          </Select>
        </FormControl>
        {errors.edicao && <ErrorMessage>{errors.edicao.message}</ErrorMessage>}
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
        {errors.anoEdicao && <ErrorMessage>{errors. anoEdicao.message}</ErrorMessage>}
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
