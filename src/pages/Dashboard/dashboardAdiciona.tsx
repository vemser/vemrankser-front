import { TextareaAutosize } from '@mui/material';
import { ChangeEvent, useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ButtonPrimary, ButtonSecondary } from '../../components/Buttons/Button';
import { ButtonCardContainer, ButtonCardWrapper } from '../../components/Styles/ButtonCard';
import { Titulo } from '../../components/Styles/Component.styled';
import { ComentarioContext } from '../../context/ComentarioContext';

export const DashBoardAdiciona = () => {
  const { idUsuario } = useParams()
  const { criaFeedbackAlunos } = useContext(ComentarioContext)
  const [comentarioPositivo, setComentarioPositivo] = useState<string>('')
  const [comentarioNegativo, setComentarioNegativo] = useState<string>('')

  const handleChangeComentarioPositivo = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComentarioPositivo(event.target.value as string);
  };
  const handleChangeComentarioNegativo = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComentarioNegativo(event.target.value as string);
  };
  const criaFeedbacks = () => {
    if (!idUsuario) return
    if (comentarioPositivo) criaFeedbackAlunos(parseInt(idUsuario), 1, comentarioPositivo)
    if (comentarioNegativo) criaFeedbackAlunos(parseInt(idUsuario), 2, comentarioNegativo)
  };

  return (
    <>
      <ButtonCardContainer>
        <section>
          <Titulo>
            Adiciona Feedback
          </Titulo>
          <div className="flex">
            <div>
              <Link to={`/dashboard/feedback/visualiza-pontos/${idUsuario}`}>
                <ButtonPrimary onClick={criaFeedbacks} label={"Salvar"} id={"botao-feedabck-volta-salva-feedback"} type={undefined} />
              </Link>
            </div>
            <Link to={"/dashboard/feedback"}>
              <ButtonSecondary
                label={'voltar'}
                type={'button'}
                id={'botao-feedabck-volta-pagina-feedback'}
              />
            </Link>
          </div>
          <ButtonCardWrapper>
            <p><strong>Pontos Positivos</strong></p>
            <TextareaAutosize
              value={comentarioPositivo}
              onChange={handleChangeComentarioPositivo}
              aria-label="Feedback Positivo..."
              minRows={3}
              placeholder="Minimum 3 rows"
              style={{ width: '500px', marginBottom: "5%", backgroundColor: "white", height: 200, borderRadius: 5, border: 'solid', borderColor: 'light-grey', padding: 10 }}
            />
            <p><strong>Pontos Negativos</strong></p>
            <TextareaAutosize
              value={comentarioNegativo}
              onChange={handleChangeComentarioNegativo}
              aria-label="Feedback Negvativo..."
              minRows={3}
              placeholder="Minimum 3 rows"
              style={{ width: '500px', marginBottom: "5%", backgroundColor: "white", height: 200, borderRadius: 5, border: 'solid', borderColor: 'light-grey', padding: 10 }}
            />
          </ButtonCardWrapper>
        </section>
      </ButtonCardContainer>
    </>
  )
}
