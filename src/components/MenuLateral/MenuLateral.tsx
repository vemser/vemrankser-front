import {
  ButtonsCategorias,
  CargoDoUsuario,
  FotoDePerfil,
  LogOut,
  MenuLateralContainer,
  MenuLateralTitle,
  NomeDoUsuario,
} from "./MenuLateral.styled";
import iconeLogo from "../../assets/icone-logo.svg";
import { HiLogout } from "react-icons/hi";
import { IMenuLateral } from "../../types/menuLateral";
import photoDummy from '../../assets/teste.jpg';

export const MenuLateral = ({
  cargoDoUsuario,
  nomeDoUsuario,
  children,
  fotoDePerfil,
}: IMenuLateral) => {
  return (
    <>
      <MenuLateralContainer>
        <MenuLateralTitle id='menu-lateral-logo'>
          VemRankSer
          <img id='menu-lateral-icone' src={iconeLogo} />
        </MenuLateralTitle>
        <FotoDePerfil id='menu-lateral-imagem-perfil'>{fotoDePerfil}
        <img src={photoDummy} alt="Foto do usuário" /></FotoDePerfil>
        <NomeDoUsuario id='menu-lateral-nome-usuario'>{nomeDoUsuario}</NomeDoUsuario>
        <CargoDoUsuario id='menu-lateral-cargo-usuario'>{cargoDoUsuario}</CargoDoUsuario>
        <ButtonsCategorias>{children}</ButtonsCategorias>
        <LogOut>
          <p id='menu-lateral-log-out'>LOG OUT</p>
          <HiLogout id='menu-lateral-log-out-icone' color="white" size={"20px"} />
        </LogOut>
      </MenuLateralContainer>
    </>
  );
};
