import { Link } from 'react-router-dom'
import { ButtonPrimary } from '../../components/Buttons/Button'
import { Titulo } from '../../components/Styles/Component.styled'
import { ContentWrapper } from '../../components/Styles/Container.styled'
import { SimpleCardConfiguracoes, SimpleCardContent, SimpleCardWrapper } from '../../components/Styles/SimpleCard'

export const ConfiguracoesCoordenador = () => {
  return (
      <ContentWrapper>
        <Titulo>
          Configurações
        </Titulo>
        <div>
          <Link to={'/configuracoes/adiciona/trilha'}>
           <ButtonPrimary label={'Adicionar Trilha'} id={''} type={'button'} />
          </Link>
        <Link to={"/configuracoes/vincula/instrutor"}>
           <ButtonPrimary label={'Vincular instrutor'} id={''} type={'button'} /> 
        </Link>
        </div>
        <SimpleCardConfiguracoes>
          <SimpleCardContent>
            <p>A Trilha <span>Backend</span> foi adicionada.</p>
          </SimpleCardContent>
        </SimpleCardConfiguracoes>
        <SimpleCardConfiguracoes>
          <SimpleCardContent>
            <p>A Trilha <span>Frontend</span> foi adicionada.</p>
          </SimpleCardContent>
        </SimpleCardConfiguracoes>
        <SimpleCardConfiguracoes>
          <SimpleCardContent>
            <p>A Trilha <span>Backend</span> foi adicionada.</p>
          </SimpleCardContent>
        </SimpleCardConfiguracoes>
      </ContentWrapper>

  )
}
