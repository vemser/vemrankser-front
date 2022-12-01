import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { vinculaAlunoSchema } from "../../utils/schemas";
import { IVinculaAluno } from "../../types/vinculaAluno";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { ButtonMenuLateral } from "../../components/Buttons/ButtonMenuLateral";
import { ButtonPrimary, ButtonSecondary } from "../../components/Buttons/Button";
import { MenuLateral } from "../../components/MenuLateral/MenuLateral";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { HiAcademicCap, HiBookOpen, HiChartPie, HiCog, HiUser, HiUsers } from "react-icons/hi";
import { ButtonWraper, ContentWrapper, MainContainer } from "../../components/Styles/Container.styled";
import { ErrorMessage, Titulo } from "../../components/Styles/Component.styled";

export const VinculaAluno = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVinculaAluno>({
    resolver: yupResolver(vinculaAlunoSchema),
  });

  const [trilha, setTrilha] = React.useState("");
  const [edicao, setEdicao] = React.useState("");

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setTrilha(event.target.value as string);
  };
  const handleChangeSelect2 = (event: SelectChangeEvent) => {
    setEdicao(event.target.value as string);
  };


  return (
    <>
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
          <Titulo>
            Adicionar aluno à trilha
          </Titulo>
          <form>
            <TextField
              id="nome-vincula-aluno"
              label="Nome"
              variant="outlined"
              sx={{ width: "100%", marginBottom: "5%", marginTop: "10%", backgroundColor: 'white' }}
              {...register("nome")}
              size="small"
            />
            {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}

            <FormControl
              sx={{
                width: "100%",
                marginBottom: "5%",
                backgroundColor: "white",
              }}
              fullWidth
              size="small"
            >
              <InputLabel id="vincula-aluno-trilha" {...register("trilha")}>
                Trilha
              </InputLabel>
              {errors.trilha && <ErrorMessage>{errors.trilha.message}</ErrorMessage>}
              <Select
                labelId="select-vincula-aluno-trilha"
                id="edita-trilha"
                value={trilha}
                label="Trilha"
                onChange={handleChangeSelect}
              >
                <MenuItem value={"geral"}>Geral</MenuItem>
                <MenuItem value={"backend"}>Backend</MenuItem>
                <MenuItem value={"frontend"}>Frontend</MenuItem>
                <MenuItem value={"qa"}>QA</MenuItem>
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
              <InputLabel id="vincula-aluno-edicao" {...register("edicao")}>
                Edição
              </InputLabel>
              {errors.edicao && <ErrorMessage>{errors.edicao.message}</ErrorMessage>}
              <Select
                labelId="select-vincula-aluno-edicao"
                id="vincula-aluno-edicao"
                value={edicao}
                label="Trilha"
                onChange={handleChangeSelect2}
              >
                <MenuItem value={"edicao1"}>1</MenuItem>
                <MenuItem value={"edicao2"}>2</MenuItem>
                <MenuItem value={"edicao3"}>3</MenuItem>
                <MenuItem value={"edicao4"}>4</MenuItem>
                <MenuItem value={"edicao5"}>5</MenuItem>
                <MenuItem value={"edicao6"}>6</MenuItem>
                <MenuItem value={"edicao7"}>7</MenuItem>
                <MenuItem value={"edicao8"}>8</MenuItem>
                <MenuItem value={"edicao9"}>9</MenuItem>
                <MenuItem value={"edicao10"}>10</MenuItem>
                <MenuItem value={"edicao11"}>11</MenuItem>
              </Select>
            </FormControl>
            <ButtonWraper>
              <ButtonPrimary
                label="Adicionar"
                id="button-vincula-aluno"
                type="submit"
              />
              <Link to="/alunos">
                <ButtonSecondary
                  label="Cancelar"
                  id="button-volta-vincula-aluno"
                  type="button"
                />
              </Link>
            </ButtonWraper>
          </form>
        </ContentWrapper>
      </MainContainer>
    </>
  );
};
