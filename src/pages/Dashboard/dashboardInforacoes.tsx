import {  Link, SelectChangeEvent } from "@mui/material"
import React from "react"
import {ButtonSecondary } from "../../components/Buttons/Button"
import { ButtonCardContainer, ButtonCardContent, ButtonCardDashboard, ButtonCardDashboardInformacoes, ButtonCardWrapper } from "../../components/Styles/ButtonCard"
import { Titulo } from "../../components/Styles/Component.styled"
import userDummy from "../../assets/user.png";
import { GiChampions } from "react-icons/gi"

export const DashBoardInformacoes = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };
    return (
        <>
         <ButtonCardContainer>
      <section>
        <Titulo>
          Informações
        </Titulo>
        {/* <Link to={"/dashboard"}> */}
         <ButtonSecondary 
            label={'voltar'}
            type={'button'}
            id={''}
            />
        {/* </Link> */}
        <ButtonCardWrapper>
          <ButtonCardDashboardInformacoes>
            <ButtonCardContent>
              <div>
                <p>Gráfico</p>
              <p><span>FrontEnd: </span>15 alunos</p>
              <p><span>BackEnd: </span>14 alunos</p>
              <p><span>QA: </span>8 alunos</p>
              </div>
            </ButtonCardContent>
          </ButtonCardDashboardInformacoes>
        </ButtonCardWrapper>
      </section>
    </ButtonCardContainer>
        </>

    )
}



