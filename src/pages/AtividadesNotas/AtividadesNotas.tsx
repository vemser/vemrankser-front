import React, { useContext, useEffect, useMemo } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link, useSearchParams } from 'react-router-dom';
import { ButtonPrimary } from '../../components/Buttons/Button';
import { ButtonMenuLateral } from '../../components/Buttons/ButtonMenuLateral';
import { MenuLateral } from '../../components/MenuLateral/MenuLateral';
import { Titulo } from '../../components/Styles/Component.styled';
import { SimpleCardContainer, SimpleCardContent, SimpleCardNotes, SimpleCardWrapper } from '../../components/Styles/SimpleCard';
import { HiAcademicCap, HiBookOpen, HiChartPie, HiCog, HiUser } from 'react-icons/hi';
import userDummy from '../../assets/user.webp';
import { INotas } from '../../types/notas';
import { NotasContext } from '../../context/Notascontext';
import Pagination from '@mui/material/Pagination';
import { AtividadeContext } from '../../context/AtividadesContext';
import { VinculaTrilhaContext } from '../../context/VinculaTrilhaContext';
import { ITrilha } from '../../types/vinculaTrilha';
import { ModuloContext } from '../../context/ModuloContext';
import { IModulo } from '../../types/modulo';

export const AtividadesNotas = () => {
  const [trilha, setTrilha] = React.useState('');
  const [modulo, setModulo] = React.useState("");
  const [atividade, setAtividade] = React.useState("");
  const [searchParam, setSearchParam] = useSearchParams();
  const { getNotas, notas, totalPages} = useContext(NotasContext);
  const {getAtividadeWithIdTrilha,  getAtividade} = useContext(AtividadeContext);
  const { getTrilhas, trilhas } = useContext(VinculaTrilhaContext)
  const { getModulos, modulos } = useContext(ModuloContext)

  const handleChange = (event: SelectChangeEvent) => {
    setTrilha(event.target.value as string);
  };
  const handleChangeSelect2= (event: SelectChangeEvent) => {
    setModulo(event.target.value as string);
  };

  const handleChangeSelect3 = (event: SelectChangeEvent) => {
    setAtividade(event.target.value as string);
  };

  const pagina = useMemo(() => {
    return Number(searchParam.get("pagina") || "1")
  }, [searchParam])

  useEffect(() => {
    if (trilha) {
      getAtividadeWithIdTrilha(pagina, parseInt(trilha))
      return
    }
    getAtividade(pagina)
  }, [pagina, trilha])

  useEffect(() => {
    getTrilhas()
    getModulos()
  }, [])


  useEffect(() => {
    getNotas(pagina)
  }, [pagina])

  return (
    <SimpleCardContainer>
    <section>
        <Titulo>
          Mural de Notas
        </Titulo>

        <div className='flex'>
          <FormControl sx={{ width: 250, backgroundColor: 'white' }} fullWidth size="small">
            <InputLabel id="label-select-trilha-mural-notas">Trilha</InputLabel>
            <Select
              labelId="label-select-trilha-mural-notas"
              id="select-trilha-mural-notas"
              value={trilha}
              label="Trilha"
              onChange={handleChange}
            >
               {trilhas && trilhas.map((trilha: ITrilha) => <MenuItem value={trilha.idTrilha}>{trilha.nome}</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl sx={{ width: 250, backgroundColor: 'white' }} fullWidth size="small">
            <InputLabel id="label-select-modulo-mural-atividade">Módulo</InputLabel>
            <Select
              labelId="lanel-select-modulo-label-mural-atividade"
              id="select-modulo-mural-atividade"
              value={modulo}
              label="Módulo"
              onChange={handleChangeSelect2}
            >
               {modulos && modulos.map((modulo: IModulo) => <MenuItem value={modulo.idModulo}>{modulo.nome} </MenuItem>)}
            </Select>
          </FormControl>
        </div>
        <SimpleCardWrapper>
        {notas.map((nota: INotas) => {
                return(
                <SimpleCardNotes>
                  <img src={userDummy} alt="Foto" />
                  <SimpleCardContent>
                    <p><span>{nota.nome}</span></p> 
                    <p className='date-info'><span>{nota.nota}/100</span></p>
                  </SimpleCardContent>
                  <Link to={`/atividades/corrige/notas`}><ButtonPrimary type={'button'} id={'botao-gerencia-notas'} label={'Corrigir'} /></Link>
                </SimpleCardNotes>
                 )})}  
          </SimpleCardWrapper>
          <Pagination count={totalPages} page={pagina} onChange={(e, newPage) => setSearchParam({ pagina: newPage.toString() }, { replace: true })} color="primary" />
          </section>
        </SimpleCardContainer>
  )
}
