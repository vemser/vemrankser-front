import { useContext, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { ButtonPrimary, ButtonSecondary } from "../../components/Buttons/Button"
import { ButtonCardContainer, ButtonCardContentVizualiza, ButtonCardDashboardFeedback, ButtonCardWrapper } from "../../components/Styles/ButtonCard"
import { Titulo } from "../../components/Styles/Component.styled"
import { ComentarioContext } from "../../context/ComentarioContext"
import { IComentario } from "../../types/comentario"

export const DashBoardFeedbackAluno = () => {
  const {idUsuario} = useParams()
  const {getComentariosAlunos, comentariosPositivos, comentariosNegativos} = useContext(ComentarioContext)

  useEffect(()=>{
    if(idUsuario){
      getComentariosAlunos(parseInt(idUsuario))
    }
  }, [idUsuario])

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
        {comentariosPositivos&&comentariosPositivos.map((comentario: IComentario)=>
         <ButtonCardDashboardFeedback>
            <ButtonCardContentVizualiza>
              {comentario.comentario}
            </ButtonCardContentVizualiza>
          </ButtonCardDashboardFeedback>
        )}
          <p><strong>Pontos Negativos</strong></p>
          {comentariosNegativos&&comentariosNegativos.map((comentario: IComentario)=>
         <ButtonCardDashboardFeedback>
            <ButtonCardContentVizualiza>
              {comentario.comentario}
            </ButtonCardContentVizualiza>
          </ButtonCardDashboardFeedback>
        )}
        </ButtonCardWrapper>
      </section>
    </ButtonCardContainer>
        </>

  )
}



