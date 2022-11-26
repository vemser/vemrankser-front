import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../utils/schemas';
import { LoginContainer, LoginFormContainer, LoginSubtitle, LoginTitle, LogoContainer } from './Login.styled';
import { ButtonPrimary } from '../../components/Buttons/Button';
import { Input } from '../../components/Inputs/Input';
import { IoRocketOutline } from 'react-icons/io5';
import LogoLogin from '../../assets/logo.png';

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IUser>({
    resolver: yupResolver(userFormSchema)
  });

  return (
    <LoginContainer>      
      <LogoContainer>
        <img id='login-logo' src={LogoLogin} alt="Logo DBC" />
      </LogoContainer>

      <LoginFormContainer>
        <LoginTitle id='login-titulo'>
          VemRankSer
          <i><IoRocketOutline id='login-icone' /></i>
         </LoginTitle>
        <LoginSubtitle id='login-subtitulo'>
          Entre na sua conta
        </LoginSubtitle>

        <form onSubmit={handleSubmit(data => handleLogin(data))>
        <Input id='login-input-email' label='Email' {...register("login")}/>
        <Input id='login-input-senha' label='Senha' />
        </form>

        <ButtonPrimary id='login-botao-entrar' label='Entrar' />
      </LoginFormContainer>
    </LoginContainer>
  )
}
