import Pagination from '@mui/material/Pagination';
import { useContext, useEffect, useMemo } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { ButtonPrimary, ButtonSecondary } from '../../../../components/Buttons/Button';
import { ButtonCardContainer, ButtonCardWrapper } from '../../../../components/Styles/ButtonCard';
import { Titulo } from '../../../../components/Styles/Component.styled';
import { ComentarioContext } from '../../../../context/ComentarioContext';
import { IComentario } from '../../../../types/comentario';
import { ButtonCardContentVisualiza, ButtonCardDashboardFeedback } from '../../Styles/Dashboard.styled';

export const FeedbackPontosInstrutor = () => {
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
                        Vizualiza Feedback
                    </Titulo>
                    <div className="flex">
                        <Link to={"/instrutor/dashboard/feedback"}>
                            <ButtonSecondary
                                label={'voltar'}
                                type={'button'}
                                id={'botao-feedback-volta-dashboard'}
                            />
                        </Link>
                    </div>
                    <ButtonCardWrapper>
                        <p><strong>Pontos Positivos</strong></p>

                        {comentarios && comentarios.filter((comentario: IComentario) =>
                            comentario.statusComentario === 1
                        )
                            .map((comentario: IComentario) =>
                                <ButtonCardDashboardFeedback key={comentario.idComentario} >
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
                                <ButtonCardDashboardFeedback key={comentario.idComentario} >
                                    <ButtonCardContentVisualiza >
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
