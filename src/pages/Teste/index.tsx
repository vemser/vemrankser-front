import { ButtonMenuLateral } from "../../components/ButtonMenuLateral/ButtonMenuLateral";
import { HiUsers } from "react-icons/hi";
import { MenuLateral } from "../../components/MenuLateral/MenuLateral";

export const Teste = () => {
  return (
    <>
      <MenuLateral
        nomeDoUsuario={"Luiza Valentini"}
        cargoDoUsuario={"ADMIN"}
        fotoDePerfil={"TESTE"}
      >
        <ButtonMenuLateral
          text={"usuarios"}
          icone={<HiUsers />}
          link={"/teste"}
        />
          <ButtonMenuLateral
          text={"usuarios"}
          icone={<HiUsers />}
          link={"/teste"}
        />
          <ButtonMenuLateral
          text={"usuarios"}
          icone={<HiUsers />}
          link={"/teste"}
        />
          <ButtonMenuLateral
          text={"usuarios"}
          icone={<HiUsers />}
          link={"/teste"}
        />
      </MenuLateral>
    </>
  );
};
