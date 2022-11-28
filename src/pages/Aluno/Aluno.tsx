import React from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../components/Buttons/Button";
import { MenuLateral } from "../../components/MenuLateral/MenuLateral";
import { ButtonMenuLateral } from "../../components/ButtonMenuLateral/ButtonMenuLateral";
import { ButtonEditaDeleta } from "../../components/ButtonEditaDeleta/ButtonEditaDeleta";
import {
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import {
  AlunosCard,
  AlunosContainer,
  Buttons,
  CardContainer,
  HeaderSelect,
  Titulo,
} from "./Aluno.styled";
import {
  HiUser,
  HiChartPie,
  HiAcademicCap,
  HiBookOpen,
  HiCog,
  HiTrash,
  HiClipboardList,
  HiSearch,
} from "react-icons/hi";
import userDummy from "../../assets/user.png";
import BarraPesquisa from "../../components/BarraPesquisa/BarraPesquisa";

export const Aluno = () => {
  const [trilha, setTrilha] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setTrilha(event.target.value as string);
  };
  return (
    <>
      <AlunosContainer>
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
            <h1>Alunos</h1>
          </Titulo>

          <div className="flex">
            <HeaderSelect>
              <FormControl
                sx={{ width: 250, heigth: 50, backgroundColor: "white" }}
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
            </HeaderSelect>

            <div className="barra-pesquisa-e-icone">
              <BarraPesquisa
                label={"Pesquisar"}
                id={"barra-de-pesquisa-aluno"}
              />
              <i>
                <HiSearch size={"30px"} />
              </i>
            </div>

            <Link to={"/vincula-aluno"}>
              <ButtonPrimary
                type={"button"}
                id={"botao-nova-atividade"}
                label={"Adicionar Aluno"}
              />
            </Link>
          </div>
          <CardContainer>
            <AlunosCard>
              <img src={userDummy} alt="Foto" />
              <CardContent>
                <p>
                  <span>Nome:</span> Luiza Valentini
                </p>

                <p>
                  <span>E-mail:</span> Luizadarav@
                </p>

                <p>
                  <span>Login:</span> Luiza.valentini{" "}
                </p>
                <p>
                  <span>Status:</span> ativo
                </p>
                <p>
                  <span>Cidade: </span>Caxias do sul
                </p>
              </CardContent>
              <Buttons>
                <Link to={"/edita-aluno"}>
                  <ButtonEditaDeleta
                    label={"Editar"}
                    icone={<HiClipboardList />}
                  />
                </Link>
                <ButtonEditaDeleta label={"Deletar"} icone={<HiTrash />} />
              </Buttons>
            </AlunosCard>
            <AlunosCard>
              <img src={userDummy} alt="Foto" />
              <CardContent>
                <p>
                  <span className="teste">Nome:</span> Luiza Valentini
                </p>

                <p>
                  <span>E-mail:</span> Luizadarav@
                </p>

                <p>
                  <span>Login:</span> Luiza.valentini{" "}
                </p>
                <p>
                  <span>Status:</span> ativo
                </p>
                <p>
                  <span>Cidade: </span>Caxias do sul
                </p>
              </CardContent>
              <Buttons>
                <Link to={"/edita-aluno"}>
                  <ButtonEditaDeleta
                    label={"Editar"}
                    icone={<HiClipboardList />}
                  />
                </Link>
                <ButtonEditaDeleta label={"Deletar"} icone={<HiTrash />} />
              </Buttons>
            </AlunosCard>
            <AlunosCard>
              <img src={userDummy} alt="Foto" />
              <CardContent>
                <p>
                  <span className="teste">Nome:</span> Luiza Valentini
                </p>

                <p>
                  <span>E-mail:</span> Luizadarav@
                </p>

                <p>
                  <span>Login:</span> Luiza.valentini{" "}
                </p>
                <p>
                  <span>Status:</span> ativo
                </p>
                <p>
                  <span>Cidade: </span>Caxias do sul
                </p>
              </CardContent>
              <Buttons>
                <Link to={"/edita-aluno"}>
                  <ButtonEditaDeleta
                    label={"Editar"}
                    icone={<HiClipboardList />}
                  />
                </Link>
                <ButtonEditaDeleta label={"Deletar"} icone={<HiTrash />} />
              </Buttons>
            </AlunosCard>
            <AlunosCard>
              <img src={userDummy} alt="Foto" />
              <CardContent>
                <p>
                  <span className="teste">Nome:</span> Luiza Valentini
                </p>

                <p>
                  <span>E-mail:</span> Luizadarav@
                </p>

                <p>
                  <span>Login:</span> Luiza.valentini{" "}
                </p>
                <p>
                  <span>Status:</span> ativo
                </p>
                <p>
                  <span>Cidade: </span>Caxias do sul
                </p>
              </CardContent>
              <Buttons>
                <Link to={"/edita-aluno"}>
                  <ButtonEditaDeleta
                    label={"Editar"}
                    icone={<HiClipboardList />}
                  />
                </Link>
                <ButtonEditaDeleta label={"Deletar"} icone={<HiTrash />} />
              </Buttons>
            </AlunosCard>
          </CardContainer>
        </section>
      </AlunosContainer>
    </>
  );
};
