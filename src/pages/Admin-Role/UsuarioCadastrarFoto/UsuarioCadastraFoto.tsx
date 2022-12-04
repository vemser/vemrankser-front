import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { adicionaFotoSchema } from "../../../utils/schemas";
import { IUserPhoto } from "../../../types/user";
import { ButtonPrimary, ButtonSecondary } from "../../../components/Buttons/Button";
import { ButtonWraper, ContentWrapper } from "../../../components/Styles/Container.styled";
import { ErrorMessage2, Titulo } from "../../../components/Styles/Component.styled";
import { UsersContext } from "../../../context/UserContext";
import { Avatar, Box, Typography } from "@mui/material";
import userDummy from '../../../assets/user.webp';
import { api } from "../../../utils/api";
import { toast } from "react-toastify";
import { toastConfig } from "../../../types/toast";
import nProgress from "nprogress";

export const UsuarioCadastraFoto = () => {
  const { state } = useLocation();
  const [selectedImage, setSelectedImage] = useState<any>();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<IUserPhoto>({
    resolver: yupResolver(adicionaFotoSchema),
  });

  const addImage = async (file: FormData) => {
    try {
      nProgress.start();
      api.defaults.headers.common['Authorization'] = token;

      await api.put(`/usuario/upload-imagem/${state.idUsuario}`, file);
      
      toast.success('Foto adicionada com sucesso!', toastConfig);
      navigate('/usuarios');
    } catch (error) {
      toast.error('Houve algum erro, por favor verifique os dados e tente novamente', toastConfig);
      console.log(error);
    } finally {
      nProgress.done();
    }
  }

  const imageChange = (e: any): void => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const imagemAPI = new FormData();
  if (selectedImage) {
    imagemAPI.append("file", selectedImage)
  }


  return (
    <ContentWrapper>
      <Titulo>Adicionar foto à {state.nome}</Titulo>
      <form>

        {/* <Typography fontSize={'1.2rem'} fontFamily='Inter' fontWeight={500}> Foto Atual </Typography>
          <Avatar
            alt="Remy Sharp"
            src={state.foto !== null && 'foto' ? `data:image/jpg;base64,${state.foto}` : userDummy}
            sx={{ width: 160, height: 160 }}
          /> */}

        <Box sx={{ marginTop: '8%', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '5%' }}>
          <input
            type="file"
            accept="image/*"
            id='foto'
            onChange={imageChange}
          />
          {errors.foto && <ErrorMessage2>{errors.foto.message}</ErrorMessage2>}
        </Box>

        {/* <div style={{ display: 'none' }}>
          <input type="text" id="idUsuario" {...register("idUsuario")} defaultValue={state.idUsuario} />
        </div> */}

        <ButtonWraper>
          <button type="button" onClick={() => addImage(imagemAPI)}>Enviar</button>
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
