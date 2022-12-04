import { createContext, useState } from 'react';
import { api } from '../utils/api';
import { IPerfilContext } from '../types/perfil';
import { IChildren } from '../types/user'
import { IAtividadeById } from '../types/atividade';

export const PerfilContext = createContext({} as IPerfilContext);

export const PerfilProvider = ({ children }: IChildren) => {
    const [atividadesById, setAtividadesById] = useState<IAtividadeById[]>([]);
    const token = localStorage.getItem('token');

    const getAtividadesbyId = async (idUsuario: number) => {
        try {
            api.defaults.headers.common['Authorization'] = token;

            const { data } = await api.get(`/atividade/listar-mural-aluno?pagina=0&tamanho=3&atividadeStatus=PENDENTE&idUsuario=${idUsuario}`);

            setAtividadesById(data.elementos);
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
