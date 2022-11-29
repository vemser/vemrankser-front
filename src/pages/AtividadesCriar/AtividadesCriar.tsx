import { ButtonMenuLateral } from "../../components/Buttons/ButtonMenuLateral";
import { MenuLateral } from "../../components/MenuLateral/MenuLateral";
import {
  HiAcademicCap,
  HiBookOpen,
  HiChartPie,
  HiCog,
  HiUser,
  HiUsers,
} from "react-icons/hi";
import {
  ButtonWraper,
  ContentWrapper,
  MainContainer,
} from "../../components/Styles/Container.styled";
import { Titulo } from "../../components/Styles/Component.styled";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

import {
  ButtonPrimary,
  ButtonSecondary,
} from "../../components/Buttons/Button";
import React from "react";
import InputData from "../../components/InputData/InputData";
import CheckMarks from "../../components/CheckMarks/CheckMarks";

export const AtividadesCriar = () => {
  const [trilha, setTrilha] = React.useState("");
  const [modulo, setModulo] = React.useState("");

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setTrilha(event.target.value as string);
  };

  const handleChangeSelect2 = (event: SelectChangeEvent) => {
    setModulo(event.target.value as string);
  };

  return (
    <MainContainer>
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
      <ContentWrapper>
        <Titulo>Adicionar Nova Atividade</Titulo>
        <form>
          <TextField
            id="nome-cadastra-aluno"
            label="Título"
            variant="outlined"
            sx={{
              width: "100%",
              marginBottom: "5%",
              marginTop: "10%",
              backgroundColor: "white",
            }}
            size="small"
          />
          <TextField
            id="outlined-multiline-static"
            label="Descrição"
            multiline
            rows={6}
            variant="outlined"
            sx={{ width: "100%", marginBottom: "5%", backgroundColor: "white" }}
          />

           <CheckMarks />
          <FormControl
            sx={{
              width: "100%",
              marginBottom: "5%",
              backgroundColor: "white",
            }}
            fullWidth
            size="small"
          >
            <InputLabel id="select-cadastra-modulo">Módulo</InputLabel>
            <Select
              labelId="select-edita-modulo"
              id="edita-modulo"
              value={modulo}
              label="Modulo"
              onChange={handleChangeSelect2}
            >
              <MenuItem value={"modulo1"}>Módulo 1</MenuItem>
              <MenuItem value={"modulo2"}>Módulo 2</MenuItem>
              <MenuItem value={"modulo3"}>Módulo 3</MenuItem>
              <MenuItem value={"modulo4"}>Módulo 4</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              width: "100%",
              marginBottom: "5%",
              backgroundColor: "white",
            }}
            fullWidth
            size="small"
          >
            <InputLabel id="select-cadastra-trilha">
              Peso
            </InputLabel>
            <Select
              labelId="select-edita-trilha"
              id="edita-trilha"
              value={trilha}
              label="Trilha"
              onChange={handleChangeSelect}
            >
              <MenuItem value={"geral"}>1</MenuItem>
              <MenuItem value={"backend"}>2</MenuItem>
              <MenuItem value={"frontend"}>3</MenuItem>
              <MenuItem value={"qa"}>4</MenuItem>
            </Select>
          </FormControl>
          <InputData />
          <ButtonWraper>
            <ButtonPrimary
              label="Adicionar"
              id="button-edita-aluno"
              type="submit"
            />
            <Link to="/atividades">
              <ButtonSecondary
                label="Cancelar"
                id="button-cancela-aluno"
                type="button"
              />
            </Link>
          </ButtonWraper>
        </form>
      </ContentWrapper>
    </MainContainer>
  );
};
