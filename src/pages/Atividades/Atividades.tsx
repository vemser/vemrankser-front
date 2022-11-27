import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ButtonPrimary } from '../../components/Buttons/Button';
import { MenuDummy } from '../../components/MenuDummy/MenuDummy';
import { AtividadeCard, AtividadeContainer, CardContainer, CardContent, MuralSelect, MuralTitulo } from './Atividades.styled';
import userDummy from '../../assets/user.png';

export const Atividades = () => {
  const [trilha, setTrilha] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTrilha(event.target.value as string);
  };

  return (
    <AtividadeContainer>
      <MenuDummy />
      <section>
        <MuralTitulo>
          Mural de Atividades
        </MuralTitulo>

        <div className='flex'>
          <MuralSelect>
            <FormControl sx={{ minWidth: 200, heigth: 50, backgroundColor: 'white' }} fullWidth>
              <InputLabel id="select-atividade-label">Trilha</InputLabel>
              <Select
                labelId="select-atividade-label"
                id="select-atividade"
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
          </MuralSelect>

          <ButtonPrimary type={'button'} id={'botao-nova-atividade'} label={'Nova Atividade'} />
          
          <ButtonPrimary type={'button'} id={'botao-notas-atividade'} label={'Gerenciar Notas'} />
        </div>

        <CardContainer>
          <AtividadeCard>
            <img src={userDummy} alt="Foto" />
            <CardContent>
              <p><span>Mayral Amaral</span> postou uma nova atividade.</p>
              <p className='date-info'>10 de nov.</p>
            </CardContent>
          </AtividadeCard>

          <AtividadeCard>
            <img src={userDummy} alt="Foto" />
            <CardContent>
              <p><span>Mayral Amaral</span> postou uma nova atividade.</p>
              <p className='date-info'>10 de nov.</p>
            </CardContent>
          </AtividadeCard>

          <AtividadeCard>
            <img src={userDummy} alt="Foto" />
            <CardContent>
              <p><span>Mayral Amaral</span> postou uma nova atividade.</p>
              <p className='date-info'>10 de nov.</p>
            </CardContent>
          </AtividadeCard>

          <AtividadeCard>
            <img src={userDummy} alt="Foto" />
            <CardContent>
              <p><span>Mayral Amaral</span> postou uma nova atividade.</p>
              <p className='date-info'>10 de nov.</p>
            </CardContent>
          </AtividadeCard>
        </CardContainer>
      </section>
    </AtividadeContainer>
  )
}
