import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useContext, useEffect } from 'react';
import { HiAcademicCap, HiBookOpen, HiChartPie, HiCog, HiUser } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { ButtonPrimary } from '../../components/Buttons/Button';
import { ButtonMenuLateral } from '../../components/Buttons/ButtonMenuLateral';
import { MenuLateral } from '../../components/MenuLateral/MenuLateral';
import { Titulo } from '../../components/Styles/Component.styled';
import { SimpleCardContainer, SimpleCardContent, SimpleCardNotes, SimpleCardWrapper } from '../../components/Styles/SimpleCard';
import userDummy from '../../assets/user.png';
import { INotas } from '../../types/notas';
import { NotasContext } from '../../context/Notascontext';

export const AtividadesNotas = () => {
  const [trilha, setTrilha] = React.useState('');
  const [modulo, setModulo] = React.useState("");
  const [atividade, setAtividade] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setTrilha(event.target.value as string);
  };
  const handleChangeSelect2 = (event: SelectChangeEvent) => {
    setModulo(event.target.value as string);
  };

  const handleChangeSelect3 = (event: SelectChangeEvent) => {
    setAtividade(event.target.value as string);
  };
  const { getNotas, notas } = useContext(NotasContext);

  // useEffect(() => {
  //   getNotas('1')
  // }, [])

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
            <InputLabel id="select-trilha-label-mural-notas">Trilha</InputLabel>
            <Select
              labelId="select-trilha-label-mural-notas"
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
            <InputLabel id="select-atividade-label-mural-notas">Atividade</InputLabel>
            <Select
              labelId="select-atividade-label-mural-notas"
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
            <InputLabel id="select-modulo-label-mural-atividade">Módulo</InputLabel>
            <Select
              labelId="select-modulo-label-mural-atividade"
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
        {/* {notas.map((nota: INotas) => {
                return( */}
                <SimpleCardNotes>
                  <img src={userDummy} alt="Foto" />
                  <SimpleCardContent>
                    <p><span>Aluno 1</span></p> 
                    <p className='date-info'><span>___/100</span></p>
                  </SimpleCardContent>
                  <Link to={'/atividades/detalhes/notas'}><ButtonPrimary type={'button'} id={'botao-nova-atividade'} label={'Devolver'} /></Link>
                </SimpleCardNotes>
                {/* )})}  */}
          </SimpleCardWrapper>
          </section>
        </SimpleCardContainer>
  )
}
