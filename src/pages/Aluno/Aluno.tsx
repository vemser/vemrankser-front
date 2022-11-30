import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../components/Buttons/Button";
import { MenuLateral } from "../../components/MenuLateral/MenuLateral";
import { ButtonMenuLateral } from "../../components/Buttons/ButtonMenuLateral";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { HiUser, HiChartPie, HiAcademicCap, HiBookOpen, HiCog, HiSearch, HiUsers } from "react-icons/hi";
import userDummy from "../../assets/user.png";
import BarraPesquisa from "../../components/BarraPesquisa/BarraPesquisa";
import { BarraDePesquisa, Titulo } from "../../components/Styles/Component.styled";
import { ButtonCard, ButtonCardContainer, ButtonCardContent, ButtonCardWrapper } from "../../components/Styles/ButtonCard";
import { AuthContext } from "../../context/AuthContext";

export const Aluno = () => {
  const [trilha, setTrilha] = React.useState("");
  const { getLoggedUser } = useContext(AuthContext);

  useEffect(() => {
    getLoggedUser()
  }, [])

  const user = localStorage.getItem('user');
  const tipo = localStorage.getItem('tipo');

  function verificaTipoUsuario(tipoPerfil: number) {
    switch (tipoPerfil) {
      case 1:
        return 'Coordenador'

      case 2:
        return 'Aluno'

      case 3:
        return 'Instrutor'

      case 4:
        return 'Admin'

      case 5:
        return 'Gestão'

      default:
        return 'Indefinido'
    }
  }

  const handleChange = (event: SelectChangeEvent) => {
    setTrilha(event.target.value as string);
  };
  return (
    <>
      <ButtonCardContainer>
        <MenuLateral
          nomeDoUsuario={`${user}`}
          cargoDoUsuario={`${verificaTipoUsuario(Number(tipo))}`}
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
              />
              <i>
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
              <ButtonCardContent>
                <img src={userDummy} alt="Foto" />
                <div>
                  <p><span>Nome:</span> Luiza Valentini </p>
                  <p><span>E-mail:</span> testedeemailgrande@mail.com </p>
                </div>
                <div>
                  <p><span>Login:</span> Luiza.valentini </p>
                  <p><span>Cidade: </span> Caxias do sul </p>
                </div>
                <div>
                  <p><span>Status:</span> ativo </p>
                </div>
              </ButtonCardContent>
            </ButtonCard>
            <ButtonCard>
              <ButtonCardContent>
                <img src={userDummy} alt="Foto" />
                <div>
                  <p><span>Nome:</span> Luiza Valentini </p>
                  <p><span>E-mail:</span> testedeemailgrande@mail.com </p>
                </div>
                <div>
                  <p><span>Login:</span> Luiza.valentini </p>
                  <p><span>Cidade: </span> Caxias do sul </p>
                </div>
                <div>
                  <p><span>Status:</span> ativo </p>
                </div>
              </ButtonCardContent>
            </ButtonCard><ButtonCard>
              <ButtonCardContent>
                <img src={userDummy} alt="Foto" />
                <div>
                  <p><span>Nome:</span> Luiza Valentini </p>
                  <p><span>E-mail:</span> testedeemailgrande@mail.com </p>
                </div>
                <div>
                  <p><span>Login:</span> Luiza.valentini </p>
                  <p><span>Cidade: </span> Caxias do sul </p>
                </div>
                <div>
                  <p><span>Status:</span> ativo </p>
                </div>
              </ButtonCardContent>
            </ButtonCard><ButtonCard>
              <ButtonCardContent>
                <img src={userDummy} alt="Foto" />
                <div>
                  <p><span>Nome:</span> Luiza Valentini </p>
                  <p><span>E-mail:</span> testedeemailgrande@mail.com </p>
                </div>
                <div>
                  <p><span>Login:</span> Luiza.valentini </p>
                  <p><span>Cidade: </span> Caxias do sul </p>
                </div>
                <div>
                  <p><span>Status:</span> ativo </p>
                </div>
              </ButtonCardContent>
            </ButtonCard>
          </ButtonCardWrapper>
        </section>
      </ButtonCardContainer>
    </>
  );
};
