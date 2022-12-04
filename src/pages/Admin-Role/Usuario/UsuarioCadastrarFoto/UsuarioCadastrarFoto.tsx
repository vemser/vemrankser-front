import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UsersContext } from "../../../../context/UserContext";
import { ButtonPrimary, ButtonSecondary } from "../../../../components/Buttons/Button";
import { ButtonWraper, ContentWrapper } from "../../../../components/Styles/Container.styled";
import { Titulo } from "../../../../components/Styles/Component.styled";
import { Avatar, Box, Typography } from "@mui/material";
import userDummy from '../../../../assets/user.webp';
import { api } from "../../../../utils/api";
import { toast } from "react-toastify";
import { toastConfig } from "../../../../types/toast";
import nProgress from "nprogress";
import { ImageWrapper } from "../../Styles/Usuario.styled";

export const UsuarioCadastrarFoto = () => {
  const { state } = useLocation();
  const [selectedImage, setSelectedImage] = useState<any>();
  const { getPhoto, photo } = useContext(UsersContext);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

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

  useEffect(() => {
    getPhoto(state.idUsuario);
  }, [])

  return (
    <ContentWrapper>
      <Titulo>Adicionar foto à {state.nome}</Titulo>
      <form>

        {selectedImage ?
          (<>
            <Typography fontSize={'0.9rem'} textTransform='uppercase' fontFamily='Inter' color={'var(--cor-primaria)'} fontWeight={700} sx={{ marginTop: '8%', marginBottom: '10px', userSelect: 'none' }}> Nova Foto </Typography>
            <Avatar
              alt={`Foto de ${state.nome}`}
              src={URL.createObjectURL(selectedImage)}
              sx={{ width: 120, height: 120 }}
            />
          </>) :
          (<>
            <Typography fontSize={'0.9rem'} textTransform='uppercase' fontFamily='Inter' color={'var(--cor-secundaria)'} fontWeight={700} sx={{ marginTop: '8%', marginBottom: '10px', userSelect: 'none' }}> Foto Atual </Typography>
            <Avatar
              alt={`Foto de ${state.nome}`}
              src={photo !== null || '' ? `data:image/jpg;base64,${photo}` : userDummy}
              sx={{ width: 120, height: 120 }}
            />
          </>)
        }

        <Box sx={{ marginTop: '8%', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '8%' }}>
          <ImageWrapper>
            <label htmlFor="file">
              Selecione um arquivo
            </label>
            <input
              type="file"
              accept="image/*"
              id='file'
              name='file'
              onChange={imageChange}
            />
          </ImageWrapper>
        </Box>

        {/* {selectedImage ?
          (<>
            <Typography fontSize={'0.9rem'} textTransform='uppercase' fontFamily='Inter' fontWeight={600} sx={{ marginTop: '8%', marginBottom: '5px', userSelect: 'none' }}> Foto Atual </Typography>
            <Avatar
              alt={`Foto de ${state.nome}`}
              src={selectedImage !== null || '' ? `${selectedImage}` : userDummy}
              sx={{ width: 120, height: 120 }}
          
            />
          </>) : ''} */}

        <ButtonWraper>
          <ButtonPrimary
            label="Salvar"
            id="button-edita-usuario"
            type="button"
            onClick={() => { addImage(imagemAPI) }}
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
  )
};
