import { useContext, useState } from "react";
import { ButtonHandler, ButtonsCategorias, CargoDoUsuario, FotoDePerfil, LogOut, MenuLateralContainer, MenuLateralTitle, NomeDoUsuario } from "./MenuLateral.styled";
import { HiLogout, HiMenu } from "react-icons/hi";
import { IMenuLateral } from "../../types/menuLateral";
import photoDummy from '../../assets/teste.jpg';
import { IoRocketOutline } from "react-icons/io5";
import { AuthContext } from "../../context/AuthContext";

export const MenuLateral = ({ cargoDoUsuario, nomeDoUsuario, children, fotoDePerfil }: IMenuLateral) => {
  let [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { handleLogout } = useContext(AuthContext);

  return (
    <>
      <ButtonHandler onClick={()=> menuOpen === true ? setMenuOpen(false) : setMenuOpen(true)}>
       <i><HiMenu size={36} color={'var(--cor-secundaria)'} /></i>
      </ButtonHandler>
      <MenuLateralContainer mobileOpen = {menuOpen}>
        <MenuLateralTitle id='menu-lateral-logo'>
          VemRankSer
          <i><IoRocketOutline id='login-icone' className='floating' /></i>
        </MenuLateralTitle>
        <FotoDePerfil id='menu-lateral-imagem-perfil'>{fotoDePerfil}
          <img src={photoDummy} alt="Foto do usuário" /></FotoDePerfil>
        <NomeDoUsuario id='menu-lateral-nome-usuario'>{nomeDoUsuario}</NomeDoUsuario>
        <CargoDoUsuario id='menu-lateral-cargo-usuario'>{cargoDoUsuario}</CargoDoUsuario>
        <ButtonsCategorias>{children}</ButtonsCategorias>
        <LogOut onClick={handleLogout}>
          <p id='menu-lateral-log-out'>Sair da conta</p>
          <HiLogout id='menu-lateral-log-out-icone' color="var(--cor-texto)" size={"20px"} />
        </LogOut>
      </MenuLateralContainer>
    </>
  );
};
