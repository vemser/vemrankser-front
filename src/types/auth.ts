import { IUserLogin } from './user';

export interface IAuthContext {
    handleLogin: (user: IUserLogin) => Promise<void>,
    getLoggedUser: () => Promise<void>,
    handleLogout: () => Promise<void>
}