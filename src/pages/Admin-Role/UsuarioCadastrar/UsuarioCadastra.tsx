import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { adicionaUsuarioSchema } from "../../../utils/schemas";
import { IUser } from "../../../types/user";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { ButtonPrimary, ButtonSecondary } from "../../../components/Buttons/Button";
import Select from "@mui/material/Select";
import { ButtonWraper, ContentWrapper } from "../../../components/Styles/Container.styled";
import { ErrorMessage2, Titulo } from "../../../components/Styles/Component.styled";
import { UsersContext } from "../../../context/UserContext";

export const UsuarioCadastra = () => {
  const { createUser } = useContext(UsersContext);
  const [tipoDePerfil, setTipoDePerfil] = React.useState('');
  const [ newPicture, setNewPicture ] = useState<string>('');

  const { register, handleSubmit, control, formState: { errors } } = useForm<IUser>({
    resolver: yupResolver(adicionaUsuarioSchema),
  });

  return (
    <ContentWrapper>
      <Titulo>Cadastrar Usuário</Titulo>
      <form onSubmit={handleSubmit((data: IUser) => createUser(data))}>

        <TextField id="nome" label="Nome *" variant="outlined"
          sx={{ width: "300px", marginTop: "8%", backgroundColor: "white" }} {...register("nome")} size="small" />
        {errors.nome && <ErrorMessage2>{errors.nome.message}</ErrorMessage2>}

        <TextField id="login" label="Login *" variant="outlined"
          sx={{ width: "300px", marginTop: "5%", backgroundColor: "white" }} {...register("login")} size="small" />
        {errors.login && <ErrorMessage2>{errors.login.message}</ErrorMessage2>}

        <TextField id="email" label="E-mail *" variant="outlined" sx={{ width: "300px", marginTop: "5%", backgroundColor: "white" }} {...register("email")} size="small" />
        {errors.email && <ErrorMessage2>{errors.email.message}</ErrorMessage2>}

        <TextField id="senha" label="Senha *" variant="outlined" type='password' sx={{ width: "300px", marginTop: "5%", backgroundColor: "white" }} {...register("senha")} size="small" />
        {errors.senha && <ErrorMessage2>{errors.senha.message}</ErrorMessage2>}

        <TextField id="cidade" label="Cidade *" variant="outlined" sx={{ width: "300px", marginTop: "5%", backgroundColor: "white" }} {...register("cidade")} size="small" />
        {errors.cidade && <ErrorMessage2>{errors.cidade.message}</ErrorMessage2>}

        <FormControl sx={{ width: '300px', marginTop: "5%" }} fullWidth size="small" >
          <InputLabel id="label-tipo-perfil" >Tipo de Perfil *</InputLabel>
          <Controller
            name="tipoPerfil"
            control={control}
            render={({ field }) => {
              return (
                <Select
                  labelId="select-tipo-perfil-label"
                  id="tipoPerfil"
                  label="Tipo de Perfil"
                  {...field}
                  value={tipoDePerfil}
                  onChange={(newValue) => {
                    field.onChange(newValue)
                    setTipoDePerfil(newValue.target.value)
                  }}
                  sx={{ backgroundColor: "white" }}
                >
                  <MenuItem value={5}>Gestão de Pessoas</MenuItem>
                  <MenuItem value={1}>Coordenador</MenuItem>
                  <MenuItem value={3}>Instrutor</MenuItem>
                  <MenuItem value={2}>Aluno</MenuItem>
                </Select>
              )
            }}
          />
          {errors.tipoPerfil && <ErrorMessage2>{errors.tipoPerfil.message}</ErrorMessage2>}
        </FormControl>

        <TextField id="especialidade" label="Especialidade" variant="outlined" sx={{ width: "300px", marginBottom: "8%", marginTop: "5%", backgroundColor: "white" }} {...register("especialidade")} size="small" />
        {errors.especialidade && <ErrorMessage2>{errors.especialidade.message}</ErrorMessage2>}

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
  );
};
