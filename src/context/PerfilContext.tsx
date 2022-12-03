import { createContext, useContext, useState } from 'react';
import { IPerfilContext } from '../types/perfil';
import { IChildren, IUser } from '../types/user'
import { api } from '../utils/api';
import { IAtividadeById } from '../types/atividade';
import { AuthContext } from './AuthContext';

export const PerfilContext = createContext({} as IPerfilContext);

export const AuthProvider = ({ children }: IChildren) => {
    const [ atividadesById, setAtividadesById ] = useState<IAtividadeById[]>([])
    const { token } = useContext(AuthContext);

    const getAtividadesbyId = async (userId: IUser) => {
        try {
            api.defaults.headers.common['Authorization'] = token;

            const { data } = await api.get(`/atividade/listar-mural-aluno?idUsuario=${userId}`);
            setAtividadesById(data);
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <PerfilContext.Provider value={{ getAtividadesbyId, atividadesById }}>
            {children}
        </PerfilContext.Provider>
    )
}
