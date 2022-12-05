import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const GestaoRoute = () => {
    const { userRoles } = useContext(AuthContext);

    return userRoles.includes('ROLE_GESTAO') ? <Outlet /> : <Navigate to='/' />
}