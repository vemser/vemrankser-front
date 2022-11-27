import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/schemas";
import { IUser } from "../../types/user";
import {
  LoginContainer,
  LoginFormContainer,
  LoginSubtitle,
  LoginTitle,
  LogoContainer,
} from "./Login.styled";
import { ButtonPrimary } from "../../components/Buttons/Button";
import { Input } from "../../components/Inputs/Input";
import { IoRocketOutline } from "react-icons/io5";
import LogoLogin from "../../assets/logo.png";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(loginSchema),
  });

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

        <form>
          <Input id="login-input-email" label="Email" {...register("login")} />
          {errors.login && <span>{errors.login.message}</span>}

          <Input id="login-input-senha" label="Senha" {...register("senha")} />
          {errors.senha && <span>{errors.senha.message}</span>}

          <ButtonPrimary type="submit" id="login-botao-entrar" label="Entrar" />
        </form>
      </LoginFormContainer>
    </LoginContainer>
  );
};
