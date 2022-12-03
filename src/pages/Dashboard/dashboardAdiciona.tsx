import { TextareaAutosize } from "@mui/material"
import { Link } from "react-router-dom"
import { ButtonPrimary, ButtonSecondary } from "../../components/Buttons/Button"
import { ButtonCardContainer, ButtonCardContent, ButtonCardContentVizualiza, ButtonCardDashboardFeedback, ButtonCardWrapper } from "../../components/Styles/ButtonCard"
import { Titulo } from "../../components/Styles/Component.styled"

export const DashBoardAdiciona = () => {
  

  return (
    <>
    <ButtonCardContainer>
      <section>
        <Titulo>
         Adiciona Feedback
        </Titulo>
        <div className="flex">
          <div>
            <Link to={"/dashboard/feedback/visualiza-pontos/:idUsuario"}>
             <ButtonPrimary label={"Salvar"} id={""} type={undefined} />
            </Link>
          </div>
          <Link to={"/dashboard/feedback"}>
           <ButtonSecondary 
              label={'voltar'}
              type={'button'}
              id={''}
            />
          </Link>
        </div>
        <ButtonCardWrapper>
        <p><strong>Pontos Positivos</strong></p>
        <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      placeholder="Minimum 3 rows"
      style={{  width: '500px', marginBottom: "5%", backgroundColor: "white", height:300, borderRadius: 5, border: 'solid', borderColor: 'light-grey', padding: 10 }}
    />
      <p><strong>Pontos Negativos</strong></p>
     <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      placeholder="Minimum 3 rows"
      style={{  width: '500px', marginBottom: "5%", backgroundColor: "white", height:300, borderRadius: 5, border: 'solid', borderColor: 'light-grey', padding: 10 }}
    />
        </ButtonCardWrapper>
      </section>
    </ButtonCardContainer>
        </>

  )
}



