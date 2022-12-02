import React, { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ButtonPrimary } from "../../components/Buttons/Button";
import { MenuLateral } from "../../components/MenuLateral/MenuLateral";
import { ButtonMenuLateral } from "../../components/Buttons/ButtonMenuLateral";
import { BarraDePesquisa, Titulo } from "../../components/Styles/Component.styled";
import { ButtonCard, ButtonCardContainer, ButtonCardContent, ButtonCardWrapper} from "../../components/Styles/ButtonCard";
import { HiAcademicCap, HiBookOpen, HiChartPie, HiCog, HiSearch, HiUser, HiUsers } from "react-icons/hi";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { IAluno } from "../../types/aluno";
import Pagination from "@mui/material/Pagination";
import { ITrilha } from "../../types/vinculaTrilha";
import { AlunoContext } from "../../context/AlunoContext";
import { VinculaTrilhaContext } from "../../context/VinculaTrilhaContext";

export const Aluno = () => {
  const [trilha, setTrilha] = React.useState("");
  const { getAlunos, alunos, totalPages, getAlunosWithNome, getAlunosWithTrilha} = useContext(AlunoContext);
  const [searchParam, setSearchParam] = useSearchParams();
  const [nome, setNome] = useState<string>('')
  const {getTrilhas, trilhas} = useContext(VinculaTrilhaContext)

  const pagina = useMemo(() => {
    return Number(searchParam.get("pagina") || "1")
  }, [searchParam])

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
    getTrilhas()
  }, [])

  const handleSelect = (event: SelectChangeEvent) => {
    const keyWord = event.target.value
    console.log(keyWord)
    setTrilha(keyWord)
  }

  const handleNome = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const keyWord = event.target.value
    setNome(keyWord)
  }

  const handleChange = (event: SelectChangeEvent) => {
    setTrilha(event.target.value as string);
  };
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
            <FormControl >
        <InputLabel  id="demo-multiple-checkbox-label">Trilha</InputLabel>
        <Select
                labelId="select-vincula-aluno-trilha"
                id="edita-trilha"
                value={trilha}
                label="Trilha"
                onChange={handleSelect}
                // renderValue={}
              >
                {trilhas&&trilhas.map((trilha:ITrilha)=>
                 <MenuItem value={trilha.idTrilha}>{trilha.nome} - edição {trilha.edicao}</MenuItem>
                )}
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
            {alunos.length > 0 ? alunos?.map((aluno: IAluno) => {
              return (
                <ButtonCard>
                  <ButtonCardContent>
                    {/* <img src={userDummy} alt="Foto" /> */}
                    <div>
                      <p><span>Nome:</span> {aluno.nome} </p>
                      <p><span>E-mail:</span> {aluno.email} </p>
                    </div>
                    <div>
                      <p><span>Status:</span> {aluno.statusUsuario === 1 ? 'Ativo' : 'Inativo'}</p>
                      <p><span>Trilha: </span>{aluno.trilhas&&aluno.trilhas.map((trilha: ITrilha)=> trilha.nome).join(', ')}</p>
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


