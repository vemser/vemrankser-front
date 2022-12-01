import { HiAcademicCap, HiBookOpen, HiChartPie, HiCog, HiUser } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { ButtonPrimary, ButtonSecondary } from '../../components/Buttons/Button';
import { ButtonMenuLateral } from '../../components/Buttons/ButtonMenuLateral';
import { MenuLateral } from '../../components/MenuLateral/MenuLateral';
import { ErrorMessage, Titulo } from '../../components/Styles/Component.styled';
import { SimpleCardAtividades, SimpleCardContainer,SimpleCardContentAtividade, SimpleCardWrapper } from '../../components/Styles/SimpleCard';
import userDummy from '../../assets/user.png';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { IDetalheAtividade } from '../../types/detalheAtividade';
import { yupResolver } from '@hookform/resolvers/yup';
import { detalhesNotasSchema } from '../../utils/schemas';

export const AtividadesDetalhesNotas = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDetalheAtividade>({
    resolver: yupResolver(detalhesNotasSchema),
  });
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
            label="Nota"
            variant="outlined"
            sx={{
              width: '150px',
              marginBottom: "2%",
              marginTop: "-2%",
              backgroundColor: "white",
            }}
            {...register("nota")}
            size="small"
          />
            {errors.nota && <ErrorMessage>{errors.nota.message}</ErrorMessage>}
                </span></p>
              <p><span>Link da Atividade:</span></p>
              <TextField
            id="titulo-cadastra-atividade"
            label="Link"
            variant="outlined"
            sx={{
              width: '100%',
              marginTop: "-2%",
              marginBottom: "2%",
              backgroundColor: "white",
            }}
            {...register("link")}
            size="small"
          />
            {errors.link && <ErrorMessage>{errors.link.message}</ErrorMessage>}
            <p><span>Comentário:</span></p>
          <TextField
            id="descricao-cadastra-atividade"
            label="Comentários"
            multiline
            rows={6}
            variant="outlined"
            sx={{ width: '100%', marginBottom: "2%",  marginTop: "-2%",backgroundColor: "white" }}
          />

            </SimpleCardContentAtividade> 
          
          </SimpleCardAtividades> 
          <Link to={'atividades/notas'}><ButtonPrimary type={'button'} id={'botao-nova-atividade'} label={'Corrigir'} /></Link>
           
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
