import { useState } from "react";
import { ButtonHandler, ButtonsCategorias, CargoDoUsuario, FotoDePerfil, LogOut, MenuLateralContainer, MenuLateralTitle, NomeDoUsuario } from "./MenuLateral.styled";
import { HiLogout, HiMenu } from "react-icons/hi";
import { IMenuLateral } from "../../types/menuLateral";
import iconeLogo from "../../assets/icone-logo.svg";
import photoDummy from '../../assets/teste.jpg';

export const MenuLateral = ({ cargoDoUsuario, nomeDoUsuario, children, fotoDePerfil }: IMenuLateral) => {
  let [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <ButtonHandler onClick={()=> menuOpen === true ? setMenuOpen(false) : setMenuOpen(true)}>
       <i><HiMenu size={36} color={'var(--cor-secundaria)'} /></i>
      </ButtonHandler>
      <MenuLateralContainer mobileOpen = {menuOpen}>
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
          <p id='menu-lateral-log-out'>Sair da conta</p>
          <HiLogout id='menu-lateral-log-out-icone' color="var(--cor-texto)" size={"20px"} />
        </LogOut>
      </MenuLateralContainer>
    </>
  );
};
