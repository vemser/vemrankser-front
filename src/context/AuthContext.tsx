import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAuthContext } from '../types/auth';
import { IUserLogin, IChildren } from '../types/user'
import { api } from '../utils/api';
import { toast } from 'react-toastify';
import { toastConfig } from '../types/toast';
import nProgress from 'nprogress';

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: IChildren) => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState<any>({});
    const [token, setToken] = useState<string | null>(null);

    const handleLogin = async (user: IUserLogin) => {
        try {
            nProgress.start();

            const { data } = await api.post('/usuario/login', user);

            api.defaults.headers.common['Authorization'] = data;

            localStorage.setItem('token', data);

            setToken(data);

            getLoggedUser();

            navigate('/alunos');
        } catch (error) {
            toast.error('Houve algum erro, por favor tente novamente!', toastConfig);
            console.log(error);
        } finally {
            nProgress.done();
        }
    }
    
    const getLoggedUser = async () => {
        try {
            api.defaults.headers['Authorization'] = token;

            const { data } = await api.get(`/usuario/pegar-usuario-logado`)

            setUsuario(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleLogout = async () => {
        localStorage.removeItem('token');
        setToken(null);

        api.defaults.headers.common['Authorization'] = undefined;

        navigate('/');
    }

    return (
        <AuthContext.Provider value={{ getLoggedUser, token, usuario, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}
