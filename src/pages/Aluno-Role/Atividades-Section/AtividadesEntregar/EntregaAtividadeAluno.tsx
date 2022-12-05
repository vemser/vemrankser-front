import { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthContext';
import { ButtonSecondary } from '../../../../components/Buttons/Button';
import { Titulo } from '../../../../components/Styles/Component.styled';
import TextField from '@mui/material/TextField';
import { SimpleCardContainer, SimpleCardWrapper } from '../../../../components/Styles/SimpleCard';
import { AtividadeContext } from '../../../../context/AtividadesContext';
import { ButtonCorrigir } from '../../../../components/Buttons/ButtonCorrigir';
import { SimpleCardAtividadesEntrega, SimpleCardContentAtividadeEntrega } from '../../Styles/Atividades.styled';

export const EntregaAtividade = () => {
  const [link, setLink] = useState<string>('');
  const { entregar } = useContext(AtividadeContext);
  const { idAtividade } = useParams();
  const { usuario } = useContext(AuthContext);

  const canCorrigirAtividade = idAtividade && link && usuario.idUsuario
  const corrigiAtividade = () => {
    if (!canCorrigirAtividade) return
    entregar(parseInt(idAtividade), link, usuario.idUsuario)
  }

  return (
    <SimpleCardContainer>
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
                onChange={(e) => setLink(e.target.value)}
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
          <ButtonCorrigir type={'button'} onClick={corrigiAtividade} label={'Entregar'} id={'botao-envia-atividade-aluno'} />
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
