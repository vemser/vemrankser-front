import { IUserLogin } from './user';

export interface IAuthContext {
    userSignup: (newUser: IUserLogin) => Promise<void>,
    handleLogin: (user: IUserLogin) => Promise<void>,
    handleLogout: () => Promise<void>,
}