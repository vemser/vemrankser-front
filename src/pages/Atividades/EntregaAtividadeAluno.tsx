import { Link, useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ButtonSecondary } from '../../components/Buttons/Button';
import { ButtonMenuLateral } from '../../components/Buttons/ButtonMenuLateral';
import { MenuLateral } from '../../components/MenuLateral/MenuLateral';
import { Titulo } from '../../components/Styles/Component.styled';
import TextField from '@mui/material/TextField';
import { SimpleCardAtividades, SimpleCardAtividadesEntrega, SimpleCardContainer,SimpleCardContentAtividade, SimpleCardContentAtividadeEntrega, SimpleCardWrapper } from '../../components/Styles/SimpleCard';
import { HiAcademicCap, HiBookOpen, HiChartPie, HiCog, HiUser } from 'react-icons/hi';
import { AtividadeContext } from '../../context/AtividadesContext';
import { ComentarioContext } from '../../context/ComentarioContext';
import { ButtonCorrigir } from '../../components/Buttons/ButtonCorrigir';

export const EntregaAtividade = () => {
 const [nota, setNota] = useState<number>()
  const [link, setLink] = useState<string>('')
  const [comentario] = useState<string>('')
  const {avaliar, entregar} = useContext(AtividadeContext)
  const { criaComentario } = useContext(ComentarioContext)
  const {idAtividade} = useParams()
  
  const canCorrigirAtividade = idAtividade&&nota&&link&&comentario
  const corrigiAtividade = () =>{
    if(!canCorrigirAtividade) return
     avaliar(parseInt(idAtividade), nota)
     entregar(parseInt(idAtividade), link)
     criaComentario(parseInt(idAtividade),comentario)
  }
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
          Entrega atividade
        </Titulo>

        <div className='flex'>
        </div>
        <SimpleCardWrapper>
           <SimpleCardAtividadesEntrega>
            <SimpleCardContentAtividadeEntrega>
              <p className='date-info'><span>
                </span></p>
              <p><span>Link da Atividade:</span></p>
              <TextField
            id="link-atividade-feita-aluno"
            value={link}
            onChange={(e)=>setLink(e.target.value)}
            label="Link"
            variant="outlined"
            sx={{
              width: '100%',
              marginTop: "-2%",
              marginBottom: "2%",
              backgroundColor: "white",
            }}
            size="small"
          />
            </SimpleCardContentAtividadeEntrega> 
          </SimpleCardAtividadesEntrega> 
          <ButtonCorrigir type={'button'} label={'Entregar'}  id={'botao-envia-atividade-aluno'}/>
           <Link to='/atividades/aluno'>
            <ButtonSecondary
              label="Voltar"
              id="button-volta-mural-atividade-aluno"
              type="submit"
            />
            </Link>
          </SimpleCardWrapper>
          </section>
        </SimpleCardContainer>
  )
}
