import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Atividades } from './pages/Atividades/Atividades';
import { AtividadesCriar } from './pages/AtividadesCriar/AtividadesCriar';
import { AtividadesNotas } from './pages/AtividadesNotas/AtividadesNotas';
import { Aluno } from './pages/Aluno/Aluno';
import { VinculaAluno } from './pages/AlunoVincula/AlunoVincula';
import { Login } from './pages/Login/Login';
import { Admin } from './components/Layouts/Admin';
import { Perfil } from './pages/Perfil/Perfil';
import { Usuario } from './pages/Usuario/Usuario';
import { UsuarioCadastra } from './pages/UsuarioCadastra/UsuarioCadastra';
import { UsuarioEdita } from './pages/UsuarioEdita/UsuarioEdita';
import { UsersProvider } from './context/UserContext';
import { AlunoProvider } from './context/AlunoContext';
import { VinculaTrilhaProvider } from './context/VinculaTrilhaContext';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute } from './routes/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { ConfiguracoesCoordenador } from './pages/Configuracoes/ConfiguracoesCoordenador';
import { ConfiguracoesAdicionaTrilha } from './pages/Configuracoes/ConfiguracoesAdicionaTrilha';
import { ConfiguracoesVinculaInstrutor } from './pages/Configuracoes/ConfiguracoesVinculaInstrutor';
import { ConfiguracoesInstrutor } from './pages/Configuracoes/ConfiguracoesInstrutor';
import { ConfiguracoesAdicionaModulo } from './pages/Configuracoes/ConfiguracoesAdicionaModulo';
import { ConfiguracoesVinculaModulo } from './pages/Configuracoes/ConfiguracoesVinculaModulo';

export const Router = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AuthProvider>
        <UsersProvider>
          <AlunoProvider>
            <VinculaTrilhaProvider>
              <Routes>
                <Route path={'/'} element={<Login />} />
                <Route element={<PrivateRoute />}>
                  <Route element={<Admin />}>
                    <Route path={'/atividades'} element={<Atividades />} />
                    <Route path={'/atividades/criar'} element={<AtividadesCriar />} />
                    <Route path={'/atividades/notas'} element={<AtividadesNotas />} />
                    <Route path={'/alunos'} element={<Aluno />} />
                    <Route path={'/alunos/vincular'} element={<VinculaAluno />} />
                    <Route path={'/usuarios'} element={<Usuario />} />
                    <Route path={'/usuarios/cadastrar'} element={<UsuarioCadastra />} />
                    <Route path={'/usuarios/editar'} element={<UsuarioEdita />} />
                    <Route path={'/perfil'} element={<Perfil />} />
                    <Route path={'/dashboard'} element={<Dashboard />} />
                    <Route path={'/configuracoes'} element={<ConfiguracoesCoordenador />} />
                    <Route path={'/configuracoes/instrutor'} element={<ConfiguracoesInstrutor />} />
                    <Route path={'/configuracoes/adicionar-trilha'} element={<ConfiguracoesAdicionaTrilha />} />
                    <Route path={'/configuracoes/adicionar-modulo'} element={<ConfiguracoesAdicionaModulo />} />
                    <Route path={'/configuracoes/vincular-modulo'} element={<ConfiguracoesVinculaModulo />} />
                    <Route path={'/configuracoes/vincular-instrutor'} element={<ConfiguracoesVinculaInstrutor />} />
                  </Route>
                </Route>
              </Routes>
            </VinculaTrilhaProvider>
          </AlunoProvider>
        </UsersProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

