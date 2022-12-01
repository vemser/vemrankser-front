import { Avatar } from '@mui/material'
import { useContext, useEffect } from 'react';
import { Titulo } from '../../components/Styles/Component.styled'
import { ContentWrapper } from '../../components/Styles/Container.styled'
import { AuthContext } from '../../context/AuthContext';
import { PerfilContainer } from './Perfil.styled';
import imageDummy from '../../assets/teste.jpg';

export const Perfil = () => {
    const { getLoggedUser } = useContext(AuthContext);

    useEffect(() => {
        getLoggedUser()
    }, []);

    // {`${verificaTipoUsuario(Number(tipo))}`}

    const user = localStorage.getItem('user');

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
            <PerfilContainer>
                <header>
                    <Avatar
                    src={imageDummy}
                    alt={`Foto de usuário`}
                    sx={{ width: 140, height: 140 }}
                    />
                    <div>
                        <h4>Anderson da Lima Silva</h4>
                        <p><span>Login:</span> anderson.silva</p>
                        <p><span>Email:</span> anderson.silva@dbccompany.com.br</p>
                        <p><span>Tipo de conta:</span> Instrutor</p>
                        <p><span>Trilha:</span> QA</p>
                    </div>
                </header>
                <section>
                    <h5>Atividades Vinculadas</h5>
                    <div>
                        <p>Nenhuma atividade encontrada!</p>
                    </div>
                </section>
            </PerfilContainer>
        </ContentWrapper>
    )
}
