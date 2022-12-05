import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAuthContext } from '../types/auth';
import { IUserLogin, IChildren, IUser } from '../types/user'
import { api } from '../utils/api';
import { toast } from 'react-toastify';
import { toastConfig } from '../types/toast';
import nProgress from 'nprogress';

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: IChildren) => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState<IUser>();
    const token = localStorage.getItem('token');
    const [userRoles, setUserRoles] = useState<string[]>([]);

    const decodeToken = async (token: any) => {
        try {
            let decodedJWT = JSON.parse(atob(token.split('.')[1]));
            let roles = decodedJWT.CARGOS;

            return roles;

        } catch (error) {
            return null;
        }
    }

    const handleLogin = async (user: IUserLogin) => {
        try {
            nProgress.start();

            const { data } = await api.post('/usuario/login', user);
            api.defaults.headers.common['Authorization'] = data;
            localStorage.setItem('token', data);

            let roles = await decodeToken(localStorage.getItem('token'));

            setUserRoles(roles);

            if (roles.includes('ROLE_ADMINISTRADOR')) {
                navigate('/adm/usuarios');

            } else if (roles.includes('ROLE_GESTAO')) {
                navigate('/gestor/dashboard');

            } else if (roles.includes('ROLE_COORDENADOR')) {
                navigate('/coordenador/dashboard');

            } else if (roles.includes('ROLE_INSTRUTOR')) {
                navigate('/instrutor/dashboard');

            } else if (roles.includes('ROLE_ALUNO')) {
                navigate('/aluno/dashboard');

            } else {
                toast.error('Autenticação falhou, por favor verifique os seus dados', toastConfig);
                navigate('/');
            }

        } catch (error) {
            toast.error('Houve algum erro, por favor verifique os dados e tente novamente', toastConfig);
            console.log(error);
        } finally {
            nProgress.done();
        }
    }

    const getLoggedUser = async () => {
        try {
            api.defaults.headers.common['Authorization'] = token;
            const { data } = await api.get(`/usuario/pegar-usuario-logado`);

            setUsuario(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleLogout = async () => {
        localStorage.removeItem('token');

        api.defaults.headers.common['Authorization'] = undefined;

        setUsuario(undefined);

        navigate('/');
    }

    return (
        <AuthContext.Provider value={{ getLoggedUser, usuario, handleLogin, userRoles, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}
