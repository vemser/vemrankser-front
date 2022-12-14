import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ButtonPrimary } from '../../../../components/Buttons/Button'
import { Titulo } from '../../../../components/Styles/Component.styled'
import { ContentWrapper } from '../../../../components/Styles/Container.styled'
import { SimpleCardContent, SimpleCardWrapper } from '../../../../components/Styles/SimpleCard'
import { SimpleCardConfiguracoes } from '../../Styles/Configuracoes.styled'
import { VinculaTrilhaContext } from '../../../../context/VinculaTrilhaContext'
import { ITrilha } from '../../../../types/trilha'

export const ConfiguracoesInstrutor = () => {
  const { getTrilhas, trilhas } = useContext(VinculaTrilhaContext);

  useEffect(() => {
    getTrilhas()
  }, [])
  return (
    <ContentWrapper>
      <Titulo>
        Configurações
      </Titulo>

      <div className='flex'>
        <Link to={'/instrutor/configuracoes/cadastrar-modulo'}>
          <ButtonPrimary label={'Cadastrar Módulo'} id={'botao-adicionar-trilha'} type={'button'} />
        </Link>

        <Link to={"/instrutor/configuracoes/vincular-modulo"}>
          <ButtonPrimary label={'Vincular Módulo'} id={'botao-vincular-'} type={'button'} />
        </Link>
      </div>

      {trilhas.map((trilha: ITrilha) =>
        <SimpleCardConfiguracoes key={trilha.idTrilha}>
          <SimpleCardContent>
            <p>A Trilha <span>{trilha.nome}</span> foi adicionada na edição <span>{trilha.edicao}</span> </p>
          </SimpleCardContent>
        </SimpleCardConfiguracoes>
      )}
    </ContentWrapper>
  )
}
