import { createContext, useState } from 'react';
import { api } from '../utils/api';
import { IChildren, IConfiguracoesContext } from '../types/configuracoes';
import { toastConfig } from '../types/toast';
import { toast } from 'react-toastify';
import nProgress from 'nprogress';

export const ConfiguracoesContext = createContext({} as IConfiguracoesContext);

export const AlunoProvider = ({ children }: IChildren) => {


    return (
        <ConfiguracoesContext.Provider value={{  }}>
            {children}
        </ConfiguracoesContext.Provider>
    );
};
