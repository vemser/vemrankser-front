import { useContext, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { ButtonPrimary, ButtonSecondary } from "../../components/Buttons/Button"
import { ButtonCardContainer, ButtonCardContentVizualiza, ButtonCardDashboardFeedback, ButtonCardWrapper } from "../../components/Styles/ButtonCard"
import { Titulo } from "../../components/Styles/Component.styled"
import { ComentarioContext } from "../../context/ComentarioContext"
import { IComentario } from "../../types/comentario"

export const DashBoardVisualiza = () => {
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
          Vizualiza Feedback
        </Titulo>
        <div className="flex">
          <div>
            <Link to={`/dashboard/feedback/adiciona-pontos/${idUsuario}`}>
             <ButtonPrimary label={"Adicionar"} id={"botao-adiciona-feedback"} type={undefined} />
            </Link>
          </div>
          <Link to={"/dashboard/feedback"}>
           <ButtonSecondary 
              label={'voltar'}
              type={'button'}
              id={'botao-feedback-volta-dashboard'}
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



