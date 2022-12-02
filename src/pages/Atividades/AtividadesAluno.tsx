import React, { useContext, useEffect, useMemo, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material';
import { ButtonPrimary } from '../../components/Buttons/Button';
import userDummy from '../../assets/user.png';
import { MenuLateral } from '../../components/MenuLateral/MenuLateral';
import { ButtonMenuLateral } from '../../components/Buttons/ButtonMenuLateral';
import { HiAcademicCap, HiBookOpen, HiChartPie, HiCog, HiUser, HiUsers } from 'react-icons/hi';
import { Link, useSearchParams } from 'react-router-dom';
import { Titulo } from '../../components/Styles/Component.styled';
import { SimpleCardAtividadeAluno, SimpleCardContainer, SimpleCardContent, SimpleCardWrapper } from '../../components/Styles/SimpleCard';
import { AtividadeContext } from '../../context/AtividadesContext';
import { IAtividade } from '../../types/atividade';
import {format} from 'date-fns'
import { ButtonEditaDeleta } from '../../components/Buttons/ButtonEditaDeleta';

export const AtividadesAluno = () => {
  
  const [trilha, setTrilha] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [ atividadeData, setAtividadeData ] = React.useState([] as IAtividade[] );
  const [searchParam, setSearchParam] = useSearchParams();
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
            <ButtonEditaDeleta icone={""} id={'bota-entrega-atividade-aluno'} label={"Entregar"} />
            </Link>
          </SimpleCardAtividadeAluno>
          )})}
        </SimpleCardWrapper>
        <Pagination count={totalPages} page={pagina} onChange={(e, newPage) => setSearchParam({ pagina: newPage.toString() }, { replace: true })} color="primary" />
      </section>
    </SimpleCardContainer>
  )
}
