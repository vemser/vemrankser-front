import React, { useContext, useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ButtonPrimary } from '../../components/Buttons/Button';
import userDummy from '../../assets/user.png';
import { MenuLateral } from '../../components/MenuLateral/MenuLateral';
import { ButtonMenuLateral } from '../../components/Buttons/ButtonMenuLateral';
import { HiAcademicCap, HiBookOpen, HiChartPie, HiCog, HiUser, HiUsers } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { Titulo } from '../../components/Styles/Component.styled';
import { SimpleCard, SimpleCardContainer, SimpleCardContent, SimpleCardWrapper } from '../../components/Styles/SimpleCard';
import { AtividadeContext } from '../../context/AtividadesContext';
import { IAtividade } from '../../types/atividade';

export const Atividades = () => {
  const [trilha, setTrilha] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [ atividadeData, setAtividadeData ] = React.useState([] as IAtividade[] );

  const handleChange = (event: SelectChangeEvent) => {
    setTrilha(event.target.value as string);
  };
  const handleChange2 = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const { getAtividade, atividades } = useContext(AtividadeContext);

  // useEffect(() => {
  //   getAtividade('1')
  //   // setAtividadeData(atividades)
  // },[atividades])

  useEffect(() => {
    let listaAtividades = atividades
    listaAtividades = filtraAtividadePorTrilha(trilha, listaAtividades)
    setAtividadeData(listaAtividades)
  }, [trilha])

  const filtraAtividadePorTrilha = (keyWord: string, listaAtividades: IAtividade[]) => {
    if (keyWord !== '' && keyWord !== 'geral') {
      listaAtividades = atividades.filter((atividade) => {
        return atividade.trilhas.some((trilha) => trilha.nome.toLowerCase().startsWith(keyWord.toLowerCase()));
      });
    }
    return listaAtividades
  }

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
              <MenuItem value={'geral'}>Geral</MenuItem>
              <MenuItem value={'backend'}>Backend</MenuItem>
              <MenuItem value={'frontend'}>Frontend</MenuItem>
              <MenuItem value={'qa'}>QA</MenuItem>
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

          <Link to={'criar'}><ButtonPrimary type={'button'} id={'botao-nova-atividade'} label={'Add Atividade'} /></Link>

          <Link to={'/atividades/notas'}> <ButtonPrimary type={'button'} id={'botao-notas-atividade'} label={'Gerenciar Notas'} /></Link>
        </div>

        <SimpleCardWrapper>

        {atividades?.map((atividade: IAtividade) => {
          return(
           <SimpleCard>
            <img src={userDummy} alt="Foto" />
            <SimpleCardContent>
              <p><span>{atividade.nome}</span> postou uma nova atividade.</p>
              <p className='date-info'>{atividade.dataEntrega}</p>
            </SimpleCardContent>
          </SimpleCard>
          )})}
         
        </SimpleCardWrapper>
      </section>
    </SimpleCardContainer>
  )
}
