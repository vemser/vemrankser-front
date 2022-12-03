import { Link, useParams } from "react-router-dom"
import { ButtonPrimary, ButtonSecondary } from "../../components/Buttons/Button"
import { ButtonCardContainer, ButtonCardContentVizualiza, ButtonCardDashboardFeedback, ButtonCardWrapper } from "../../components/Styles/ButtonCard"
import { Titulo } from "../../components/Styles/Component.styled"

export const DashBoardVisualiza = () => {
  const {idUsuario} = useParams()

  return (
    <>
    <ButtonCardContainer>
      <section>
        <Titulo>
          Vizualiza Feedback
        </Titulo>
        <div className="flex">
          <div>
            <Link to={"/dashboard/feedback/adiciona-pontos"}>
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
          <ButtonCardDashboardFeedback>
            <ButtonCardContentVizualiza>
              fff
            </ButtonCardContentVizualiza>
          </ButtonCardDashboardFeedback>
          <p><strong>Pontos Negativos</strong></p>
          <ButtonCardDashboardFeedback>
            <ButtonCardContentVizualiza>
              fff
            </ButtonCardContentVizualiza>
          </ButtonCardDashboardFeedback>
          
        </ButtonCardWrapper>
      </section>
    </ButtonCardContainer>
        </>

  )
}



