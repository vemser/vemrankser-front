import { Link } from 'react-router-dom'
import { ButtonPrimary } from '../../components/Buttons/Button'
import { Titulo } from '../../components/Styles/Component.styled'
import { ContentWrapper } from '../../components/Styles/Container.styled'
import { SimpleCardContent, SimpleCardWrapper } from '../../components/Styles/SimpleCard'
import { SimpleCardConfiguracoes } from './Configuracoes.styled'

export const ConfiguracoesCoordenador = () => {
  return (
    <ContentWrapper>
      <Titulo>
        Configurações
      </Titulo>

      <div className='flex'>
        <Link to={'/configuracoes/adicionar-trilha'}>
          <ButtonPrimary label={'Cadastrar Trilha'} id={'botao-adicionar-trilha'} type={'button'} />
        </Link>
        
        <Link to={"/configuracoes/vincular-instrutor"}>
          <ButtonPrimary label={'Vincular instrutor'} id={'botao-vincular-'} type={'button'} />
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
