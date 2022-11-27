import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Atividades } from './pages/Atividades/Atividades';
import { AtividadesCriar } from './pages/AtividadesCriar/AtividadesCriar';
import { Login } from './pages/Login/Login';

export const Router = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/atividades'} element={<Atividades />} />
        <Route path={'/atividades-criar'} element={<AtividadesCriar />} />
      </Routes>
    </BrowserRouter>
  )
}
