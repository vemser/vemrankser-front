import { useContext, useEffect } from 'react';
import { ContentWrapper } from '../../components/Styles/Container.styled'
import { AuthContext } from '../../context/AuthContext';
import { PerfilContainer } from './Perfil.styled';
import imageDummy from '../../assets/teste.jpg';
import { ITrilha } from '../../types/vinculaTrilha';

export const Perfil = () => {
    const { getLoggedUser } = useContext(AuthContext);

    useEffect(() => {
        getLoggedUser()
    }, []);

    const usuario = JSON.parse(localStorage.getItem('user') || '{}');

    function verificaTipoUsuario(tipoPerfil: number) {
        switch (tipoPerfil) {
            case 1:
                return 'Coordenador'

            case 2:
                return 'Aluno'

            case 3:
                return 'Instrutor'

            case 4:
                return 'Admin'

            case 5:
                return 'Gestão'

            default:
                return 'Indefinido'
        }
    }

    console.log(usuario)

    return (
        <ContentWrapper>
            <PerfilContainer>
                <header>
                    <img id='perfil-foto' src={usuario.foto}
                        alt={`Foto de ${usuario.nome}`} />
                    <div>
                        <h4 id='perfil-nome' >{usuario.nome}</h4>
                        <p id='perfil-login' ><span>Login:</span> {usuario.login}</p>
                        <p id='perfil-email' ><span>Email:</span> {usuario.email}</p>
                        <p id='perfil-tipo-de-conta'><span>Tipo de conta:</span> {verificaTipoUsuario(usuario.tipoPerfil)}</p>
                        {usuario.trilhas.length !== 0 ?
                            <p><span>Trilha: </span>
                            
                                {usuario?.trilhas.map
                                    ((trilhas: ITrilha, index: any) => {
                                        const ultimaTrilha = usuario.trilhas.length - 1
                                        return (index === ultimaTrilha ?
                                            trilhas.nome
                                            : trilhas.nome + `, `)
                                    })
                                } </p>
                            : ''
                        }
                    </div>
                </header>
                <section>
                    <h5 id='perfil-atividades-vinculadas' >Atividades Vinculadas</h5>
                    <div>
                        <p>Nenhuma atividade encontrada!</p>
                    </div>
                </section>
            </PerfilContainer>
        </ContentWrapper >
    )
}
