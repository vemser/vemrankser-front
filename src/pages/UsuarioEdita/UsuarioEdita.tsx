import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editaUsuarioSchema } from "../../utils/schemas";
import { IUser } from "../../types/user";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { ButtonMenuLateral } from "../../components/Buttons/ButtonMenuLateral";
import { ButtonPrimary, ButtonSecondary } from "../../components/Buttons/Button";
import { MenuLateral } from "../../components/MenuLateral/MenuLateral";
import { HiAcademicCap, HiBookOpen, HiChartPie, HiCog, HiUser, HiUsers } from "react-icons/hi";
import { ButtonWraper, ContentWrapper, MainContainer } from "../../components/Styles/Container.styled";
import { ErrorMessage2, Titulo } from "../../components/Styles/Component.styled";
import { UsersContext } from "../../context/UserContext";

export const UsuarioEdita = () => {
  const { editUser } = useContext(UsersContext);
  const { state } = useLocation();
  const { register, handleSubmit, formState: { errors } } = useForm<IUser>({
    resolver: yupResolver(editaUsuarioSchema),
  });

  return (
    <ContentWrapper>
      <Titulo>Editar Usuário</Titulo>
      <form onSubmit={handleSubmit((data: IUser) => editUser(data))}>

        <TextField id="nome" label="Nome *" variant="outlined"
          sx={{ width: "300px", marginTop: "10%", backgroundColor: "white" }} defaultValue={state.nome} {...register("nome")} size="small" />
        {errors.nome && <ErrorMessage2>{errors.nome.message}</ErrorMessage2>}

        <TextField id="login" label="Login *" variant="outlined"
          sx={{ width: "300px", marginTop: "5%", backgroundColor: "white" }} defaultValue={state.login} {...register("login")} size="small" />
        {errors.login && <ErrorMessage2>{errors.login.message}</ErrorMessage2>}

        <TextField id="email" label="E-mail *" variant="outlined" sx={{ width: "300px", marginTop: "5%", backgroundColor: "white" }} {...register("email")} defaultValue={state.email} size="small" />
        {errors.email && <ErrorMessage2>{errors.email.message}</ErrorMessage2>}

        <TextField id="cidade" label="Cidade *" variant="outlined" sx={{ width: "300px", marginTop: "5%", backgroundColor: "white" }} {...register("cidade")} defaultValue={state.cidade} size="small" />
        {errors.cidade && <ErrorMessage2>{errors.cidade.message}</ErrorMessage2>}

        <TextField id="especialidade" label="Especialidade" variant="outlined" sx={{ width: "300px", marginTop: "5%", marginBottom: "5%", backgroundColor: "white" }} {...register("especialidade")} defaultValue={state.especialidade} size="small" />
        {errors.especialidade && <ErrorMessage2>{errors.especialidade.message}</ErrorMessage2>}

        <div style={{ display: 'none' }}>
          <input type="text" id="idUsuario" {...register("idUsuario")} defaultValue={state.idUsuario} />
          <input type="text" id="senha" {...register("senha")} defaultValue={''} />
        </div>

        <FormControl>
          <RadioGroup
            sx={{ marginBottom: "10%" }}
            defaultValue={state.statusUsuario}
          >
            <FormControlLabel {...register("statusUsuario")} value={1} control={<Radio />} label="Ativo" />
            <FormControlLabel {...register("statusUsuario")} value={0} control={<Radio />} label="Inativo" />
          </RadioGroup>
        </FormControl>

        <ButtonWraper>
          <ButtonPrimary
            label="Salvar"
            id="button-edita-usuario"
            type="submit"
          />
          <Link to="/usuarios">
            <ButtonSecondary
              label="Cancelar"
              id="button-cancela-edicao-usuario"
              type="button"
            />
          </Link>
        </ButtonWraper>
      </form>
    </ContentWrapper>
  );
};
