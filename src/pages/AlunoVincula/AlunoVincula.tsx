import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { vinculaAlunoSchema } from "../../utils/schemas";
import { OutlinedInput, TextField } from "@mui/material";
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
  const { trilhas, getTrilhas, vinculaTrilha } = useContext(VinculaTrilhaContext)
  const [trilha, setTrilha] = useState<number[]>([]);
  const { register, handleSubmit, control, formState: { errors } } = useForm<IVinculaTrilha>({
    resolver: yupResolver(vinculaAlunoSchema),
  });

  useEffect(() => {
    getTrilhas();
  }, []);

  const handleChange = (event: any) => {
    const value = event.target.value;
    value.toString();
    setTrilha(
      typeof value === 'string' ? value.split(',') : value,
    );
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
        <Titulo>
          Adicionar aluno à trilha
        </Titulo>
        <form onSubmit={handleSubmit((data: IVinculaTrilha) => vinculaTrilha(data))}>
          <TextField
            id="nome-vincula-aluno"
            label="Login"
            variant="outlined"
            sx={{ width: "100%", marginBottom: "5%", marginTop: "8%", backgroundColor: 'white' }}
            {...register("login")}
            size="small"
          />
          {errors.login && <ErrorMessage>{errors.login.message}</ErrorMessage>}

          <FormControl sx={{ width: "100%", marginBottom: "5%", backgroundColor: "white" }} fullWidth size="small">
            <InputLabel id="demo-multiple-name-label">Trilha</InputLabel>
            <Select
              id="idTrilha"
              multiple
              value={trilha}
              {...register("idTrilha")}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
            >
              {trilhas.map((trilha: ITrilha) =>
                <MenuItem key={trilha.idTrilha} value={trilha.idTrilha}>
                  {trilha.nome} - edição {trilha.edicao}
                </MenuItem>
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
  );
};
