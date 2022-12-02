import {  SelectChangeEvent } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import { ButtonPrimary, ButtonSecondary } from "../../components/Buttons/Button"
import { ButtonCardContainer, ButtonCardContentVizualiza, ButtonCardDashboardFeedback, ButtonCardWrapper } from "../../components/Styles/ButtonCard"
import { Titulo } from "../../components/Styles/Component.styled"

export const DashBoardFeedbackAluno = () => {
  return (
    <>
    <ButtonCardContainer>
      <section>
        <Titulo>
          Vizualiza Feedback aluno
        </Titulo>
        <div className="flex">
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



