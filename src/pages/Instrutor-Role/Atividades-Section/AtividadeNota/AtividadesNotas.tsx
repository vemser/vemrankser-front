import React, { useContext, useEffect, useMemo, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link, useSearchParams } from 'react-router-dom';
import { ButtonPrimary } from '../../../../components/Buttons/Button';
import { Titulo } from '../../../../components/Styles/Component.styled';
import { SimpleCardContainer, SimpleCardContent, SimpleCardWrapper } from '../../../../components/Styles/SimpleCard';
import userDummy from '../../../../assets/user.webp';
import { INotas, INotasFilterParams } from '../../../../types/notas';
import { NotasContext } from '../../../../context/Notascontext';
import Pagination from '@mui/material/Pagination';
import { VinculaTrilhaContext } from '../../../../context/VinculaTrilhaContext';
import { ITrilha } from '../../../../types/trilha';
import { ModuloContext } from '../../../../context/ModuloContext';
import { IModulo } from '../../../../types/modulo';
import { SimpleCardNotes } from '../../Styles/Atividades.styled';

export const AtividadesNotas = () => {
  const [trilha, setTrilha] = React.useState('');
  const [modulo, setModulo] = React.useState("");
  const [searchParam, setSearchParam] = useSearchParams();
  const { getNotas, notas, totalPages } = useContext(NotasContext);
  const { getTrilhas, trilhas } = useContext(VinculaTrilhaContext);
  const { getModulos, modulos } = useContext(ModuloContext);
  const [filterParams, setFilterParams] = useState<INotasFilterParams>({ atividadeStatus: 'PENDENTE' });

  const handleChange = (event: SelectChangeEvent) => {
    setTrilha(event.target.value as string);
  };

  const handleChangeSelect2 = (event: SelectChangeEvent) => {
    setModulo(event.target.value as string);
  };

  const pagina = useMemo(() => {
    return Number(searchParam.get("pagina") || "1")
  }, [searchParam]);

  useEffect(() => {
    const newFilterParams = { ...filterParams }
    if (trilha) {
      newFilterParams.idTrilha = parseInt(trilha)
    }
    if (modulo) {
      newFilterParams.idModulo = parseInt(modulo)
    }
    setFilterParams(newFilterParams)
  }, [trilha, modulo]);

  useEffect(() => {
    getTrilhas()
    getModulos()
  }, []);

  useEffect(() => {
    getNotas(pagina, filterParams)
  }, [pagina, filterParams]);

  return (
    <SimpleCardContainer>
      <section>
        <Titulo>
          Atividades para Correção
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
              {trilhas && trilhas.map((trilha: ITrilha, index) => <MenuItem key={index} value={trilha.idTrilha}>{trilha.nome}</MenuItem>)}
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
              {modulos && modulos.map((modulo: IModulo, index) => <MenuItem key={index} value={modulo.idModulo}>{modulo.nome} </MenuItem>)}
            </Select>
          </FormControl>
        </div>
        <SimpleCardWrapper>
          {notas.map((nota: INotas, index) => {
            return (
              <SimpleCardNotes key={index}>
                <img src={userDummy} alt="Foto" />
                <SimpleCardContent >
                  <p><span>{nota.nome}</span></p>
                </SimpleCardContent>
                <Link to={`/atividades/corrige/notas/${nota.idUsuario}/${nota.idAtividade}`}><ButtonPrimary type={'button'} id={'botao-gerencia-notas'} label={'Corrigir'} /></Link>
              </SimpleCardNotes>
            )
          })}
        </SimpleCardWrapper>
        <Pagination count={totalPages} page={pagina} onChange={(e, newPage) => setSearchParam({ pagina: newPage.toString() }, { replace: true })} color="primary" />
      </section>
    </SimpleCardContainer>
  )
}
