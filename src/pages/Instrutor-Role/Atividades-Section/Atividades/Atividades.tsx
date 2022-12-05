import React, { useContext, useEffect, useMemo } from 'react';
import { FormControl, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material';
import { ButtonPrimary } from '../../../../components/Buttons/Button';
import { Link, useSearchParams } from 'react-router-dom';
import { Titulo } from '../../../../components/Styles/Component.styled';
import { SimpleCard, SimpleCardContainer, SimpleCardContent, SimpleCardWrapper } from '../../../../components/Styles/SimpleCard';
import 'moment/locale/pt-br';
import moment from 'moment';
import { AtividadeContext } from '../../../../context/AtividadesContext';
import { IAtividade } from '../../../../types/atividade';
import { VinculaTrilhaContext } from '../../../../context/VinculaTrilhaContext';
import { ITrilha } from '../../../../types/trilha';

export const AtividadesInstrutor = () => {
  const [trilha, setTrilha] = React.useState('');
  const [searchParam, setSearchParam] = useSearchParams();
  const { getAtividade, atividades, totalPages, getAtividadeWithIdTrilha } = useContext(AtividadeContext);
  const { getTrilhas, trilhas } = useContext(VinculaTrilhaContext);

  const pagina = useMemo(() => {
    return Number(searchParam.get("pagina") || "1")
  }, [searchParam]);

  useEffect(() => {
    if (trilha) {
      getAtividadeWithIdTrilha(pagina, parseInt(trilha))
      return
    }
    getAtividade(pagina)
  }, [pagina, trilha])

  useEffect(() => {
    getTrilhas()
  }, []);

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
              {trilhas && trilhas.map((trilha: ITrilha) => <MenuItem key={trilha.idTrilha} value={trilha.idTrilha}>{trilha.nome}</MenuItem>)}
            </Select>
          </FormControl>
          <Link to={'/instrutor/atividades/criar'}><ButtonPrimary type={'button'} id={'botao-nova-atividade'} label={'Adicionar'} /></Link>
          <Link to={'/instrutor/atividades/notas'}> <ButtonPrimary type={'button'} id={'botao-gerenciar-atividade'} label={'Corrigir'} /></Link>
        </div>
        <SimpleCardWrapper>
          {atividades?.map((atividade: IAtividade) => {
            return (
              <SimpleCard key={atividade.idAtividade}>
                <SimpleCardContent>
                  <p><span>{atividade.nomeInstrutor}</span> postou uma nova atividade</p>
                  <p className='date-info'>{moment(atividade.dataCriacao).locale('pt-br').format('ll')}</p>
                </SimpleCardContent>
              </SimpleCard>
            )
          })}
        </SimpleCardWrapper>
        <Pagination count={totalPages} page={pagina} onChange={(e, newPage) => setSearchParam({ pagina: newPage.toString() }, { replace: true })} color="primary" />
      </section>
    </SimpleCardContainer>
  )
}
