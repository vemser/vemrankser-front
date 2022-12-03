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
    const token = localStorage.getItem('token');
    const [usuario, setUsuario] = useState('');

    const handleLogin = async (user: IUserLogin) => {
        try {
            nProgress.start();

            const { data } = await api.post('/usuario/login', user);
            api.defaults.headers.common['Authorization'] = data;

            localStorage.setItem('token', data);

            navigate('/alunos');
        } catch (error) {
            toast.error('Houve algum erro, por favor tente novamente!', toastConfig);
            console.log(error);
        } finally {
            nProgress.done();
        }
    }

    const handleLogout = async () => {
        localStorage.removeItem('token');
        api.defaults.headers.common['Authorization'] = undefined;

        localStorage.removeItem('user');
        navigate('/');
    }

    const getLoggedUser = async () => {
        api.defaults.headers['Authorization'] = token;
        await api.get(`/usuario/pegar-usuario-logado`)
            .then(({ data }) => { localStorage.setItem('user', JSON.stringify(data)); })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <AuthContext.Provider value={{ getLoggedUser, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}
