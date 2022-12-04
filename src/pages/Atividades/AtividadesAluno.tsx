import React, { useContext, useEffect, useMemo } from 'react';
import { FormControl, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { Titulo } from '../../components/Styles/Component.styled';
import { SimpleCardAtividadeAluno, SimpleCardContainer, SimpleCardContent, SimpleCardWrapper } from '../../components/Styles/SimpleCard';
import { AtividadeContext } from '../../context/AtividadesContext';
import { IAtividade } from '../../types/atividade';
import { ButtonSmall } from '../../components/Buttons/ButtonSmall';

export const AtividadesAluno = () => {
  
  const [ status, setStatus ] = React.useState('');
  const [ atividadeData, setAtividadeData ] = React.useState([] as IAtividade[] );
  const [ searchParam, setSearchParam ] = useSearchParams();
  const { getAtividade, atividades, totalPages } = useContext(AtividadeContext);

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

  return (
    <SimpleCardContainer>
      <section>
        <Titulo>
          Mural de Atividades Aluno
        </Titulo>
        <div className='flex'>
          <FormControl sx={{ width: '300px', backgroundColor: 'white' }} fullWidth size="small">
            <InputLabel id="select-status-label">Status</InputLabel>
            <Select
              labelId="select-status-label"
              id="select-status"
              value={status}
              label="Trilha"
              onChange={handleChange2}
            >
              <MenuItem value={'pendente'}>Pendente</MenuItem>
              <MenuItem value={'concluida'}>Concluída</MenuItem>
            </Select>
          </FormControl>
        </div>
        <SimpleCardWrapper> 
        {atividades?.map((atividade: IAtividade) => {
          return(
           <SimpleCardAtividadeAluno>
            <SimpleCardContent>
              <p><span>Atividade:</span> 1</p>
            </SimpleCardContent>
            <Link to={"/atividades/aluno/entrega"}>  
            <ButtonSmall id={'bota-entrega-atividade-aluno'} label={"Entregar"} />
            </Link>
          </SimpleCardAtividadeAluno>
          )})}
        </SimpleCardWrapper>
        <Pagination count={totalPages} page={pagina} onChange={(e, newPage) => setSearchParam({ pagina: newPage.toString() }, { replace: true })} color="primary" />
      </section>
    </SimpleCardContainer>
  )
}
