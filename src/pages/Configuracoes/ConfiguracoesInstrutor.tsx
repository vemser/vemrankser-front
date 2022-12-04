import { Link } from 'react-router-dom'
import { ButtonPrimary } from '../../components/Buttons/Button'
import { Titulo } from '../../components/Styles/Component.styled'
import { ContentWrapper } from '../../components/Styles/Container.styled'
import { SimpleCardContent, SimpleCardWrapper } from '../../components/Styles/SimpleCard'
import { SimpleCardConfiguracoes } from './Configuracoes.styled'

export const ConfiguracoesInstrutor = () => {
  return (
    <ContentWrapper>
      <Titulo>
        Configurações
      </Titulo>

      <div className='flex'>
        <Link to={'/configuracoes/adicionar-modulo'}>
          <ButtonPrimary label={'Adicionar Módulo'} id={'botao-adicionar-modulo'} type={'button'} />
        </Link>
        <Link to={"/configuracoes/vincular-modulo"}>
          <ButtonPrimary label={'Vincular Módulo'} id={'botao-vincular-modulo'} type={'button'} />
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
