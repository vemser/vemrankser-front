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
import { ErrorMessage, Titulo } from "../../components/Styles/Component.styled";
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
import React, { useContext } from "react";
import InputData from "../../components/InputData/InputData";
import CheckMarks from "../../components/CheckMarks/CheckMarks";
import { cadastraAtividadeSchema } from "../../utils/schemas";
import { ICadastraAtividade } from "../../types/cadastraAtividade";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AtividadeContext } from "../../context/AtividadesContext";

export const AtividadesCriar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICadastraAtividade>({
    resolver: yupResolver(cadastraAtividadeSchema),
  });
  
  const [trilha, setTrilha] = React.useState("");
  const [modulo, setModulo] = React.useState("");
  const {criaAtividade} = useContext(AtividadeContext)

    
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
        <form onSubmit={handleSubmit((data: ICadastraAtividade) =>  criaAtividade(data))}>
          <TextField
            {...register("titulo")}
            id="titulo-cadastra-atividade"
            label="Título"
            variant="outlined"
            sx={{
              width: '300px',
              marginBottom: "5%",
              marginTop: "10%",
              backgroundColor: "white",
            }}
            size="small"
          />
          {errors.titulo && <ErrorMessage>{errors.titulo.message}</ErrorMessage>}
          <TextField
            id="descricao-cadastra-atividade"
            label="Descrição"
            multiline
            rows={6}
            variant="outlined"
            {...register("instrucoes")}
            sx={{ width: '300px', marginBottom: "5%", backgroundColor: "white" }}
          />
            {errors.instrucoes && <ErrorMessage>{errors.instrucoes.message}</ErrorMessage>}

           {/* <CheckMarks />
           {errors.idTrilha && <ErrorMessage>{errors.idTrilha.message}</ErrorMessage>} */}

          <FormControl
            sx={{
              width: '300px',
              marginBottom: "5%",
              backgroundColor: "white",
            }}
            fullWidth
            size="small"
          >
            <InputLabel id="select-cadastra-atividade-modulo">Módulo</InputLabel>
            <Select
              labelId="select-cadastra-atividade-modulo"
              id="cadastra-atividade-modulo"
              value={modulo}
              label="Modulo"
              {...register("idModulo")}
              onChange={handleChangeSelect2}
            >
              <MenuItem value={"modulo1"}>Módulo 1</MenuItem>
              <MenuItem value={"modulo2"}>Módulo 2</MenuItem>
              <MenuItem value={"modulo3"}>Módulo 3</MenuItem>
              <MenuItem value={"modulo4"}>Módulo 4</MenuItem>
            </Select>
          </FormControl>
          {errors.idModulo && <ErrorMessage>{errors.idModulo.message}</ErrorMessage>}
          <FormControl
            sx={{
              width: '300px',
              marginBottom: "5%",
              backgroundColor: "white",
            }}
            fullWidth
            size="small"
          >
            <InputLabel id="select-cadastra-atividade-trilha">
              Peso
            </InputLabel>
            <Select
              labelId="select-cadastra-atividade-trilha"
              id="cadastra-atividade-trilha"
              value={trilha}
              label="Trilha"
              {...register("pesoAtividade")}
              onChange={handleChangeSelect}
            >
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
            </Select>
          </FormControl>
          {errors.pesoAtividade && <ErrorMessage>{errors.pesoAtividade.message}</ErrorMessage>}
          <InputData />
          <ButtonWraper>
            <ButtonPrimary
              label="Adicionar"
              id="button-adiciona-atividade"
              type="submit"
            />
            <Link to="/atividades">
              <ButtonSecondary
                type="button"
                label="Cancelar"
                id="button-cancela-cadastro-atividade"
              
              />
            </Link>
          </ButtonWraper>
        </form>
      </ContentWrapper>
    </MainContainer>
  );
};
