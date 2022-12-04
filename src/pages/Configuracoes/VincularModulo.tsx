import { yupResolver } from '@hookform/resolvers/yup'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { ButtonPrimary, ButtonSecondary } from '../../components/Buttons/Button'
import { ErrorMessage, Titulo } from '../../components/Styles/Component.styled'
import { ButtonWraper, ContentWrapper } from '../../components/Styles/Container.styled'
import { ModuloContext } from '../../context/ModuloContext'
import { VinculaTrilhaContext } from '../../context/VinculaTrilhaContext'
import { IModulo, IVinculaModulo } from '../../types/modulo'
import { ITrilha } from '../../types/trilha'
import { cadastraNovoModuloSchema, vinculaModuloTrilhaSchema } from '../../utils/schemas'

export const VincularModulo = () => {
  const {getModulos, modulos } = useContext(ModuloContext)
  const { trilhas, getTrilhas } = useContext(VinculaTrilhaContext)
  const { register, handleSubmit, formState: { errors } } = useForm<IVinculaModulo>({
    resolver: yupResolver(vinculaModuloTrilhaSchema),
  });

  useEffect(()=>{
    getModulos()
  })

  useEffect(() => {
    getTrilhas();
  }, []);


  return (
      <ContentWrapper>
        <Titulo>
        Vincular Módulo à Trilha
        </Titulo>
        <form>
          <FormControl
            sx={{ width: "300px", marginBottom: "5%", marginTop: "8%", backgroundColor: 'var(--branco)' }}
            fullWidth
            size="small"
          >
             <InputLabel id="label-select-escolhe-modulo">
              Módulo
            </InputLabel>
            <Select
               {...register("idModulo")}
              labelId="label-select-escolhe-modulo"
              id="escolhe-modulo"
              label="Instrutores"
              
            //   onChange={}
            >
             {modulos.map((modulo: IModulo) =>
              <MenuItem key={modulo.idModulo} value={modulo.idModulo}>
                {modulo.nome}
              </MenuItem>
            )}
            </Select>
          </FormControl>
          {errors.idModulo && <ErrorMessage>{errors.idModulo.message}</ErrorMessage>}

          <FormControl
            sx={{ width: "300px", marginBottom: "5%", backgroundColor: 'var(--branco)' }}
            fullWidth
            size="small"
          >
             <InputLabel id="label-select-escolhe-trilha">
              Trilha
            </InputLabel>
            <Select
            {...register("idTrilha")}
              labelId="label-select-escolhe-trilha"
              id="escolhe-trilha"
              label="Edicao"
            //   onChange={}
            >
            {trilhas.map((trilha: ITrilha) =>
              <MenuItem key={trilha.idTrilha} value={trilha.idTrilha}>
                {trilha.nome}
              </MenuItem>
            )}
            </Select>
          </FormControl>
          <ButtonWraper>
            <Link to={'/configuracoes'}>
            <ButtonPrimary
              label="Adicionar"
              id="botao-vincula-modulo-trilha"
              type="submit"
            />
            </Link>
            
            <Link to={"/configuracoes"}>
              <ButtonSecondary
                type="button"
                label="Cancelar"
                id="botao-cancela-vincula-modulo-trilha"
              />
            </Link>
          </ButtonWraper>
        </form>

      </ContentWrapper>

  )
}
