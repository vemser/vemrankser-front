import { useContext } from 'react';
import { ContentWrapper } from '../../../components/Styles/Container.styled'
import { AuthContext } from '../../../context/AuthContext';
import { PerfilGeralContainer } from '../Styles/Perfil.styled';
import { ITrilha } from '../../../types/trilha';
import userDummy from '../../../assets/user.webp';
import { Typography } from '@mui/material';

export const PerfilCoordenador = () => {
    const { usuario } = useContext(AuthContext);
    const trilhasUser = usuario.trilha || [];
    const userId = usuario.idUsuario;

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

    return (
        <ContentWrapper>
            <PerfilGeralContainer>
                <header>
                    <img id='perfil-foto' src={usuario.foto !== null && 'foto' ? `data:image/jpg;base64,${usuario.foto}` : userDummy} alt={`Foto de ${usuario.nome}`} />
                    <div>
                        <h4 id='perfil-nome' ><Typography textTransform='capitalize' fontSize='1.4rem' fontWeight='600' color='var(--branco)' fontFamily='Inter'>
                            {usuario.nome}
                        </Typography></h4>
                        <p id='perfil-login' ><span>Login:</span> {usuario.login}</p>
                        <p id='perfil-email' ><span>Email:</span> {usuario.email}</p>
                        <p id='perfil-tipo-de-conta'><span>Tipo de conta:</span> {verificaTipoUsuario(usuario.tipoPerfil)}</p>
                        {trilhasUser.length !== 0 ?
                            <p><span>Trilha: </span>
                                {trilhasUser.map
                                    ((trilhas: ITrilha, index: any) => {
                                        const ultimaTrilha = trilhasUser.length - 1
                                        return (index === ultimaTrilha ?
                                            trilhas.nome
                                            : trilhas.nome + `, `)
                                    })
                                } </p>
                            : ''
                        }
                    </div>
                </header>
            </PerfilGeralContainer>
        </ContentWrapper >
    )
}
