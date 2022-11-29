import { createContext } from 'react';
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

    const userSignup = async (newUser: IUserLogin) => {
        // try {
        //     nProgress.start();

        //     let user = {login: newUser.login, senha: newUser.senha}            
        //     await api.post('/usuario/cadastro', user);

        //     toast.success('Usuário cadastrado com sucesso!', toastConfig);           
        //     navigate('/');
        // } catch (error) {
        //     toast.error('Houve algum erro, por favor tente novamente!', toastConfig);
        //     console.log(error);
        // } finally {
        //     nProgress.done();
        // }
    }

    const handleLogin = async (user: IUserLogin) => {
        try {
            nProgress.start();

            const { data } = await api.post('/usuario/login', user);
            api.defaults.headers.common['Authorization'] = data;
    
            localStorage.setItem('token', data);

            navigate('/alunos')
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

    return (
        <AuthContext.Provider value={{ userSignup, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}
