import {
  AlunoContainer,
  AlunoContainerWrapper,
  BarraDePesquisa,
  TableContainer,
  TituloPagina,
} from "./Aluno.styled";
import { MenuLateral } from "../../components/MenuLateral/MenuLateral";
import { ButtonMenuLateral } from "../../components/ButtonMenuLateral/ButtonMenuLateral";
import {
  HiUser,
  HiChartPie,
  HiAcademicCap,
  HiBookOpen,
  HiCog,
} from "react-icons/hi";
// import { BarraPesquisa } from "../../components/BarraPesquisa/BarraPesquisa";
import { ButtonPrimary } from "../../components/Buttons/Button";
import TableTeste from "../../components/Tabela/Tabela";
import TableAluno from "../../components/Tabela/Tabela";
import SelectVariants from "../../components/Select/Select";
import BasicSelect from "../../components/Select/Select";
import { Link } from "react-router-dom";
import SearchAppBar from "../../components/BarraPesquisa/BarraPesquisa";

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
          <SearchAppBar />
        </BarraDePesquisa>
        <TituloPagina>
            <h1>Alunos</h1>
           <div className='select'>
           <BasicSelect />
           </div>
            <div>
                <p>1,2,3,4,5,6</p> 
            </div>
            <Link to="/cadastraAluno">
            <ButtonPrimary label={"diconar"} id={"teste"} type={'button'}/>
            </Link>
            
        </TituloPagina>
        <TableContainer>
             <TableAluno />
        </TableContainer>
      </AlunoContainerWrapper>
    </AlunoContainer>
  );
};
