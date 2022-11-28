import { ButtonMenuLateral } from '../../components/ButtonMenuLateral/ButtonMenuLateral'
import { MenuLateral } from '../../components/MenuLateral/MenuLateral'
import { HiAcademicCap, HiBookOpen, HiChartPie, HiCog, HiUser } from 'react-icons/hi'

export const AtividadesCriar = () => {
  return (
    <>
    <MenuLateral
        nomeDoUsuario={"Luiza Valentini"}
        cargoDoUsuario={"ADMIN"}
        fotoDePerfil={""}
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
    </>
  )
}
