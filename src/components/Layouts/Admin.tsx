import { useContext, useEffect } from 'react';
import { HiAcademicCap, HiBookOpen, HiChartPie, HiCog, HiUser, HiUsers } from 'react-icons/hi';
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import { ButtonMenuLateral } from '../Buttons/ButtonMenuLateral';
import { MenuLateral } from '../MenuLateral/MenuLateral'

export const Admin = () => {
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

    return (
        <main style={{ display: 'flex', width: '100%' }}>
            <MenuLateral
                nomeDoUsuario={usuario.nome}
                cargoDoUsuario={verificaTipoUsuario(usuario.tipoPerfil)}
                fotoDePerfil={""}
            >
                <ButtonMenuLateral
                    text={"Dashboard"}
                    icone={<HiChartPie />}
                    link={"/dashboard"}
                />
                <ButtonMenuLateral
                    text={"Usuários"}
                    icone={<HiUsers />}
                    link={"/usuarios"}
                />
                <ButtonMenuLateral
                    text={"Alunos"}
                    icone={<HiAcademicCap />}
                    link={"/alunos"}
                />
                <ButtonMenuLateral
                    text={"Atividades"}
                    icone={<HiBookOpen />}
                    link={"/atividades"}
                />
                <ButtonMenuLateral
                    text={"Perfil"}
                    icone={<HiUser />}
                    link={"/perfil"}
                />
                <ButtonMenuLateral
                    text={"Configurações"}
                    icone={<HiCog />}
                    link={"/configurações"}
                />
            </MenuLateral>
            <Outlet />
        </main>
    )
}
