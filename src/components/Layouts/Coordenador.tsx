import { useContext, useEffect } from 'react';
import { HiAcademicCap, HiBookOpen, HiChartPie, HiCog, HiUser, HiUsers } from 'react-icons/hi';
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import { ButtonMenuLateral } from '../Buttons/ButtonMenuLateral';
import { MenuLateral } from '../MenuLateral/MenuLateral';
import userDummy from '../../assets/user.webp';

export const CoordenadorLayout = () => {
    const { getLoggedUser, usuario } = useContext(AuthContext);

    useEffect(() => {
        getLoggedUser();
    }, []);

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
        <main style={{ display: 'flex', width: '100%' }}>
            <MenuLateral
                nomeDoUsuario={usuario?.nome}
                cargoDoUsuario={verificaTipoUsuario(usuario?.tipoPerfil)}
                fotoDePerfil={usuario?.foto !== null && 'foto' ? `data:image/jpeg;base64,${usuario?.foto}` : userDummy}
            >
                <ButtonMenuLateral
                    text={"Dashboard"}
                    icone={<HiChartPie />}
                    link={"/dashboard"}
                />
                <ButtonMenuLateral
                    text={"Alunos"}
                    icone={<HiAcademicCap />}
                    link={"/alunos"}
                />
                <ButtonMenuLateral
                    text={"Perfil"}
                    icone={<HiUser />}
                    link={"/perfil"}
                />
                <ButtonMenuLateral
                    text={"Configurações"}
                    icone={<HiCog />}
                    link={"/configuracoes"}
                />
            </MenuLateral>
            <Outlet />
        </main>
    )
}
