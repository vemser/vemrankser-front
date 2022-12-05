import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import React, { useContext, useEffect } from 'react';
import { ButtonPrimary } from '../../../../components/Buttons/Button';
import { ButtonCardContainer, ButtonCardWrapper } from '../../../../components/Styles/ButtonCard';
import { Titulo } from '../../../../components/Styles/Component.styled';
import { GiChampions } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { VinculaTrilhaContext } from '../../../../context/VinculaTrilhaContext';
import { IRanking, ITrilha } from '../../../../types/trilha';
import { ButtonCardContentDashboard, ButtonCardRanking } from '../../Styles/Dashboard.styled';

export const DashBoardInstrutor = () => {
  const [trilha, setTrilha] = React.useState('');
  const { getTrilhas, trilhas, getRanking, ranking } = useContext(VinculaTrilhaContext)

  useEffect(() => {
    getTrilhas()
  }, [])

  useEffect(() => {
    if (trilha) {
      getRanking(parseInt(trilha))
    }
  }, [trilha])

  useEffect(() => {
    if (trilhas.length > 0) {
      setTrilha(trilhas[0].idTrilha as unknown as string)
    }
  }, [trilhas])

  const handleChange = (event: SelectChangeEvent) => {
    setTrilha(event.target.value as string);
  };

  return (
    <>
      <ButtonCardContainer>
        <section>
          <Titulo>
            Dashboard
          </Titulo>
          <div className="flex">
            <div>
              <FormControl
                sx={{ width: 200, backgroundColor: "white" }}
                fullWidth
                size="small"
              >
                <InputLabel id="label-select-trilha-dashboard-instrutor">Trilha</InputLabel>
                <Select
                  labelId="label-select-trilha-dashboard-instrutor"
                  id="select-trilha-dashboard-instrutor"
                  value={trilha}
                  label="Trilha"
                  onChange={handleChange}
                >
                  {trilhas && trilhas.map((trilha: ITrilha) => <MenuItem key={trilha.idTrilha} value={trilha.idTrilha}>{trilha.nome}</MenuItem>)}
                </Select>
              </FormControl>
            </div>
            <Link to={"/dashboard/feedback"}>
              <ButtonPrimary
                type={"button"}
                id={"botao-feedbacks-dashboard-feedback"}
                label={"Feedbacks"}
              />
            </Link>
            <Link to={"/dashboard/informacoes"}>
              <ButtonPrimary
                type={"button"}
                id={"botao-informacoes-dashboard-feedback"}
                label={"Informações"}
              />
            </Link>
          </div>
          <ButtonCardWrapper>
            {ranking?.length > 0 ? ranking.map((r: IRanking, index) =>
              index < 3 &&
              <ButtonCardRanking key={`card-ranking-${index}`}>
                <ButtonCardContentDashboard>
                  <div>
                    <p>Nome: <span>{r.nome}</span></p>
                  </div>
                  <div>
                    <p>Pontos: <span>{r.pontuacaoAluno}</span></p>
                  </div>
                  <div>
                    <p>Posição: <span>{index + 1}</span></p>
                  </div>
                  <div>
                    <GiChampions size={'50px'} color={'var(--branco)'} />
                  </div>
                </ButtonCardContentDashboard>
              </ButtonCardRanking>
            ) : <p>Nenhum aluno encontrado!</p>}
          </ButtonCardWrapper>
        </section>
      </ButtonCardContainer>
    </>
  )
}
