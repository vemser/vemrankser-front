import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Atividades } from './pages/Atividades/Atividades';
import { AtividadesCriar } from './pages/AtividadesCriar/AtividadesCriar';
import { AtividadesNotas } from './pages/AtividadesNotas/AtividadesNotas';
import { Aluno } from './pages/Aluno/Aluno';
import { VinculaAluno } from './pages/AlunoVincula/AlunoVincula';
import { Login } from './pages/Login/Login';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute } from './routes/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';
import { Usuario } from './pages/Usuario/Usuario';
import { UsuarioCadastra } from './pages/UsuarioCadastra/UsuarioCadastra';
import { UsuarioEdita } from './pages/UsuarioEdita/UsuarioEdita';
import { UsersProvider } from './context/UserContext';
import { AlunoProvider } from './context/AlunoContext';
import { VinculaTrilhaProvider } from './context/VinculaTrilhaContext';
import { AtividadeProvider } from './context/AtividadesContext';
import { AtividadesDetalhesNotas } from './pages/AtividadesMaisDetalhesNotas/AtividadeMaisDetalhesNotas';

export const Router = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AuthProvider>
        <UsersProvider>
          <AlunoProvider>
            <VinculaTrilhaProvider>
            <AtividadeProvider>
            <Routes>
            <Route path={'/'} element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path={'/atividades'} element={<Atividades />} />
              <Route path={'/atividades/criar'} element={<AtividadesCriar />} />
              <Route path={'/atividades/notas'} element={<AtividadesNotas />} />
              <Route path={'/alunos'} element={<Aluno />} />
              <Route path={'/alunos/vincular'} element={<VinculaAluno />} />
              <Route path={'/usuarios'} element={<Usuario />} />
              <Route path={'/usuarios/cadastrar'} element={<UsuarioCadastra />} />
              <Route path={'/usuarios/editar'} element={<UsuarioEdita />} />
            </Route>
          </Routes>
          </AtividadeProvider>
            </VinculaTrilhaProvider>
          </AlunoProvider>
        </UsersProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
