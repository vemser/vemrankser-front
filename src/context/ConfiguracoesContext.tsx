import { createContext} from 'react';
import { IChildren, IConfiguracoesContext } from '../types/configuracoes';

export const ConfiguracoesContext = createContext({} as IConfiguracoesContext);

export const ConfiguracoesProvider = ({ children }: IChildren) => {


    return (
        <ConfiguracoesContext.Provider value={{  }}>
            {children}
        </ConfiguracoesContext.Provider>
    );
};
