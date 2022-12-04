import React, { ChangeEvent, useContext, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MenuItem, Pagination, Select, SelectChangeEvent, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { ButtonSecondary } from '../../components/Buttons/Button';
import { ButtonCardContainer, ButtonCardWrapper } from '../../components/Styles/ButtonCard';
import { BarraDePesquisa, Titulo } from '../../components/Styles/Component.styled';
import { HiSearch } from 'react-icons/hi';
import { ButtonSmall } from '../../components/Buttons/ButtonSmall';
import { VinculaTrilhaContext } from '../../context/VinculaTrilhaContext';
import { ITrilha } from '../../types/trilha';
import { AlunoContext } from '../../context/AlunoContext';
import { IAluno, IAlunoFilterParams } from '../../types/aluno';
import { ButtonCardContentDashboard, ButtonCardDashboardFeedback } from './Dashboard.styled';
import userDummy from '../../assets/user.webp';

export const DashBoardFeedback = () => {
  const [trilha, setTrilha] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [filterParams, setFilterParams] = React.useState<IAlunoFilterParams>({});
  const [searchParam, setSearchParam] = useSearchParams();
  const { getTrilhas, trilhas } = useContext(VinculaTrilhaContext)
  const { getAlunosWithFilter, alunos, totalPages } = useContext(AlunoContext)

  const pagina = useMemo(() => {
    return Number(searchParam.get("pagina") || "1")
  }, [searchParam])

  useEffect(() => {
    const newFilterParams = { ...filterParams }
    if (trilha) {
      newFilterParams.idTrilha = parseInt(trilha)
    }
    if (nome) {
      newFilterParams.nome = nome
    }
    setFilterParams(newFilterParams)
  }, [trilha, nome])

  useEffect(() => {
    getTrilhas()
  }, [])

  useEffect(() => {
    getAlunosWithFilter(pagina, filterParams)
  }, [filterParams, pagina])

  const handleTrilhaChange = (event: SelectChangeEvent) => {
    setTrilha(event.target.value as string);
  };
  const handleNomeChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNome(event.target.value as string);
  };

  return (
    <>
      <ButtonCardContainer>
        <section>
          <Titulo>
            Feedback
          </Titulo>
          <div className="flex">
            <div>
              <FormControl
                sx={{ width: 200, backgroundColor: "white" }}
                fullWidth
                size="small"
              >
                <InputLabel id="label-select-trilha-dashboard-feedback-intrutor">Trilha</InputLabel>
                <Select
                  labelId="label-select-trilha-dashboard-feedback"
                  id="select-trilha-dashboard-feedback"
                  value={trilha}
                  label="Trilha"
                  onChange={handleTrilhaChange}
                >
                  {trilhas && trilhas.map((trilha: ITrilha) => <MenuItem value={trilha.idTrilha}>{trilha.nome}</MenuItem>)}
                </Select>
              </FormControl>
            </div>
            <BarraDePesquisa>
              <TextField variant="outlined" sx={{ width: 280, backgroundColor: "white" }}
                fullWidth
                size="small"
                label={"Filtrar por nome"}
                value={nome}
                id={"barra-de-pesquisa-dashboard-feedback"}
                onChange={handleNomeChange}
              />
              <i>
                <HiSearch size={"28px"}
                />
              </i>
            </BarraDePesquisa>
            <Link to={"/dashboard"}>
              <ButtonSecondary
                label={'voltar'}
                type={'button'}
                id={''}
              />
            </Link>
          </div>
          <ButtonCardWrapper>
            {alunos && alunos.map((aluno: IAluno) =>
              <ButtonCardDashboardFeedback>
                <ButtonCardContentDashboard>
                  <img src={userDummy} alt="Foto" />
                  <div>
                    <p><span>Nome: </span>{aluno.nome}</p>
                  </div>
                  <div className="button-adiciona-visualiza-feedback">
                    <Link to={`/dashboard/feedback/visualiza-pontos/${aluno.idUsuario}`}>
                      <ButtonSmall label={"Visualizar"} id={"botao-visualiza-feedback"} />
                    </Link>
                  </div>
                </ButtonCardContentDashboard>
              </ButtonCardDashboardFeedback>
            )}
          </ButtonCardWrapper>
          <Pagination count={totalPages} page={pagina} onChange={(e, newPage) => setSearchParam({ pagina: newPage.toString() }, { replace: true })} color="primary" />
        </section>
      </ButtonCardContainer>
    </>
  )
}
