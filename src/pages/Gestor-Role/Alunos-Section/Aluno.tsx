import React, { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ButtonPrimary } from "../../../components/Buttons/Button";
import userDummy from "../../../assets/user.webp";
import { BarraDePesquisa, Titulo } from "../../../components/Styles/Component.styled";
import { ButtonCard, ButtonCardContainer, ButtonCardContent, ButtonCardWrapper } from "../../../components/Styles/ButtonCard";
import { HiSearch } from "react-icons/hi";
import { IAluno } from "../../../types/aluno";
import { ITrilha } from "../../../types/trilha";
import { AlunoContext } from "../../../context/AlunoContext";
import { FormControl, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent, TextField } from "@mui/material";
import { VinculaTrilhaContext } from "../../../context/VinculaTrilhaContext";
import { api } from "../../../utils/api";

export const Aluno = () => {
  const [trilha, setTrilha] = React.useState("");
  const { getAlunos, alunos, totalPages, setTotalPages } = useContext(AlunoContext);
  const { trilhas, getTrilhas } = useContext(VinculaTrilhaContext);
  const [searchParam, setSearchParam] = useSearchParams();
  const [nome, setNome] = useState<string>('');
  const [alunoData, setAlunoData] = useState<IAluno[]>([]);
  const token = localStorage.getItem('token');

  const pagina = useMemo(() => {
    return Number(searchParam.get("pagina") || "1")
  }, [searchParam]);

  const handleSelect = async (event: SelectChangeEvent) => {
    const keyWord = event.target.value;
    setTrilha(keyWord);

    api.defaults.headers.common['Authorization'] = token;
    api.get(`/usuario/lista-alunos-trilha?pagina=0&tamanho=4&idTrilha=${keyWord}`).then(
      ({ data }) => {
        setTotalPages(data.quantidadePaginas);
        const { elementos } = data;
        const formatted = elementos.map((usuario: any) => {
          return {
            idUsuario: usuario.idUsuario,
            foto: usuario.foto,
            nome: usuario.nome,
            email: usuario.email,
            login: usuario.login,
            statusUsuario: usuario.statusUsuario,
            tipoPerfil: usuario.tipoPerfil,
            trilhas: [{
              nome: usuario.nomeTrilha,
              edicao: usuario.edicao,
              anoEdicao: usuario.anoEdicao,
              idTrilha: usuario.idTrilha
            }]
          };
        });
        setAlunoData(formatted);
      }
    )
  }

  const getFilteredList = () => {
    api.defaults.headers.common['Authorization'] = token;
    api.get(`/usuario/lista-alunos-trilha?pagina=${pagina - 1}&tamanho=4&idTrilha=${trilha}`).then(
      ({ data }) => {
        setTotalPages(data.quantidadePaginas);
        const { elementos } = data;
        const formatted = elementos.map((usuario: any) => {
          return {
            idUsuario: usuario.idUsuario,
            foto: usuario.foto,
            nome: usuario.nome,
            email: usuario.email,
            login: usuario.login,
            statusUsuario: usuario.statusUsuario,
            tipoPerfil: usuario.tipoPerfil,
            trilhas: [{
              nome: usuario.nomeTrilha,
              edicao: usuario.edicao,
              anoEdicao: usuario.anoEdicao,
              idTrilha: usuario.idTrilha
            }]
          };
        });
        setAlunoData(formatted);
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
    setNome(keyWord);
  }

  useEffect(() => {
    setAlunoData(alunos)
  }, [alunos]);

  useEffect(() => {
    getTrilhas()
  }, []);

  useEffect(() => {
    if (trilha !== '') {
      getFilteredList();
    } else {
      getAlunos(pagina);
    }
  }, [pagina]);

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
                <MenuItem key={''} value={''} onClick={() => getAlunos(pagina)}>Sem Filtro</MenuItem>
                {trilhas.map((trilhaSelect: ITrilha) => {
                  return <MenuItem key={trilhaSelect.idTrilha} value={trilhaSelect.idTrilha}>{trilhaSelect.nome}</MenuItem>
                })}
              </Select>
            </FormControl>
          </div>

          <BarraDePesquisa>
            <TextField variant="outlined" sx={{ width: 280, backgroundColor: "white" }}
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
          {alunoData.map((aluno: IAluno) => {
            const ultimaTrilha = aluno.trilhas.length - 1

            return (
              <ButtonCard key={aluno.email}>
                <ButtonCardContent>
                  <img src={aluno.foto !== null || '' ? `data:image/jpeg;base64,${aluno.foto}` : userDummy} alt={`Foto de ${aluno.nome}`} />
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
                    <p><span>Status:</span> {aluno.statusUsuario === 1 ? <span className="ativo">Ativo</span> : <span className="inativo">Inativo</span>}</p>
                  </div>
                </ButtonCardContent>
              </ButtonCard>
            )
          })}
        </ButtonCardWrapper>
        <Pagination count={totalPages} page={pagina} onChange={(e, newPage) => setSearchParam({ pagina: newPage.toString() }, { replace: true })} color="primary" />
      </section>
    </ButtonCardContainer>
  );
};
