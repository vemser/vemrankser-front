import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Atividades } from './pages/Atividades/Atividades';
import { AtividadesCriar } from './pages/AtividadesCriar/AtividadesCriar';
import { AtividadesNotas } from './pages/AtividadesNotas/AtividadesNotas';
import { Aluno } from './pages/Aluno/Aluno';
import { CadastraAluno } from './pages/AlunoCadastra/CadastraAluno';
import { EditaAluno } from './pages/AlunoEditar/EditaAluno';
import { Login } from './pages/Login/Login';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute } from './routes/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';

export const Router = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AuthProvider>
        <Routes>
          <Route path={'/'} element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path={'/atividades'} element={<Atividades />} />
            <Route path={'/atividades/criar'} element={<AtividadesCriar />} />
            <Route path={'/atividades/notas'} element={<AtividadesNotas />} />
            <Route path={'/alunos'} element={<Aluno />} />
            <Route path={'/vincula-aluno'} element={<CadastraAluno />} />
            <Route path={'/edita-aluno'} element={<EditaAluno />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
