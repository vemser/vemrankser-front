import { TextareaAutosize } from "@mui/material"
import { Link } from "react-router-dom"
import { ButtonPrimary, ButtonSecondary } from "../../components/Buttons/Button"
import { ButtonCardContainer,ButtonCardWrapper } from "../../components/Styles/ButtonCard"
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
             <ButtonPrimary label={"Salvar"} id={"botao-feedabck-volta-salva-feedback"} type={undefined} />
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
      aria-label="Feedback Positivo..."
      minRows={3}
      placeholder="Minimum 3 rows"
      style={{  width: '500px', marginBottom: "5%", backgroundColor: "white", height:200, borderRadius: 5, border: 'solid', borderColor: 'light-grey', padding: 10 }}
    />
      <p><strong>Pontos Negativos</strong></p>
     <TextareaAutosize
      aria-label="Feedback Negvativo..."
      minRows={3}
      placeholder="Minimum 3 rows"
      style={{  width: '500px', marginBottom: "5%", backgroundColor: "white", height:200, borderRadius: 5, border: 'solid', borderColor: 'light-grey', padding: 10 }}
    />
        </ButtonCardWrapper>
      </section>
    </ButtonCardContainer>
        </>

  )
}



