import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Atividades } from './pages/Atividades/Atividades';
import { AtividadesCriar } from './pages/AtividadesCriar/AtividadesCriar';
import { AtividadesNotas } from './pages/AtividadesNotas/AtividadesNotas';
import { Aluno } from './pages/Aluno/Aluno';
import { CadastraAluno } from './pages/AlunoCadastra/CadastraAluno';
import { EditaAluno } from './pages/AlunoEditar/EditaAluno';
import { Login } from './pages/Login/Login';

export const Router = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/atividades'} element={<Atividades />} />
        <Route path={'/atividades/criar'} element={<AtividadesCriar />} />
        <Route path={'/atividades/notas'} element={<AtividadesNotas />} />
        <Route path={'/teste'} element={<Teste />} />
        <Route path={'/aluno'} element={<Aluno />} />
        <Route path={'/vincula-aluno'} element={<CadastraAluno />} />
        <Route path={'/edita-aluno'} element={<EditaAluno />} />
      </Routes>
    </BrowserRouter>
  )
}
