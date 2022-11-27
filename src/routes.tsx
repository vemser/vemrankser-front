import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Aluno } from './pages/Aluno/Aluno';
import { CadastraAluno } from './pages/CadastraAluno/CadastraAluno';
import { EditaAluno } from './pages/EditaAluno/EditaAluno';
import { Login } from './pages/Login/Login';
import { Teste } from './pages/Teste'

export const Router = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/teste'} element={<Teste />} />
        <Route path={'/aluno'} element={<Aluno />} />
        <Route path={'/cadastraAluno'} element={<CadastraAluno />} />
        <Route path={'/editaAluno'} element={<EditaAluno />} />
      </Routes>
    </BrowserRouter>
  )
}
