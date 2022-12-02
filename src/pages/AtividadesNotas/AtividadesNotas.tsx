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
import userDummy from '../../assets/user.png';
import { INotas } from '../../types/notas';
import { NotasContext } from '../../context/Notascontext';
import Pagination from '@mui/material/Pagination';

export const AtividadesNotas = () => {
  const [trilha, setTrilha] = React.useState('');
  const [modulo, setModulo] = React.useState("");
  const [atividade, setAtividade] = React.useState("");
  const [searchParam, setSearchParam] = useSearchParams();
  const { getNotas, notas, totalPages} = useContext(NotasContext);

  const handleChange = (event: SelectChangeEvent) => {
    setTrilha(event.target.value as string);
  };
  const handleChangeSelect2 = (event: SelectChangeEvent) => {
    setModulo(event.target.value as string);
  };

  const handleChangeSelect3 = (event: SelectChangeEvent) => {
    setAtividade(event.target.value as string);
  };

  const pagina = useMemo(() => {
    return Number(searchParam.get("pagina") || "1")
  }, [searchParam])

  useEffect(() => {
    getNotas(pagina)
  }, [pagina])

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
              <MenuItem value={'geral'}>Geral</MenuItem>
              <MenuItem value={'backend'}>Backend</MenuItem>
              <MenuItem value={'frontend'}>Frontend</MenuItem>
              <MenuItem value={'qa'}>QA</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: 250, backgroundColor: 'white' }} fullWidth size="small">
            <InputLabel id="label-select-atividade-mural-notas">Atividade</InputLabel>
            <Select
              labelId="label-select-atividade-mural-notas"
              id="select-atividade-mural-noras"
              value={atividade}
              label="Atividade"
              onChange={ handleChangeSelect3}
            >
              <MenuItem value={'atividade1'}>Atividade 1</MenuItem>
              <MenuItem value={'atividade2'}>Atividade 2</MenuItem>
              <MenuItem value={'atividade3'}>Atividade 3</MenuItem>
              <MenuItem value={'atividade4'}>Atividade 4</MenuItem>
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
              <MenuItem value={'modulo3'}>Módulo 1</MenuItem>
              <MenuItem value={'modulo2'}>Módulo 2</MenuItem>
              <MenuItem value={'modulo3'}>Módulo 3</MenuItem>
              <MenuItem value={'modulo4'}>Módulo 4</MenuItem>
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
