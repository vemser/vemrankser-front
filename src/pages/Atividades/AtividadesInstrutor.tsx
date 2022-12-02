import React, { useContext, useEffect, useMemo, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material';
import { ButtonPrimary } from '../../components/Buttons/Button';
import userDummy from '../../assets/user.png';
import { MenuLateral } from '../../components/MenuLateral/MenuLateral';
import { ButtonMenuLateral } from '../../components/Buttons/ButtonMenuLateral';
import { HiAcademicCap, HiBookOpen, HiChartPie, HiCog, HiUser, HiUsers } from 'react-icons/hi';
import { Link, useSearchParams } from 'react-router-dom';
import { Titulo } from '../../components/Styles/Component.styled';
import { SimpleCard, SimpleCardContainer, SimpleCardContent, SimpleCardWrapper } from '../../components/Styles/SimpleCard';
import { AtividadeContext } from '../../context/AtividadesContext';
import { IAtividade } from '../../types/atividade';
import {format} from 'date-fns'
import { VinculaTrilhaContext } from '../../context/VinculaTrilhaContext';
import { ITrilha } from '../../types/vinculaTrilha';
import { UsersContext } from '../../context/UserContext';

export const AtividadesInstrutor = () => {
  
  const [trilha, setTrilha] = React.useState("");
  const [status, setStatus] = React.useState('');
  const [searchParam, setSearchParam] = useSearchParams();
  const { getAtividade, atividades, totalPages, getAtividadeWithIdTrilha } = useContext(AtividadeContext);
  const { getTrilhas, trilhas } = useContext(VinculaTrilhaContext)
  const { user,  getUsersList} = useContext(UsersContext)

  // const handleChange = (event: SelectChangeEvent) => {
  //   setTrilha(event.target.value as string);
  // };
  const handleChange2 = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const pagina = useMemo(() => {
    return Number(searchParam.get("pagina") || "1")
  }, [searchParam])
  
  useEffect(() => {
    if(trilha){
      getAtividadeWithIdTrilha(pagina, parseInt(trilha))
      return
    }
    getAtividade(pagina)
  }, [pagina, trilha])

  useEffect(() => {
    getTrilhas()
    getUsersList()
    console.log(user)
  }, [])

  useEffect(() => {
    console.log(user)
  }, [user])


  const handleSelect = (event: SelectChangeEvent) => {
    const keyWord = event.target.value
    setTrilha(keyWord)
  }


  return (
    <SimpleCardContainer>
      <MenuLateral
        nomeDoUsuario={"Luiza Valentini"}
        cargoDoUsuario={"ADMIN"}
        fotoDePerfil={""}
      >
        <ButtonMenuLateral
          text={"Dashboard"}
          icone={<HiChartPie />}
          link={"/dashboard"}
        />
        <ButtonMenuLateral
            text={"Usuários"}
            icone={<HiUsers />}
            link={"/usuarios"}
          />
        <ButtonMenuLateral
          text={"Alunos"}
          icone={<HiAcademicCap />}
          link={"/alunos"}
        />
        <ButtonMenuLateral
          text={"Atividades"}
          icone={<HiBookOpen />}
          link={"/atividades"}
        />
        <ButtonMenuLateral
          text={"Perfil"}
          icone={<HiUser />}
          link={"/perfil"}
        />
        <ButtonMenuLateral
          text={"Configurações"}
          icone={<HiCog />}
          link={"/configurações"}
        />
      </MenuLateral>
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
              {trilhas&&trilhas.map((trilha:ITrilha)=> <MenuItem value={trilha.idTrilha}>{trilha.nome}</MenuItem>)}
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
