import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AtividadesInstrutor } from './pages/Atividades/AtividadesInstrutor';
import { AtividadesCriar } from './pages/AtividadesCriar/AtividadesCriar';
import { AtividadesNotas } from './pages/AtividadesNotas/AtividadesNotas';
import { Aluno } from './pages/Aluno/Aluno';
import { VinculaAluno } from './pages/AlunoVincula/AlunoVincula';
import { Login } from './pages/Login/Login';
import { AdminLayout } from './components/Layouts/Admin';
import { Perfil } from './pages/Perfil/Perfil';
import { UsersProvider } from './context/UserContext';
import { AlunoProvider } from './context/AlunoContext';
import { VinculaTrilhaProvider } from './context/VinculaTrilhaContext';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute } from './routes/PrivateRoute';
import { ConfiguracoesCoordenador } from './pages/Configuracoes/ConfiguracoesCoordenador';
import { CadastrarTrilha } from './pages/Configuracoes/CadastrarTrilha';
import { VincularInstrutor } from './pages/Configuracoes/VincularInstrutor';
import { ConfiguracoesInstrutor } from './pages/Configuracoes/ConfiguracoesInstrutor';
import { CadastrarModulo } from './pages/Configuracoes/CadastrarModulo';
import { VincularModulo } from './pages/Configuracoes/VincularModulo';
import { AtividadeProvider } from './context/AtividadesContext';
import { AtividadesDetalhesNotas } from './pages/AtividadesMaisDetalhesNotas/AtividadeMaisDetalhesNotas';
import { NotasProvider } from './context/Notascontext';
import { ModuloProvider } from './context/ModuloContext';
import { ComentarioProvider } from './context/ComentarioContext';
import { AtividadesAluno } from './pages/Atividades/AtividadesAluno';
import { EntregaAtividade } from './pages/Atividades/EntregaAtividadeAluno';
import { DashBoard } from './pages/Dashboard/dashboardInstrutor';
import { DashBoardInformacoes } from './pages/Dashboard/dashboardInformacoes';
import { DashBoardFeedback } from './pages/Dashboard/dashboardFeedback';
import { DashBoardAdiciona } from './pages/Dashboard/dashboardAdiciona';
import { DashBoardAluno } from './pages/Dashboard/dashboardAluno';
import { DashBoardFeedbackAluno } from './pages/Dashboard/dashboardFeedbackAluno';
import { DashBoardVisualiza } from './pages/Dashboard/DashboardVisualiza';
import { PerfilProvider } from './context/PerfilContext';
import { PerfilGeral } from './pages/Perfil/PerfilGeral';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';
import { UsuarioListar } from './pages/Admin-Role/Usuario/UsuarioListar/UsuarioListar';
import { UsuarioCadastrar } from './pages/Admin-Role/Usuario/UsuarioCadastrar/UsuarioCadastrar';
import { UsuarioEditar } from './pages/Admin-Role/Usuario/UsuarioEditar/UsuarioEditar';
import { UsuarioCadastrarFoto } from './pages/Admin-Role/Usuario/UsuarioCadastrarFoto/UsuarioCadastrarFoto';
import { AdminRoute } from './routes/AdminRoute';
import { GestaoRoute } from './routes/GestaoRoute';
import { GestaoLayout } from './components/Layouts/Gestao';
import { CoordenadorRoute } from './routes/CoordenadorRoute';
import { CoordenadorLayout } from './components/Layouts/Coordenador';
import { InstrutorRoute } from './routes/InstrutorRoute';
import { InstrutorLayout } from './components/Layouts/Instrutor';
import { AlunoRoute } from './routes/AlunoRoute';
import { AlunoLayout } from './components/Layouts/Aluno';


export const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ToastContainer />
      <AuthProvider>
        <UsersProvider>
          <AlunoProvider>
            <VinculaTrilhaProvider>
              <AtividadeProvider>
                <ModuloProvider>
                  <NotasProvider>
                    <PerfilProvider>
                      <ComentarioProvider>
                        <Routes>
                          <Route path={'/'} element={<Login />} />
                          <Route element={<PrivateRoute />} >

                            <Route element={<AdminRoute />} >
                              <Route element={<AdminLayout />} >
                                <Route path={'/usuarios'} element={<UsuarioListar />} />
                                <Route path={'/usuarios/cadastrar'} element={<UsuarioCadastrar />} />
                                <Route path={'/usuarios/editar'} element={<UsuarioEditar />} />
                                <Route path={'/usuarios/cadastrar-foto'} element={<UsuarioCadastrarFoto />} />
                              </Route>
                            </Route>

                            <Route element={<GestaoRoute />} >
                              <Route element={<GestaoLayout />}>

                              </Route>
                            </Route>

                            <Route element={<CoordenadorRoute />}>
                              <Route element={<CoordenadorLayout />}>

                              </Route>
                            </Route>

                            <Route element={<InstrutorRoute />}>
                              <Route element={<InstrutorLayout />}>

                              </Route>
                            </Route>

                            <Route element={<AlunoRoute />}>
                              <Route element={<AlunoLayout />}>

                              </Route>
                            </Route>



                            <Route path={'/atividades'} element={<AtividadesInstrutor />} />
                            <Route path={'/atividades/criar'} element={<AtividadesCriar />} />
                            <Route path={'/atividades/aluno'} element={<AtividadesAluno />} />
                            <Route path={'/atividades/notas'} element={<AtividadesNotas />} />
                            <Route path={'/atividades/aluno/entrega/:idAtividade'} element={<EntregaAtividade />} />
                            <Route path={'/atividades/corrige/notas/:idUsuario/:idAtividade'} element={<AtividadesDetalhesNotas />} />
                            <Route path={'/alunos'} element={<Aluno />} />
                            <Route path={'/alunos/vincular'} element={<VinculaAluno />} />
                            <Route path={'/perfil'} element={<Perfil />} />
                            <Route path={'/perfil-instrutor'} element={<PerfilGeral />} />
                            <Route path={'/configuracoes'} element={<ConfiguracoesCoordenador />} />
                            <Route path={'/configuracoes/instrutor'} element={<ConfiguracoesInstrutor />} />
                            <Route path={'/configuracoes/adicionar-trilha'} element={<CadastrarTrilha />} />
                            <Route path={'/configuracoes/adicionar-modulo'} element={<CadastrarModulo />} />
                            <Route path={'/configuracoes/vincular-modulo'} element={<VincularModulo />} />
                            <Route path={'/configuracoes/vincular-instrutor'} element={<VincularInstrutor />} />
                            <Route path={'/dashboard'} element={<DashBoard />} />
                            <Route path={'/dashboard/aluno'} element={<DashBoardAluno />} />
                            <Route path={'/dashboard/informacoes'} element={<DashBoardInformacoes />} />
                            <Route path={'/dashboard/feedback'} element={<DashBoardFeedback />} />
                            <Route path={'/dashboard/feedback/aluno/:idUsuario'} element={<DashBoardFeedbackAluno />} />
                            <Route path={'/dashboard/feedback/visualiza-pontos/:idUsuario'} element={< DashBoardVisualiza />} />
                            <Route path={'/dashboard/feedback/adiciona-pontos/:idUsuario'} element={<DashBoardAdiciona />} />
                          </Route>
                        </Routes>
                      </ComentarioProvider>
                    </PerfilProvider>
                  </NotasProvider>
                </ModuloProvider>
              </AtividadeProvider>
            </VinculaTrilhaProvider>
          </AlunoProvider>
        </UsersProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
