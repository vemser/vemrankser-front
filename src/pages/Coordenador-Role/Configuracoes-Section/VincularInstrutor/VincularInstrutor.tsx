import { yupResolver } from '@hookform/resolvers/yup'
import { Checkbox, ListItemText, OutlinedInput } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { ButtonPrimary, ButtonSecondary } from '../../../../components/Buttons/Button'
import { ErrorMessage, Titulo } from '../../../../components/Styles/Component.styled'
import { ButtonWraper, ContentWrapper } from '../../../../components/Styles/Container.styled'
import { VinculaTrilhaContext } from '../../../../context/VinculaTrilhaContext'
import { IVinculaTrilha } from '../../../../types/trilha'
import { vinculaInstrutorSchema } from '../../../../utils/schemas'

export const VincularInstrutor = () => {
  const { trilhas, getTrilhas, vinculaTrilhaInstrutor } = useContext(VinculaTrilhaContext)
  const [trilhasSelecionadas, setTrilhasSelecionadas] = useState<number[]>([]);

  const { register, handleSubmit, formState: { errors } } = useForm<IVinculaTrilha>({
    resolver: yupResolver(vinculaInstrutorSchema),
  });

  useEffect(() => {
    getTrilhas();
  }, []);

  const handleTrilhasSelecionadasChange = (event: SelectChangeEvent<typeof trilhasSelecionadas>) => {
    const {
      target: { value },
    } = event;
    if (!(typeof value === 'string')) {
      setTrilhasSelecionadas(
        value
      );
    }
  };

  const vinculaInstrutorTrilha = (data: IVinculaTrilha) => {
    vinculaTrilhaInstrutor({ ...data, idTrilha: trilhasSelecionadas })
  };


  return (
    <ContentWrapper>
      <Titulo>
        Vincular Instrutor à Trilha
      </Titulo>
      <form onSubmit={handleSubmit(vinculaInstrutorTrilha)}>
        <TextField
          id="nome-vincula-instrutor"
          label="Login"
          variant="outlined"
          {...register("login")}
          sx={{ width: "300px", marginBottom: "5%", marginTop: "8%", backgroundColor: 'white' }}
          size="small"
        />
        {errors.login && <ErrorMessage>{errors.login.message}</ErrorMessage>}

        <FormControl >
          <InputLabel id="demo-multiple-checkbox-label">Trilha</InputLabel>
          <Select
            label="Trilha"
            sx={{ width: '300px', height: '40px', backgroundColor: 'white', marginBottom: '5%' }}
            labelId="label-checkbox-multiplaescolha-trilha"
            id="checkbox-trilha"
            multiple
            value={trilhasSelecionadas}
            onChange={handleTrilhasSelecionadasChange}
            input={<OutlinedInput label="Escolha a trilha" />}
            renderValue={(selected) => trilhas.filter((trilha) => selected.includes(trilha.idTrilha)).map((trilha) => trilha.nome).join(', ')}
          >
            {trilhas.map((trilha) => (
              <MenuItem key={trilha.idTrilha} value={trilha.idTrilha}>
                <Checkbox checked={trilhasSelecionadas.indexOf(trilha.idTrilha) > -1} />
                <ListItemText primary={trilha.nome} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {errors.idTrilha && <ErrorMessage>{errors.idTrilha.message}</ErrorMessage>}
        <ButtonWraper>
          <ButtonPrimary
            label="Adicionar"
            id="botao-vincula-instrutor-trilha"
            type="submit"
          />
          <Link to={"/coordenador/configuracoes"}>
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
