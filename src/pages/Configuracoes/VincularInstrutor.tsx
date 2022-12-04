import { yupResolver } from '@hookform/resolvers/yup'
import { OutlinedInput } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { ButtonPrimary, ButtonSecondary } from '../../components/Buttons/Button'
import { ErrorMessage, Titulo } from '../../components/Styles/Component.styled'
import { ButtonWraper, ContentWrapper } from '../../components/Styles/Container.styled'
import { VinculaTrilhaContext } from '../../context/VinculaTrilhaContext'
import { IVinculaTrilha } from '../../types/trilha'
import { vinculaInstrutorSchema } from '../../utils/schemas'

export const VincularInstrutor = () => {
  const { trilhas, getTrilhas, vinculaTrilhaInstrutor } = useContext(VinculaTrilhaContext)
  const [trilha, setTrilha] = useState<number[]>([]);

  const { register, handleSubmit, formState: { errors } } = useForm<IVinculaTrilha>({
    resolver: yupResolver(vinculaInstrutorSchema),
  });
  
  useEffect(() => {
    getTrilhas();
  }, []);


  const handleChange = (event: any) => {
    const value = event.target.value;
    value.toString();
    setTrilha(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
      <ContentWrapper>
        <Titulo>
        Vincular Instrutor à Trilha 
        </Titulo>
        <form onSubmit={handleSubmit((data: IVinculaTrilha) => vinculaTrilhaInstrutor(data))}>
        <TextField
          id="nome-vincula-instrutor"
          label="Login"
          variant="outlined"
          {...register("login")}
          sx={{ width: "300px", marginBottom: "5%", marginTop: "8%", backgroundColor: 'white' }}
          size="small"
        />
         {errors.login && <ErrorMessage>{errors.login.message}</ErrorMessage>}

        <FormControl sx={{ width: "300px", marginBottom: "5%", backgroundColor: "white" }} fullWidth size="small">
          <InputLabel id="demo-multiple-name-label">Trilha</InputLabel>
          <Select
            {...register("idTrilha")}
            id="idTrilha"
            multiple
            value={trilha}

            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
          >
            {trilhas.map((trilha) =>
              <MenuItem key={trilha.idTrilha} value={trilha.idTrilha}>
                {trilha.nome} - edição {trilha.edicao}
              </MenuItem>
            )}
          </Select>
        </FormControl>
        {errors.idTrilha && <ErrorMessage>{errors.idTrilha.message}</ErrorMessage>}
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
