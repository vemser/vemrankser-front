import React, { ChangeEvent, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../components/Buttons/Button";
import { MenuLateral } from "../../components/MenuLateral/MenuLateral";
import { ButtonMenuLateral } from "../../components/Buttons/ButtonMenuLateral";
import { ButtonEditaDeleta } from "../../components/Buttons/ButtonEditaDeleta";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { HiUser, HiChartPie, HiAcademicCap, HiBookOpen, HiCog, HiTrash, HiClipboardList, HiSearch, HiUsers } from "react-icons/hi";
import userDummy from "../../assets/user.png";
import BarraPesquisa from "../../components/BarraPesquisa/BarraPesquisa";
import { BarraDePesquisa, Titulo } from "../../components/Styles/Component.styled";
import { ButtonCard, ButtonCardContainer, ButtonCardContent, ButtonCardWrapper, Buttons } from "../../components/Styles/ButtonCard";
import { AlunoContext } from "../../context/Aluno";
import { IAluno, ITrilha, UserStatus } from "../../types/aluno";

export const Aluno = () => {
  const [trilha, setTrilha] = React.useState("");
  const [ pesquisaAluno, setPesquisa] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setTrilha(event.target.value as string);
  };

  const { getAlunos, alunos, getAlunosWithFilters } = useContext(AlunoContext);

  useEffect(() => {
    getAlunos('1')
  }, [])
 
  const handlePesquisaChange = ( e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPesquisa(e.target.value)
  }

  const handlePesquisa = () => {
    getAlunosWithFilters('1', pesquisaAluno)
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
                  onChange={handleChange}
                >
                  <MenuItem value={"geral"}>Geral</MenuItem>
                  <MenuItem value={"backend"}>Backend</MenuItem>
                  <MenuItem value={"frontend"}>Frontend</MenuItem>
                  <MenuItem value={"qa"}>QA</MenuItem>
                </Select>
              </FormControl>
            </div>

            <BarraDePesquisa>
              <BarraPesquisa
                label={"Pesquisar"}
                id={"barra-de-pesquisa-aluno"}
                value={pesquisaAluno}
                setValue={handlePesquisaChange}
              />
              <i onClick={handlePesquisa}>
                <HiSearch size={"28px"} />
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
            <ButtonCard>
            {alunos.length>0?alunos?.map((aluno: IAluno) => {
          return(
              <ButtonCardContent>
                <img src={userDummy} alt="Foto" />
                <div>
                  <p><span>Nome:</span> {aluno.nome} </p>
                  <p><span>E-mail:</span> {aluno.email} </p>
                </div>
                <div>
                <p><span>Status:</span> {aluno.status===UserStatus.ATIVO?'ativo':'inativo'}</p>
                {aluno?.trilhas.map((trilhas: ITrilha) =>
                       <p><span>Trilha:</span>{trilhas.nome}</p>
            )}
                </div>
              </ButtonCardContent>
                        )}):<p>Nenhum aluno enontrado!</p>}
            </ButtonCard>
          </ButtonCardWrapper>
        </section>
      </ButtonCardContainer>
    </>
  );
};
function getAlunosWithFilters(arg0: string, pesquisaAluno: string) {
  throw new Error("Function not implemented.");
}

