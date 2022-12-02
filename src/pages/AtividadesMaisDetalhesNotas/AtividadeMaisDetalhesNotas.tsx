import { Link, useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ButtonSecondary } from '../../components/Buttons/Button';
import { ButtonMenuLateral } from '../../components/Buttons/ButtonMenuLateral';
import { MenuLateral } from '../../components/MenuLateral/MenuLateral';
import { Titulo } from '../../components/Styles/Component.styled';
import TextField from '@mui/material/TextField';
import { SimpleCardAtividades, SimpleCardContainer,SimpleCardContentAtividade, SimpleCardWrapper } from '../../components/Styles/SimpleCard';
import userDummy from '../../assets/user.png';
import { HiAcademicCap, HiBookOpen, HiChartPie, HiCog, HiUser } from 'react-icons/hi';
import { AtividadeContext } from '../../context/AtividadesContext';
import { ComentarioContext } from '../../context/ComentarioContext';
import { ButtonCorrigir } from '../../components/Buttons/ButtonCorrigir';

export const AtividadesDetalhesNotas = () => {
 const [nota, setNota] = useState<number>()
  const [link, setLink] = useState<string>('')
  const [comentario, setComentario] = useState<string>('')
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
          Detalhes Notas
        </Titulo>

        <div className='flex'>
        </div>
        <SimpleCardWrapper>
           <SimpleCardAtividades>
            <SimpleCardContentAtividade>
              <p><span>Aluno 1</span></p>
              <p className='date-info'><span>
              <TextField
            id="titulo-cadastra-atividade"
            value={nota}
            onChange={(e)=>setNota(parseInt(e.target.value))}
            label="Nota"
            variant="outlined"
            sx={{
              width: '150px',
              marginBottom: "2%",
              marginTop: "-2%",
              backgroundColor: "white",
            }}
            size="small"
          />
                </span></p>
              <p><span>Link da Atividade:</span></p>
              <TextField
            id="titulo-cadastra-atividade"
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
            <p><span>Comentário:</span></p>
          <TextField
            id="descricao-cadastra-atividade"
            value={comentario}
            onChange={(e)=>setComentario(e.target.value)}
            label="Comentários"
            multiline
            rows={6}
            variant="outlined"
            sx={{ width: '100%', marginBottom: "2%",  marginTop: "-2%",backgroundColor: "white" }}
          />
            </SimpleCardContentAtividade> 
          
          </SimpleCardAtividades> 
          <ButtonCorrigir type={'button'}label={'Corrigir'} onClick={corrigiAtividade} id={'button-corrigi-atividade'}/>
           <Link to='/atividades/notas'>
            <ButtonSecondary
              label="Voltar"
              id="button-volta-mural-notas"
              type="submit"
            />
            </Link>
          </SimpleCardWrapper>
          </section>
        </SimpleCardContainer>
  )
}
