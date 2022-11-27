import {
  AlunoContainer,
  AlunoContainerWrapper,
  BarraDePesquisa,
  TableContainer,
  TituloPagina,
} from "./Aluno.styled";
import {
  HiUser,
  HiChartPie,
  HiAcademicCap,
  HiBookOpen,
  HiCog,
  HiSearch,
} from "react-icons/hi";
import { ButtonPrimary } from "../../components/Buttons/Button";
import TableAluno from "../../components/Tabela/Tabela";
import { MenuLateral } from "../../components/MenuLateral/MenuLateral";
import { ButtonMenuLateral } from "../../components/ButtonMenuLateral/ButtonMenuLateral";
import BasicSelect from "../../components/Select/SelectAluno";
import BarraPesquisa from "../../components/BarraPesquisa/BarraPesquisa";
import { Link } from "react-router-dom";
import SelectAluno from "../../components/Select/SelectAluno";

export const Aluno = () => {
  return (
    <AlunoContainer>
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
      <AlunoContainerWrapper>
        <BarraDePesquisa>
          <BarraPesquisa id={"barra-pesquisa-aluno"} label={"Search"} />
          <HiSearch size={"25px"} color={"grey"} />
        </BarraDePesquisa>
        <TituloPagina>
          <h1>Alunos</h1>
          <SelectAluno label={"Trilha"} id={"select-trilha-aluno"} />
          <Link to="/cadastraAluno">
            <ButtonPrimary
              label={"Adiconar Aluno"}
              id={"teste"}
              type={"button"}
            />
          </Link>
        </TituloPagina>
        <TableContainer>
          <TableAluno />
        </TableContainer>
      </AlunoContainerWrapper>
    </AlunoContainer>
  );
};
