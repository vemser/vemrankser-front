import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Atividades } from './pages/Atividades/Atividades';
import { AtividadesCriar } from './pages/AtividadesCriar/AtividadesCriar';
import { AtividadesNotas } from './pages/AtividadesNotas/AtividadesNotas';
import { Aluno } from './pages/Aluno/Aluno';
import { VinculaAluno } from './pages/AlunoVincula/AlunoVincula';
import { EditaAluno } from './pages/AlunoEditar/EditaAluno';
import { Login } from './pages/Login/Login';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute } from './routes/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';
import { Usuario } from './pages/Usuario/Usuario';
import { UsuarioCadastra } from './pages/UsuarioCadastra/UsuarioCadastra';
import { UsuarioEdita } from './pages/UsuarioEdita/UsuarioEdita';
import { UsersProvider } from './context/UserContext';
import { Admin } from './components/Layouts/Admin';
import { DashBoard } from './pages/Dashboard/dashboard';
import { DashBoardInformacoes } from './pages/Dashboard/dashboardInforacoes';
import { DashBoardFeedback } from './pages/Dashboard/dashboardFeedback';

export const Router = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AuthProvider>
        <UsersProvider>
          <Routes>
            <Route path={'/'} element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route element={<Admin />}>
                <Route path={'/atividades'} element={<Atividades />} />
                <Route path={'/atividades/criar'} element={<AtividadesCriar />} />
                <Route path={'/atividades/notas'} element={<AtividadesNotas />} />
                <Route path={'/alunos'} element={<Aluno />} />
                <Route path={'/alunos/vincular'} element={<VinculaAluno />} />
                <Route path={'/alunos/editar'} element={<EditaAluno />} />
                <Route path={'/usuarios'} element={<Usuario />} />
                <Route path={'/usuarios/cadastrar'} element={<UsuarioCadastra />} />
                <Route path={'/usuarios/editar'} element={<UsuarioEdita />} />
                <Route path={'/dashboard'} element={<DashBoard />} />
                <Route path={'/dashboard/informacoes'} element={<DashBoardInformacoes />} />
                <Route path={'/dashboard/feedback'} element={<DashBoardFeedback />} />
              </Route>
            </Route>
          </Routes>
        </UsersProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
