import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const InstrutorRoute = () => {
    const { userRoles } = useContext(AuthContext);

    return userRoles.includes('ROLE_INSTRUTOR') ? <Outlet /> : <Navigate to='/' />
}