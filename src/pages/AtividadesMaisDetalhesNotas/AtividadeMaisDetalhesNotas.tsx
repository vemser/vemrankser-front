import { HiAcademicCap, HiBookOpen, HiChartPie, HiCog, HiUser } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { ButtonPrimary } from '../../components/Buttons/Button';
import { ButtonMenuLateral } from '../../components/Buttons/ButtonMenuLateral';
import { MenuLateral } from '../../components/MenuLateral/MenuLateral';
import { Titulo } from '../../components/Styles/Component.styled';
import { SimpleCard, SimpleCardContainer, SimpleCardContent, SimpleCardWrapper } from '../../components/Styles/SimpleCard';
import userDummy from '../../assets/user.png';

export const AtividadesDetalhesNotas = () => {
  return (
    <SimpleCardContainer>
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
    <section>
        <Titulo>
          Detalhes Notas
        </Titulo>

        <div className='flex'>
            <Link to='/atividades/notas'>
            <ButtonPrimary
              label="Voltar"
              id="button-edita-aluno"
              type="submit"
            />
            </Link>
          
        </div>
        <SimpleCardWrapper>
           <SimpleCard>
            <img src={userDummy} alt="Foto" />
            <SimpleCardContent>
              <p><span>Aluno 1</span></p>
              <p className='date-info'><span>____/100</span></p>
            </SimpleCardContent>
          </SimpleCard>
          </SimpleCardWrapper>
          </section>
        </SimpleCardContainer>
  )
}
