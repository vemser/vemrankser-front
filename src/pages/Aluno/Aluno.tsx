import React, { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";
import { AlunoContext } from "../../context/AlunoContext";
import { IAluno } from "../../types/aluno";
import { ITrilha } from "../../types/vinculaTrilha";
import { Link, useSearchParams } from "react-router-dom";
import { ButtonPrimary } from "../../components/Buttons/Button";
import { MenuLateral } from "../../components/MenuLateral/MenuLateral";
import { ButtonMenuLateral } from "../../components/Buttons/ButtonMenuLateral";
import { BarraDePesquisa, Titulo } from "../../components/Styles/Component.styled";
import { ButtonCard, ButtonCardContainer, ButtonCardContent, ButtonCardWrapper } from "../../components/Styles/ButtonCard";
import { FormControl, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent, TextField } from "@mui/material";
import { HiUser, HiChartPie, HiAcademicCap, HiBookOpen, HiCog, HiSearch, HiUsers } from "react-icons/hi";
import userDummy from "../../assets/user.png";

export const Aluno = () => {
  const [trilha, setTrilha] = React.useState("");
  const { getAlunos, alunos, totalPages } = useContext(AlunoContext);
  const [searchParam, setSearchParam] = useSearchParams();
  const [alunoData, setAlunoData] = useState([] as IAluno[])
  const [nome, setNome] = useState<string>('')

  const pagina = useMemo(() => {
    return Number(searchParam.get("pagina") || "1")
  }, [searchParam])

  useEffect(() => {
    getAlunos(pagina)
  }, [pagina])

  useEffect(() => {
    setAlunoData(alunos)
  }, [alunos])


  useEffect(() => {
    let listaFiltrada = alunos
    listaFiltrada = filtraAluno(nome, listaFiltrada)
    listaFiltrada = filtraAlunoPorTrilha(trilha, listaFiltrada)
    setAlunoData(listaFiltrada)
  }, [nome, trilha])

  const filtraAluno = (keyWord: string, listaAlunos: IAluno[]) => {
    if (keyWord !== '') {
      listaAlunos = alunos.filter((aluno) => {
        return aluno.nome.toLowerCase().startsWith(keyWord.toLowerCase());
      });
    }
    return listaAlunos
  }
  const filtraAlunoPorTrilha = (keyWord: string, listaAlunos: IAluno[]) => {
    if (keyWord !== '' && keyWord !== 'geral') {
      listaAlunos = alunos.filter((aluno) => {
        return aluno.trilhas.some((trilha) => trilha.nome.toLowerCase().startsWith(keyWord.toLowerCase()));
      });
    }
    return listaAlunos
  }

  const handleSelect = (event: SelectChangeEvent) => {
    const keyWord = event.target.value
    setTrilha(keyWord)
  }

  const handleNome = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const keyWord = event.target.value
    if (keyWord !== '') {
      const resultado = alunos.filter((aluno) => {
        return aluno.nome.toLowerCase().startsWith(keyWord.toLowerCase());
      });
      console.log(resultado)
      setAlunoData(resultado);
    } else {
      setAlunoData(alunos);
    }
    setNome(keyWord)
  }

  return (
    <>
      <ButtonCardContainer>
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
                  <MenuItem value={'geral'}>Geral</MenuItem>
                  <MenuItem value={"backend"}>Backend</MenuItem>
                  <MenuItem value={"frontend"}>Frontend</MenuItem>
                  <MenuItem value={"qa"}>QA</MenuItem>
                </Select>
              </FormControl>
            </div>
            <BarraDePesquisa>
              <TextField variant="outlined" sx={{ width: 300, backgroundColor: "white" }}
                fullWidth
                size="small"
                label={"Filtrar por nome ou email"}
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
              return (
                <ButtonCard>
                  <ButtonCardContent>
                    <img src={userDummy} alt="Foto" />
                    <div>
                      <p><span>Nome:</span> {aluno.nome} </p>
                      <p><span>E-mail:</span> {aluno.email} </p>
                    </div>
                    <div>
                      <p><span>Status:</span> {aluno.statusUsuario === 1 ? 'Ativo' : 'Inativo'}</p>
                      {aluno?.trilhas.map((trilhas: ITrilha) =>
                        <p><span>Trilha: </span>{trilhas.nome}</p>
                      )}
                    </div>
                  </ButtonCardContent>
                </ButtonCard>
              )
            }) : <p>Nenhum aluno enontrado!</p>}
          </ButtonCardWrapper>
          <Pagination count={totalPages} page={pagina} onChange={(e, newPage) => setSearchParam({ pagina: newPage.toString() }, { replace: true })} color="primary" />
        </section>
      </ButtonCardContainer>
    </>
  );
};


