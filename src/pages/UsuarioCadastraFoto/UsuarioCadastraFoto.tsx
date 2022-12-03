import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { adicionaFotoSchema, editaUsuarioSchema } from "../../utils/schemas";
import { IUser, IUserPhoto } from "../../types/user";
import { ButtonPrimary, ButtonSecondary } from "../../components/Buttons/Button";
import { ButtonWraper, ContentWrapper } from "../../components/Styles/Container.styled";
import { ErrorMessage2, Titulo } from "../../components/Styles/Component.styled";
import { UsersContext } from "../../context/UserContext";
import { Avatar, Box, Typography } from "@mui/material";

export const UsuarioCadastraFoto = () => {
  const { addImage } = useContext(UsersContext);
  const { state } = useLocation();
  const { register, handleSubmit, formState: { errors } } = useForm<IUserPhoto>({
    resolver: yupResolver(adicionaFotoSchema),
  });

  return (
    <ContentWrapper>
      <Titulo>Editar Usuário</Titulo>
      <form onSubmit={handleSubmit((data: IUserPhoto) => addImage(data))}>

        <Box sx={{ marginTop: '8%', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '5%' }}>
        <Typography fontSize={'1.2rem'} fontFamily='Inter' fontWeight={500}> Foto Atual </Typography>
          <Avatar
            alt="Remy Sharp"
            src={`data:image/jpeg;base64,${state.foto}`}
            sx={{ width: 160, height: 160 }}
          />
        </Box>

        <input
          type="file"
          accept="image/*"
          id='foto'
        />
        {errors.foto && <ErrorMessage2>{errors.foto.message}</ErrorMessage2>}

        <div style={{ display: 'none' }}>
          <input type="text" id="idUsuario" {...register("idUsuario")} defaultValue={state.idUsuario} />
        </div>

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
