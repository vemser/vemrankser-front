import React, { ChangeEvent, useContext, useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MenuItem, Pagination, Select, SelectChangeEvent, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { ButtonSecondary } from '../../../../components/Buttons/Button';
import { ButtonCardContainer, ButtonCardWrapper } from '../../../../components/Styles/ButtonCard';
import { BarraDePesquisa, Titulo } from '../../../../components/Styles/Component.styled';
import { HiSearch } from 'react-icons/hi';
import { ButtonSmall } from '../../../../components/Buttons/ButtonSmall';
import { VinculaTrilhaContext } from '../../../../context/VinculaTrilhaContext';
import { ITrilha } from '../../../../types/trilha';
import { AlunoContext } from '../../../../context/AlunoContext';
import { IAluno, IAlunoFilterParams } from '../../../../types/aluno';
import { ButtonCardContentDashboard, ButtonCardDashboardFeedback } from '../../Styles/Dashboard.styled';
import userDummy from '../../../../assets/user.webp';

export const DashBoardFeedbackInstrutor = () => {
    const [trilha, setTrilha] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [filterParams, setFilterParams] = React.useState<IAlunoFilterParams>({});
    const [searchParam, setSearchParam] = useSearchParams();
    const { getTrilhas, trilhas } = useContext(VinculaTrilhaContext)
    const { getAlunosWithFilter, alunos, totalPages } = useContext(AlunoContext)
    const [alunoData, setAlunoData] = useState<IAluno[]>([]);

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
        setAlunoData(alunos)
    }, [alunos]);

    useEffect(() => {
        getAlunosWithFilter(pagina, filterParams)
    }, [filterParams, pagina])

    const handleTrilhaChange = (event: SelectChangeEvent) => {
        setTrilha(event.target.value as string);
    };

    const handleNomeChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const keyWord = event.target.value
        if (keyWord !== '') {
            const resultado = alunos.filter((aluno) => {
                return aluno.nome.toLowerCase().startsWith(keyWord.toLowerCase());
            });
            setAlunoData(resultado);
        } else {
            setAlunoData(alunos);
        }
        setNome(keyWord);
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
                                    {trilhas && trilhas.map((trilha: ITrilha) => <MenuItem key={trilha.idTrilha} value={trilha.idTrilha}>{trilha.nome}</MenuItem>)}
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
                        <Link to={"/instrutor/dashboard"}>
                            <ButtonSecondary
                                label={'voltar'}
                                type={'button'}
                                id={''}
                            />
                        </Link>
                    </div>
                    <ButtonCardWrapper >
                        {alunos?.length > 0 ? alunos.map((aluno: IAluno, index) =>
                            <ButtonCardDashboardFeedback key={index}>
                                <ButtonCardContentDashboard>
                                    <img src={userDummy} alt="Foto" />
                                    <div>
                                        <p><span>Nome: </span>{aluno.nome}</p>
                                    </div>
                                    <div className="button-adiciona-visualiza-feedback">
                                        <Link to={`/instrutor/dashboard/feedback/pontos/${aluno.idUsuario}`}>
                                            <ButtonSmall label={"Visualizar"} id={"botao-visualiza-feedback"} />
                                        </Link>
                                    </div>
                                </ButtonCardContentDashboard>
                            </ButtonCardDashboardFeedback>
                        ) : <p>Nenhum aluno encontrado!</p>}
                    </ButtonCardWrapper>
                    <Pagination count={totalPages} page={pagina} onChange={(e, newPage) => setSearchParam({ pagina: newPage.toString() }, { replace: true })} color="primary" />
                </section>
            </ButtonCardContainer>
        </>
    )
}