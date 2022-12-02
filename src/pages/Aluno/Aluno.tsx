import React, { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";
import { AlunoContext } from "../../context/AlunoContext";
import { IAluno } from "../../types/aluno";
import { ITrilha } from "../../types/vinculaTrilha";
import { Link, useSearchParams } from "react-router-dom";
import { ButtonPrimary } from "../../components/Buttons/Button";
import { HiSearch } from "react-icons/hi";
import userDummy from "../../assets/user.png";
import { BarraDePesquisa, Titulo } from "../../components/Styles/Component.styled";
import { ButtonCard, ButtonCardContainer, ButtonCardContent, ButtonCardWrapper } from "../../components/Styles/ButtonCard";
import { FormControl, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent, TextField } from "@mui/material";
import { VinculaTrilhaContext } from "../../context/VinculaTrilhaContext";
import { api } from "../../utils/api";

export const Aluno = () => {
  const [trilha, setTrilha] = React.useState("");
  const { getAlunos, alunos, totalPages } = useContext(AlunoContext);
  const { trilhas, getTrilhas } = useContext(VinculaTrilhaContext);
  const [searchParam, setSearchParam] = useSearchParams();
  const [nome, setNome] = useState<string>('');
  const [alunoData, setAlunoData] = useState<IAluno[]>([]);
  const token = localStorage.getItem('token');

  const pagina = useMemo(() => {
    return Number(searchParam.get("pagina") || "1")
  }, [searchParam]);

  useEffect(() => {
    setAlunoData(alunos)
  }, [alunos])

  useEffect(() => {
    getTrilhas()
  }, [])

  useEffect(() => {
    getAlunos(pagina)
  }, [pagina])

  const handleSelect = async (event: SelectChangeEvent) => {
    const keyWord = event.target.value;
    setTrilha(keyWord);

    api.defaults.headers.common['Authorization'] = token;

    api.get(`/trilha/lista-alunos-trilha?pagina=0&tamanho=4&idTrilha=${keyWord}`).then(
      ({ data }) => { setAlunoData(data.elementos); }
    )
  }

  const handleNome = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
  }

  return (
    <ButtonCardContainer>
      <section>
        <Titulo>
          Alunos
        </Titulo>

        <div className="flex">
          <div>
            <FormControl
              sx={{ width: 200, backgroundColor: "white" }}
              fullWidth
              size="small"
            >
              <InputLabel id="select-aluno-label">Trilha</InputLabel>
              <Select
                labelId="select-aluno-label"
                id="select-atividade"
                value={trilha}
                label="Trilha"
                onChange={handleSelect}
              >
                {trilhas.map((trilhaSelect: ITrilha) => {
                  return <MenuItem key={trilhaSelect.idTrilha} value={trilhaSelect.idTrilha}>{trilhaSelect.nome}</MenuItem>
                })}
              </Select>
            </FormControl>
          </div>

          <BarraDePesquisa>
            <TextField variant="outlined" sx={{ width: 300, backgroundColor: "white" }}
              fullWidth
              size="small"
              label={"Pesquisar por nome"}
              value={nome}
              id={"barra-de-pesquisa-aluno"}
              onChange={handleNome}
            />
            <i>
              <HiSearch size={"28px"}
              />
            </i>

          </BarraDePesquisa>
          <Link to={"/alunos/vincular"}>
            <ButtonPrimary
              type={"button"}
              id={"botao-vincula-aluno"}
              label={"Vincular Aluno"}
            />
          </Link>
        </div>
        <ButtonCardWrapper>
          {alunoData.length > 0 ? alunoData?.map((aluno: IAluno) => {
            const ultimaTrilha = aluno.trilhas.length - 1

            return (
              <ButtonCard key={aluno.email}>
                <ButtonCardContent>
                  <img src={userDummy} alt="Foto" />
                  <div className="firstSection">
                    <p><span>Nome:</span> {aluno.nome} </p>
                    <p><span>E-mail:</span> {aluno.email} </p>
                  </div>
                  <div className="secondSection">
                    <p><span>Login: </span> {aluno.login} </p>
                    <p><span>Trilha: </span>
                      {aluno.trilhas.length !== 0 ? aluno?.trilhas.map((trilhas: ITrilha, index) => {
                        return index === ultimaTrilha ? trilhas.nome : trilhas.nome + `, `
                      }) : 'Sem trilha vinculada'}</p>
                  </div>
                  <div className="thirdSection">
                    <p><span>Status:</span> {aluno.statusUsuario === 1 ? 'Ativo' : 'Inativo'}</p>
                  </div>
                </ButtonCardContent>
              </ButtonCard>
            )
          }) : <p>Nenhum aluno encontrado!</p>}
        </ButtonCardWrapper>
        <Pagination count={totalPages} page={pagina} onChange={(e, newPage) => setSearchParam({ pagina: newPage.toString() }, { replace: true })} color="primary" />
      </section>
    </ButtonCardContainer>
  );
};
