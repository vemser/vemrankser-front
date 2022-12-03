import { createContext, useState } from 'react';
import { IPerfilContext } from '../types/perfil';
import { IChildren } from '../types/user'
import { api } from '../utils/api';
import { IAtividadeById } from '../types/atividade';

export const PerfilContext = createContext({} as IPerfilContext);

export const PerfilProvider = ({ children }: IChildren) => {
    const [ atividadesById, setAtividadesById ] = useState<IAtividadeById[]>([]);
    const token = localStorage.getItem('token');

    const getAtividadesbyId = async (idUsuario: number) => {
        try {
            api.defaults.headers.common['Authorization'] = token;

            const { data } = await api.get(`/atividade/listar-mural-aluno?pagina=0&tamanho=4&atividadeStatus=PENDENTE&idUsuario=${idUsuario}`);
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
