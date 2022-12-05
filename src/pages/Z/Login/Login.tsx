import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../utils/schemas';
import { IUserLogin } from '../../types/user';
import { LoginContainer, LoginFormContainer, LoginSubtitle, LoginTitle, LogoContainer } from './Login.styled';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { IoRocketOutline } from 'react-icons/io5';
import LogoLogin from '../../assets/logo.png';
import { TextField } from '@mui/material';
import { ErrorMessage } from '../../components/Styles/Component.styled';
import { ButtonLogin } from '../../components/Buttons/ButtonLogin';

export const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const token = localStorage.getItem('token');
  const { register, handleSubmit, formState: { errors } } = useForm<IUserLogin>({
    resolver: yupResolver(loginSchema),
  });

  if (token) {
    return <Navigate to='/dashboard' />
  }

  return (
    <LoginContainer>
      <LogoContainer>
        <img id="login-logo" src={LogoLogin} alt="Logo DBC" />
      </LogoContainer>

      <LoginFormContainer>
        <LoginTitle id="login-titulo">
          VemRankSer
          <i>
            <IoRocketOutline id="login-icone" className="floating" />
          </i>
        </LoginTitle>
        <LoginSubtitle id="login-subtitulo">Entre na sua conta</LoginSubtitle>

        <form onSubmit={handleSubmit(data => handleLogin(data))}>
          <TextField id="email" label="Email" variant="outlined" {...register("email")} sx={{ width: 300 }} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

          <TextField id="senha" label="Senha" variant="outlined" type="password" {...register("senha")} sx={{ width: 300 }} />
          {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}

          <ButtonLogin type='submit' id='botao-logar' label='Entrar' />
        </form>
      </LoginFormContainer>
    </LoginContainer>
  );
};