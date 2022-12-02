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
import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Pagination, Select, SelectChangeEvent, TextField } from "@mui/material";
import { HiUser, HiChartPie, HiAcademicCap, HiBookOpen, HiCog, HiSearch, HiUsers } from "react-icons/hi";
import userDummy from "../../assets/user.png";
import { VinculaTrilhaContext } from "../../context/VinculaTrilhaContext";
import { api } from "../../utils/api";

export const Aluno = () => {
  const [trilha, setTrilha] = React.useState("");
  const { getAlunos, alunos, totalPages } = useContext(AlunoContext);
  const { trilhas, getTrilhas, getAlunosEmTrilha, alunoEmTrilha } = useContext(VinculaTrilhaContext);
  const [searchParam, setSearchParam] = useSearchParams();
  const [nome, setNome] = useState<string>('')
  const {getTrilhas, trilhas} = useContext(VinculaTrilhaContext)

  const pagina = useMemo(() => {
    return Number(searchParam.get("pagina") || "1")
  }, [searchParam]);

  useEffect(() => {
    if(nome){
   getAlunosWithNome(pagina, nome)
   return
    }
    if(trilha){
      getAlunosWithTrilha(pagina, parseInt(trilha))
      return
    }
    getAlunos(pagina)
  }, [pagina, trilha, nome])

  useEffect(() => {
    setAlunoData(alunos)
  }, [alunos])

  useEffect(() => {
    getTrilhas()
  }, [])

  useEffect(() => {
    let listaFiltrada = alunos
    listaFiltrada = filtraAlunoPorTrilha(trilha, listaFiltrada)
    setAlunoData(listaFiltrada)
  }, [trilha])

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

  const handleSelect = async (event: SelectChangeEvent) => {
    const keyWord = event.target.value;
    setTrilha(keyWord);

    api.get(`/trilha/lista-alunos-trilha?pagina=0&tamanho=4&idTrilha=${keyWord}`).then(
      ({ data }) => {
        const { elementos } = data

        const { usuarios } = elementos[0]

        const formatedOldOBJ = elementos.map((trilha: any) => {
          return ({
            ...usuarios[0],
            trilhas: [{
              nome: trilha.nome,
              edicao: trilha.edicao,
              anoEdicao: trilha.anoEdicao,
              idTrilha: trilha.idTrilha
            }]
          })
        })

        setAlunoData(formatedOldOBJ);
      }
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
                  {trilhas.map((trilhaSelect: ITrilha) => {
                    return <MenuItem value={trilhaSelect.idTrilha}>{trilhaSelect.nome}</MenuItem>
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
                    <div>
                      <p><span>Nome:</span> {aluno.nome} </p>
                      <p><span>E-mail:</span> {aluno.email} </p>
                    </div>
                    <div>
                      <p><span>Status:</span> {aluno.statusUsuario === 1 ? 'Ativo' : 'Inativo'}</p>
                      <p><span>Trilha: </span>
                        {aluno.trilhas.length !== 0 ? aluno?.trilhas.map((trilhas: ITrilha, index) => {
                          return index === ultimaTrilha ? trilhas.nome : trilhas.nome + `, `
                        }) : 'Sem trilha vinculada'}</p>
                    </div>
                  </ButtonCardContent>
                </ButtonCard>
              )
            }) : <p>Nenhum aluno encontrado!</p>}
          </ButtonCardWrapper>
          <Pagination count={totalPages} page={pagina} onChange={(e, newPage) => setSearchParam({ pagina: newPage.toString() }, { replace: true })} color="primary" />
        </section>
      </ButtonCardContainer>
    </>
  );
};
