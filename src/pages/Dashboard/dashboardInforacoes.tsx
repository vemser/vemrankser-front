import React, { useContext, useEffect } from "react"
import { ButtonSecondary } from "../../components/Buttons/Button"
import { ButtonCardContainer, ButtonCardContent, ButtonCardDashboard, ButtonCardDashboardInformacoes, ButtonCardWrapper } from "../../components/Styles/ButtonCard"
import { Titulo } from "../../components/Styles/Component.styled"
import { Link } from "react-router-dom"
import { AlunoContext } from "../../context/AlunoContext"
import { IContaAlunos } from "../../types/aluno"

export const DashBoardInformacoes = () => {
  const {getAlunosPorTrilha, alunosTrilha} = useContext(AlunoContext)
  
  useEffect(()=>{
    getAlunosPorTrilha()
  }, [])

  return (
    <>
      <ButtonCardContainer>
        <section>
          <Titulo>
            Informações
          </Titulo>
          <Link to={"/dashboard"}>
          <ButtonSecondary
            label={'voltar'}
            type={'button'}
            id={''}
          />
          </Link>
          <ButtonCardWrapper>
            <ButtonCardDashboardInformacoes>
              <ButtonCardContent>
                <div>
                  <p>Gráfico</p>
                  {alunosTrilha&&alunosTrilha.map((trilha: IContaAlunos)=>
                   <p><span>{trilha.nome}: </span>{trilha.quantidadeAlunos}</p>
                  )}
                </div>
              </ButtonCardContent>
            </ButtonCardDashboardInformacoes>
          </ButtonCardWrapper>
        </section>
      </ButtonCardContainer>
    </>

  )
}



