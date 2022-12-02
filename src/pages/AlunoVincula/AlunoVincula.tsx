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

  const handleChange = (event: SelectChangeEvent<typeof trilha>) => {
    const {
      target: { value },
    } = event;
    setTrilha((trilhaValue) => {
      return [...trilhaValue, Number(value)]
    });
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

            <select {...register("idTrilha")} style={{ width: 400, height: 100 }} multiple name="idTrilha" id="idTrilha">
              {trilhas.map((trilha: ITrilha) =>
                <option key={trilha.idTrilha} value={trilha.idTrilha}>
                  {trilha.nome} - edição {trilha.edicao}
                </option>
              )}
            </select>
            {errors.idTrilha && <ErrorMessage>{errors.idTrilha.message}</ErrorMessage>}

            {/* <FormControl
              sx={{
                width: "100%",
                marginBottom: "8%",
                backgroundColor: "white",
              }}
              fullWidth
              size="small"
            >
              <InputLabel id="vincula-aluno-trilha" >
                Trilha
              </InputLabel>
              <Controller
                name="idTrilha"
                control={control}
                render={({ field }) => {
                  return (
                    <Select
                      labelId="select-vincula-aluno-trilha"
                      id="idTrilha"
                      label="Trilha"
                      multiple
                      {...field}
                      value={trilha}
                      input={<OutlinedInput label="Name" />}
                      onChange={(newValue) => {
                        field.onChange(newValue)
                        handleChange(newValue)
                      }}
                      sx={{ backgroundColor: "white" }}
                    >
                      {trilhas.map((trilha: ITrilha) =>
                        <MenuItem key={trilha.idTrilha} value={trilha.idTrilha}>
                          {trilha.nome} - edição {trilha.edicao}
                        </MenuItem>
                      )}
                    </Select>
                  )
                }}
              />
            {errors.idTrilha && <ErrorMessage>{errors.idTrilha.message}</ErrorMessage>}
            </FormControl> */}

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
