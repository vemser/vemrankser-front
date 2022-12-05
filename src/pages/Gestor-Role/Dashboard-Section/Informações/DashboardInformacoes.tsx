import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ButtonSecondary } from '../../../../components/Buttons/Button';
import { ButtonCardContainer, ButtonCardContent, ButtonCardWrapper } from '../../../../components/Styles/ButtonCard';
import { Titulo } from '../../../../components/Styles/Component.styled';
import { AlunoContext } from '../../../../context/AlunoContext';
import { IContaAlunos } from '../../../../types/aluno';
import { ButtonCardDashboardInformacoes } from '../../../Dashboard/Dashboard.styled';

export const DashBoardInformacoes = () => {
  const { getAlunosPorTrilha, alunosTrilha } = useContext(AlunoContext)

  useEffect(() => {
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
              id={'bota-informacoes-volta-dashboard'}
            />
          </Link>
          <ButtonCardWrapper>
            <ButtonCardDashboardInformacoes>
              <ButtonCardContent>
                <div>
                  {alunosTrilha && alunosTrilha.map((trilha: IContaAlunos) =>
                    <p key={trilha.idTrilha}><span>{trilha.nome}: </span>{trilha.quantidadeAlunos}</p>
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
