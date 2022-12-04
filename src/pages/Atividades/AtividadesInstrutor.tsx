import React, { useContext, useEffect, useMemo } from 'react';
import { FormControl, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material';
import { ButtonPrimary } from '../../components/Buttons/Button';
import userDummy from '../../assets/user.webp';
import { Link, useSearchParams } from 'react-router-dom';
import { Titulo } from '../../components/Styles/Component.styled';
import { SimpleCard, SimpleCardContainer, SimpleCardContent, SimpleCardWrapper } from '../../components/Styles/SimpleCard';
import { AtividadeContext } from '../../context/AtividadesContext';
import { IAtividade } from '../../types/atividade';
import { format } from 'date-fns';

export const AtividadesInstrutor = () => {
  const [ trilha, setTrilha ] = React.useState('');
  const [ status, setStatus ] = React.useState('');
  const [ atividadeData, setAtividadeData ] = React.useState([] as IAtividade[] );
  const [searchParam, setSearchParam] = useSearchParams();
  const { getAtividade, atividades, totalPages } = useContext(AtividadeContext);

  const handleChange = (event: SelectChangeEvent) => {
    setTrilha(event.target.value as string);
  };
  const handleChange2 = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const pagina = useMemo(() => {
    return Number(searchParam.get("pagina") || "1")
  }, [searchParam])
  
  useEffect(() => {
    getAtividade(pagina)
    setAtividadeData(atividades)
  },[pagina])

  const handleSelect = (event: SelectChangeEvent) => {
    const keyWord = event.target.value
    setTrilha(keyWord)
  }

  return (
    <SimpleCardContainer>
      <section>
        <Titulo>
          Mural de Atividades
        </Titulo>

        <div className='flex'>
          <FormControl sx={{ width: 200, backgroundColor: 'white' }} fullWidth size="small">
            <InputLabel id="select-atividade-label">Trilha</InputLabel>
            <Select
              labelId="select-atividade-label"
              id="select-atividade"
              value={trilha}
              label="Trilha"
              onChange={handleSelect}
            >
            </Select>
          </FormControl>
          <FormControl sx={{ width: '300px', backgroundColor: 'white' }} fullWidth size="small">
            <InputLabel id="select-atividade-label">Status</InputLabel>
            <Select
              labelId="select-atividade-label"
              id="select-atividade"
              value={status}
              label="Trilha"
              onChange={handleChange2}
            >
              <MenuItem value={'geral'}>Pendente</MenuItem>
              <MenuItem value={'backend'}>Concluída</MenuItem>
            </Select>
          </FormControl>

          <Link to={'criar'}><ButtonPrimary type={'button'} id={'botao-nova-atividade'} label={'Adicionar'} /></Link>

          <Link to={'/atividades/notas'}> <ButtonPrimary type={'button'} id={'botao-notas-atividade'} label={'Gerenciar'} /></Link>
        </div>

        <SimpleCardWrapper> 
        {atividades?.map((atividade: IAtividade) => {
          return(
           <SimpleCard>
            <img src={userDummy} alt="Foto" />
            <SimpleCardContent>
              <p><span>{atividade.nomeInstrutor}</span> postou uma nova atividade.</p>
              <p className='date-info'>{format(new Date(atividade.dataEntrega), 'dd/mm/yyyy')}</p>
            </SimpleCardContent>
          </SimpleCard>
          )})}
        </SimpleCardWrapper>
        <Pagination count={totalPages} page={pagina} onChange={(e, newPage) => setSearchParam({ pagina: newPage.toString() }, { replace: true })} color="primary" />
      </section>
    </SimpleCardContainer>
  )
}
