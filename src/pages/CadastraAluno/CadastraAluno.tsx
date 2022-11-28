import { HiAcademicCap, HiBookOpen, HiChartPie, HiCog, HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ButtonMenuLateral } from "../../components/ButtonMenuLateral/ButtonMenuLateral";
import { ButtonPrimary } from "../../components/Buttons/Button";
import { Input } from "../../components/Inputs/Input";
import { MenuLateral } from "../../components/MenuLateral/MenuLateral";
import { EditaAlunoContainer } from "../EditaAluno/EditaAluno.styled";

export const CadastraAluno = () => {
  return (
    <>
      <EditaAlunoContainer>
      <MenuLateral
        nomeDoUsuario={"Luiza Valentini"}
        cargoDoUsuario={"ADMIN"}
        fotoDePerfil={"TESTE"}
      >
        <ButtonMenuLateral
          text={"Dashboard"}
          icone={<HiChartPie />}
          link={"/dashboard"}
        />
        <ButtonMenuLateral
          text={"Alunos"}
          icone={<HiAcademicCap />}
          link={"/alunos"}
        />
        <ButtonMenuLateral
          text={"Atividades"}
          icone={<HiBookOpen />}
          link={"/atividades"}
        />
        <ButtonMenuLateral
          text={"Perfil"}
          icone={<HiUser />}
          link={"/perfil"}
        />
        <ButtonMenuLateral
          text={"Configurações"}
          icone={<HiCog />}
          link={"/configurações"}
        />
      </MenuLateral>
      </EditaAlunoContainer>
    </>
  );
};
