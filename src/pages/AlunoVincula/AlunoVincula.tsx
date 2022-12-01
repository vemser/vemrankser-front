import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { vinculaAlunoSchema } from "../../utils/schemas";
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
import { VinculaTrilhaContext } from "../../context/VinculaTrilhaContext";
import { ITrilha, IVinculaTrilha } from "../../types/vinculaTrilha";

export const VinculaAluno = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVinculaTrilha>({
    resolver: yupResolver(vinculaAlunoSchema),
  });

  const [trilha, setTrilha] = React.useState("");
  const {trilhas, getTrilhas, vinculaTrilha} = useContext(VinculaTrilhaContext)

  useEffect(()=>{
    getTrilhas();
  },[])

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setTrilha(event.target.value as string);
  };
  
  const vinculaAluno = (data:IVinculaTrilha) => {
     vinculaTrilha(data)
  }

  

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
          <form onSubmit={handleSubmit(vinculaAluno)}>
            <TextField
              id="nome-vincula-aluno"
              label="Login"
              variant="outlined"
              sx={{ width: "100%", marginBottom: "5%", marginTop: "2%", backgroundColor: 'white' }}
              {...register("login")}
              size="small"
            />  
              {errors.login && <ErrorMessage>{errors.login.message}</ErrorMessage>}

            <FormControl
              sx={{
                width: "100%",
                marginBottom: "5%",
                marginTop: "5%",
                backgroundColor: "white",
              }}
              fullWidth
              size="small"
            >
              <InputLabel id="vincula-aluno-trilha" >
                Trilha
              </InputLabel>
              <Select
                labelId="select-vincula-aluno-trilha"
                id="edita-trilha"
                value={trilha}
                label="Trilha"
                {...register("idTrilha")}
                onChange={handleChangeSelect}
              >
                {trilhas&&trilhas.map((trilha:ITrilha)=>
                 <MenuItem value={trilha.idTrilha}>{trilha.nome} - edição {trilha.edicao}</MenuItem>
                )}
              </Select>
            </FormControl>
            {errors.idTrilha && <ErrorMessage>{errors.idTrilha.message}</ErrorMessage>}
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
