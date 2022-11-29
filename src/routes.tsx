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
import { Usuario } from './pages/Usuario/Usuario';
import { UsuarioCadastra } from './pages/UsuarioCadastra/UsuarioCadastra';
import { UsuarioEdita } from './pages/UsuarioEdita/UsuarioEdita';
import { UsersProvider } from './context/UserContext';

export const Router = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AuthProvider>
        <UsersProvider>
          <Routes>
            <Route path={'/'} element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path={'/atividades'} element={<Atividades />} />
              <Route path={'/atividades/criar'} element={<AtividadesCriar />} />
              <Route path={'/atividades/notas'} element={<AtividadesNotas />} />
              <Route path={'/alunos'} element={<Aluno />} />
              <Route path={'/alunos/vincular'} element={<CadastraAluno />} />
              <Route path={'/alunos/editar'} element={<EditaAluno />} />
              <Route path={'/usuarios'} element={<Usuario />} />
              <Route path={'/usuarios/cadastrar'} element={<UsuarioCadastra />} />
              <Route path={'/usuarios/editar'} element={<UsuarioEdita />} />
            </Route>
          </Routes>
        </UsersProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
