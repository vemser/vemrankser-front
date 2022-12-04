import React, { useContext, useEffect, useMemo } from 'react';
import { FormControl, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { Titulo } from '../../components/Styles/Component.styled';
import { SimpleCardContainer, SimpleCardContent, SimpleCardWrapper } from '../../components/Styles/SimpleCard';
import { AtividadeContext } from '../../context/AtividadesContext';
import { IAtividade } from '../../types/atividade';
import { ButtonSmall } from '../../components/Buttons/ButtonSmall';
import { AuthContext } from '../../context/AuthContext';
import { SimpleCardAtividadeAluno } from './Atividades.styled';

export const AtividadesAluno = () => {
  
  const [status, setStatus] = React.useState<string>("PENDENTE");
  const [searchParam, setSearchParam] = useSearchParams();
  const { atividades, totalPages, getAtividadeAluno } = useContext(AtividadeContext);
  const { usuario } = useContext(AuthContext);
  
  const handleChange2 = (event: SelectChangeEvent) => {
      setStatus(event.target.value);
  };

  const pagina = useMemo(() => {
    return Number(searchParam.get("pagina") || "1")
  }, [searchParam])
  
  useEffect(() => {
    if(!usuario.idUsuario) return
    if(status==="PENDENTE" || status==="CONCLUIDA"){
         getAtividadeAluno(pagina, usuario.idUsuario, status )
    }
  },[pagina, usuario, status])


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
              <MenuItem value={'PENDENTE'}>Pendente</MenuItem>
              <MenuItem value={'CONCLUIDA'}>Concluída</MenuItem>
            </Select>
          </FormControl>
        </div>
        <SimpleCardWrapper> 
        {atividades?.map((atividade: IAtividade) => {
          return(
           <SimpleCardAtividadeAluno>
            <SimpleCardContent>
              <p><span>Atividade:</span>{atividade.titulo}</p>
            </SimpleCardContent>
            <Link to={`/atividades/aluno/entrega/${atividade.idAtividade}`}>  
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
