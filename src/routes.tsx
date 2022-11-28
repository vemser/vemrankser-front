import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Aluno } from './pages/Aluno/Aluno';
import { CadastraAluno } from './pages/AlunoCadastra/CadastraAluno';
import { EditaAluno } from './pages/AlunoEditar/EditaAluno';
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
        <Route path={'/vincula-aluno'} element={<CadastraAluno />} />
        <Route path={'/edita-aluno'} element={<EditaAluno />} />
      </Routes>
    </BrowserRouter>
  )
}
