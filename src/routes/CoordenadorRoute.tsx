import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const CoordenadorRoute = () => {
    const { userRoles } = useContext(AuthContext);

    return userRoles.includes('ROLE_COORDENADOR') ? <Outlet /> : <Navigate to='/' />
}