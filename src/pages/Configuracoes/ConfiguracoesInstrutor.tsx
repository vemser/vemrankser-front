import { Link } from 'react-router-dom'
import { ButtonPrimary } from '../../components/Buttons/Button'
import { Titulo } from '../../components/Styles/Component.styled'
import { ContentWrapper } from '../../components/Styles/Container.styled'
import { SimpleCardConfiguracoes, SimpleCardContent, SimpleCardWrapper } from '../../components/Styles/SimpleCard'

export const ConfiguracoesInstrutor = () => {
  return (
      <ContentWrapper>
        <Titulo>
          Configurações Instrutor
        </Titulo>
        <div>
          <Link to={'/configuracoes/adiciona/modulo'}>
           <ButtonPrimary label={'Adicionar Modulo'} id={''} type={'button'} />
          </Link>
        <Link to={"/configuracoes/vincula/modulo"}>
           <ButtonPrimary label={'Vincular Modulo'} id={''} type={'button'} /> 
        </Link>
        </div>
        <SimpleCardConfiguracoes>
          <SimpleCardContent>
            <p>O Modulo <span>Banco de Dados</span> foi adicionado.</p>
          </SimpleCardContent>
        </SimpleCardConfiguracoes>
        <SimpleCardConfiguracoes>
          <SimpleCardContent>
            <p>O Modulo <span>Banco de Dados</span> foi adicionado.</p>
          </SimpleCardContent>
        </SimpleCardConfiguracoes>
        <SimpleCardConfiguracoes>
          <SimpleCardContent>
            <p>O Modulo <span>Banco de Dados</span> foi adicionado.</p>
          </SimpleCardContent>
        </SimpleCardConfiguracoes>
      
      
      
      </ContentWrapper>

  )
}
