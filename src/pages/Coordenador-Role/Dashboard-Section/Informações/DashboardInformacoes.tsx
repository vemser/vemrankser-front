import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ButtonSecondary } from '../../../../components/Buttons/Button';
import { AlunoContext } from '../../../../context/AlunoContext';
import { IContaAlunos } from '../../../../types/aluno';
import { ButtonCardContainer, ButtonCardWrapper } from '../../../../components/Styles/ButtonCard';
import { Titulo } from '../../../../components/Styles/Component.styled';
import { ButtonCardContentInformacao, ButtonCardDashboardInformacoes, } from '../../Styles/Dashboard.styled';


export const DashBoardInformacoesCoordenador = () => {
    const { getAlunosPorTrilha, alunosTrilha } = useContext(AlunoContext)

    useEffect(() => {
        getAlunosPorTrilha()
    }, [])

    return (
        <>
            <ButtonCardContainer>
                <section>
                    <Titulo>
                        Informações das Trilhas
                    </Titulo>
                    <Link to={"/coordenador/dashboard"}>
                        <ButtonSecondary
                            label={'voltar'}
                            type={'button'}
                            id={'bota-informacoes-volta-dashboard'}
                        />
                    </Link>
                    <ButtonCardWrapper>
                        {alunosTrilha && alunosTrilha.map((trilha: IContaAlunos) =>
                            <ButtonCardDashboardInformacoes>
                                <ButtonCardContentInformacao>
                                    <div>
                                        <p><span>Trilha: </span>{trilha.nome}</p>
                                    </div>
                                    <div>
                                        <p><span>Quantidade de alunos: </span>{trilha.quantidadeAlunos}</p>
                                    </div>
                                </ButtonCardContentInformacao>
                            </ButtonCardDashboardInformacoes>
                        )}
                    </ButtonCardWrapper>
                </section>
            </ButtonCardContainer>
        </>
    )
}