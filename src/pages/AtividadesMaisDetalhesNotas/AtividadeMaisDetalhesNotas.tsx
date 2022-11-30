import { HiAcademicCap, HiBookOpen, HiChartPie, HiCog, HiUser } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { ButtonPrimary } from '../../components/Buttons/Button';
import { ButtonMenuLateral } from '../../components/Buttons/ButtonMenuLateral';
import { MenuLateral } from '../../components/MenuLateral/MenuLateral';
import { Titulo } from '../../components/Styles/Component.styled';
import { SimpleCard, SimpleCardAtividades, SimpleCardContainer, SimpleCardContent, SimpleCardWrapper } from '../../components/Styles/SimpleCard';
import userDummy from '../../assets/user.png';
import TextField from '@mui/material/TextField';

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
              id="button-volta-mural-notas"
              type="submit"
            />
            </Link>
        </div>
        <SimpleCardWrapper>
           <SimpleCardAtividades>
            <img src={userDummy} alt="Foto" />
            <SimpleCardContent>
              <p><span>Aluno 1</span></p>
              <p className='date-info'><span>____/100</span></p>
              <p><span>Link da Atividade:</span></p>
              <div className='textarea-link'>
                 <p>Link</p>
              </div>
         <p><span>Commentários:</span></p>
            <div className='textarea-comentário'>
               <p>Melhorar</p>
            </div>
            </SimpleCardContent>
          </SimpleCardAtividades>
          </SimpleCardWrapper>
          </section>
        </SimpleCardContainer>
  )
}
