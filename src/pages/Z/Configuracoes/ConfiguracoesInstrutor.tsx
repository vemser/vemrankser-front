import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { ButtonPrimary } from '../../components/Buttons/Button'
import { Titulo } from '../../components/Styles/Component.styled'
import { ContentWrapper } from '../../components/Styles/Container.styled'
import { SimpleCardContent, SimpleCardWrapper } from '../../components/Styles/SimpleCard'
import { ModuloContext } from '../../context/ModuloContext'
import { IModulo } from '../../types/modulo'
import { cadastraNovoModuloSchema } from '../../utils/schemas'
import { SimpleCardConfiguracoes } from './Configuracoes.styled'

export const ConfiguracoesInstrutor = () => {
  const { getModulos, modulos } = useContext(ModuloContext)



  useEffect(() => {
    getModulos()
  }, [])

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
      {modulos.map((modulo: IModulo) =>
        <SimpleCardConfiguracoes key={modulo.idModulo}>
          <SimpleCardContent>
            <p>O Modulo <span>{modulo.nome}</span> foi adicionado.</p>
          </SimpleCardContent>
        </SimpleCardConfiguracoes>
      )}




    </ContentWrapper>
  )
}
