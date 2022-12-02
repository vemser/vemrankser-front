import {  SelectChangeEvent } from "@mui/material"
import React from "react"
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
            <Link to={"/dashboard/feedback/visualiza/pontos"}>
             <ButtonPrimary label={"Salvar"} id={""} type={undefined} />
            </Link>
          </div>
           {/* <Link to={'/dashbo'} /> */}
            <ButtonSecondary 
              label={'voltar'}
              type={'button'}
              id={''}
            />
            {/* </Link> */}
        </div>
        <ButtonCardWrapper>
          <ButtonCardDashboardFeedback>
            <ButtonCardContentVizualiza>
            </ButtonCardContentVizualiza>
          </ButtonCardDashboardFeedback>
        </ButtonCardWrapper>
      </section>
    </ButtonCardContainer>
        </>

  )
}



