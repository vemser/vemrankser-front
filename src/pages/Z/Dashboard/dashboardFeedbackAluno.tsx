import { useContext, useEffect, useMemo } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { ButtonSecondary } from '../../components/Buttons/Button';
import { ButtonCardContainer, ButtonCardWrapper } from '../../components/Styles/ButtonCard';
import { Titulo } from '../../components/Styles/Component.styled';
import { ComentarioContext } from '../../context/ComentarioContext';
import { IComentario } from '../../types/comentario';
import { ButtonCardContentVisualiza, ButtonCardDashboardFeedback } from './Dashboard.styled';

export const DashBoardFeedbackAluno = () => {
  const { idUsuario } = useParams()
  const { getComentariosAlunos, comentarios, totalPages } = useContext(ComentarioContext)
  const [searchParam, setSearchParam] = useSearchParams();

  const pagina = useMemo(() => {
    return Number(searchParam.get("pagina") || "1")
  }, [searchParam])

  useEffect(() => {
    if (idUsuario) {
      getComentariosAlunos(parseInt(idUsuario), pagina)
    }
  }, [idUsuario, pagina])

  return (
    <>
      <ButtonCardContainer>
        <section>
          <Titulo>
            Vizualiza Feedback aluno
          </Titulo>
          <div className="flex">
            <Link to={'/dashboard/aluno'}>
              <ButtonSecondary
                label={'voltar'}
                type={'button'}
                id={'bota-feedback-aluno-volta-dashboard'}
              />
            </Link>
          </div>
          <ButtonCardWrapper>
            <p><strong>Pontos Positivos</strong></p>
            {comentarios && comentarios.filter((comentario: IComentario) =>
              comentario.statusComentario === 1
            )
              .map((comentario: IComentario) =>
                <ButtonCardDashboardFeedback>
                  <ButtonCardContentVisualiza>
                    {comentario.comentario}
                  </ButtonCardContentVisualiza>
                </ButtonCardDashboardFeedback>
              )}
            <p><strong>Pontos Negativos</strong></p>
            {comentarios && comentarios.filter((comentario: IComentario) =>
              comentario.statusComentario === 2
            )
              .map((comentario: IComentario) =>
                <ButtonCardDashboardFeedback>
                  <ButtonCardContentVisualiza>
                    {comentario.comentario}
                  </ButtonCardContentVisualiza>
                </ButtonCardDashboardFeedback>
              )}
          </ButtonCardWrapper>
          <Pagination count={totalPages} page={pagina} onChange={(e, newPage) => setSearchParam({ pagina: newPage.toString() }, { replace: true })} color="primary" />
        </section>
      </ButtonCardContainer>
    </>
  )
}
