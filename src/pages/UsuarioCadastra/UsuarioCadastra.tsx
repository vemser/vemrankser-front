import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { adicionaUsuarioSchema } from "../../utils/schemas";
import { IUser } from "../../types/user";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { ButtonMenuLateral } from "../../components/Buttons/ButtonMenuLateral";
import { ButtonPrimary, ButtonSecondary } from "../../components/Buttons/Button";
import { MenuLateral } from "../../components/MenuLateral/MenuLateral";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { HiAcademicCap, HiBookOpen, HiChartPie, HiCog, HiUser } from "react-icons/hi";
import { ButtonWraper, ContentWrapper, MainContainer } from "../../components/Styles/Container.styled";
import { ErrorMessage, Titulo } from "../../components/Styles/Component.styled";

export const UsuarioCadastra = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(adicionaUsuarioSchema),
  });

  const [atuacao, setAtuacao] = React.useState("");
  const [trilha, setTrilha] = React.useState("");

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setAtuacao(event.target.value as string);
  };

  const handleChangeSelect2 = (event: SelectChangeEvent) => {
    setTrilha(event.target.value as string);
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
          <Titulo>Cadastro Usuário</Titulo>
          <form>
            <TextField
              id="nome-cadastra-usuario"
              label="Nome"
              variant="outlined"
              sx={{
                width: "100%",
                marginBottom: "-5%",
                marginTop: "10%",
                backgroundColor: "white",
              }}
              {...register("nome")}
              size="small"
            />
            {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
            <TextField
              id="email-cadastra-usuario"
              label="E-mail"
              variant="outlined"
              sx={{
                width: "100%",
                marginBottom: "-5%",
                marginTop: "10%",
                backgroundColor: "white",
              }}
              {...register("email")}
              size="small"
            />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            
            <TextField
              id="senha-cadastra-usuario"
              label="Senha"
              variant="outlined"
              type='password'
              sx={{
                width: "100%",
                marginBottom: "5%",
                marginTop: "10%",
                backgroundColor: "white",
              }}
              {...register("senha")}
              size="small"
            />
              {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
            <FormControl
              sx={{  width: '100%', heigth: 50, backgroundColor: "white" }}
              fullWidth
              size="small"
            >
              <InputLabel id="select-usuario-atuacao-label"  {...register("atuacao")}>Atuação</InputLabel>
              {errors.atuacao && <ErrorMessage>{errors.atuacao.message}</ErrorMessage>}
              <Select
                labelId="select-usuario-atuacao-label"
                id="select-usuario-atuacao"
                value={atuacao}
                label="atuacao"
                onChange={handleChangeSelect}
              >

                <MenuItem value={"intrutor"}>Instrutor</MenuItem>
                <MenuItem value={"coordenador"}>Coordenador</MenuItem>
                <MenuItem value={"administrador"}>Administrador</MenuItem>
                <MenuItem value={"gestaoPessoa"}>Gestao de Pessoas</MenuItem>
                <MenuItem value={"aluno"}>Aluno</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{  width: '100%', marginTop: '5%',heigth: 50, backgroundColor: "white" }}
              fullWidth
              size="small"
            >
              <InputLabel id="select-usuario-aluno-trilha-label" {...register("atuacao")}>Trilha</InputLabel>
              {errors.trilha && <ErrorMessage>{errors.trilha.message}</ErrorMessage>}
              <Select
                labelId="select-usuario-aluno-trilha-label"
                id="select-usuario-aluno"
                value={trilha}
                label="trilha-aluno"
                onChange={handleChangeSelect2}
              >
                <MenuItem value={"backEnd"}>BackEnd</MenuItem>
                <MenuItem value={"frontEnd"}>FrontEnd</MenuItem>
                <MenuItem value={"qa"}>QA</MenuItem>
              </Select>
            </FormControl>
            <ButtonWraper>
              <ButtonPrimary
                label="Adicionar"
                id="button-adiciona-usuario"
                type="submit"
              />
              <Link to="/usuarios">
                <ButtonSecondary
                  label="Cancelar"
                  id="button-cancela-usuario"
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
