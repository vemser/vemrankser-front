import {  SelectChangeEvent } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import { ButtonPrimary, ButtonSecondary } from "../../components/Buttons/Button"
import { ButtonCardContainer, ButtonCardContent, ButtonCardContentVizualiza, ButtonCardDashboardFeedback, ButtonCardWrapper } from "../../components/Styles/ButtonCard"
import { Titulo } from "../../components/Styles/Component.styled"

export const DashBoardVisualiza = () => {

  return (
    <>
    <ButtonCardContainer>
      <section>
        <Titulo>
          Vizualiza Feedback
        </Titulo>
        <div className="flex">
          <div>
            <Link to={"/dashboard/feedback/adiciona/pontos"}>
             <ButtonPrimary label={"Adicionar"} id={""} type={undefined} />
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



