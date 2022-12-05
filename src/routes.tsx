import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AtividadesInstrutor } from './pages/Atividades/AtividadesInstrutor';
import { AtividadesCriar } from './pages/AtividadesCriar/AtividadesCriar';
import { AtividadesNotas } from './pages/AtividadesNotas/AtividadesNotas';
import { Aluno } from './pages/Z/Aluno/Aluno';
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
import { DashBoard, DashBoardGestor } from './pages/Gestor-Role/Dashboard-Section/Dashboard/Dashboard';
import { DashBoardInformacoes } from './pages/Gestor-Role/Dashboard-Section/Informações/DashboardInformacoes';
import { DashBoardFeedback, DashBoardFeedbackGestor } from './pages/Gestor-Role/Dashboard-Section/Feedback/DashboardFeedback';
import { DashBoardAdiciona } from './pages/Dashboard/dashboardAdiciona';
import { DashBoardAluno } from './pages/Dashboard/dashboardAluno';
import { DashBoardFeedbackAluno } from './pages/Dashboard/dashboardFeedbackAluno';
import { DashBoardVisualiza } from './pages/Dashboard/DashboardVisualiza';
import { PerfilProvider } from './context/PerfilContext';
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
import { PerfilAluno } from './pages/Aluno-Role/Perfil-Section/Perfil';
import { AlunoListar } from './pages/Instrutor-Role/Alunos-Section/AlunoListar';
import { DashBoardFeedbackInstrutor } from './pages/Instrutor-Role/Dashboard-Section/Feedback/DashboardFeedback';
import { AdicionarFeedback } from './pages/Instrutor-Role/Dashboard-Section/FeedbackAdicionar/dashboardAdiciona';
import { DashBoardInformacoesInstrutor } from './pages/Instrutor-Role/Dashboard-Section/Informações/DashboardInformacoes';
import { PerfilInstrutor } from './pages/Instrutor-Role/Perfil-Section/Perfil';
import { AlunoListarGestor } from './pages/Gestor-Role/Alunos-Section/AlunoListar';
import { ButtonCardDashboardInformacoes } from './pages/Gestor-Role/Styles/Dashboard.styled';
import { PerfilGestor } from './pages/Gestor-Role/Perfil-Section/Perfil';
import { DashBoardCoordenador } from './pages/Coordenador-Role/Dashboard-Section/Dashboard/Dashboard';
import { ButtonCardDashboardFeedback } from './pages/Coordenador-Role/Styles/Dashboard.styled';
import { DashBoardInformacoesCoordenador } from './pages/Coordenador-Role/Dashboard-Section/Informações/DashboardInformacoes';
import { PerfilCoordenador } from './pages/Coordenador-Role/Perfil-Section/Perfil';
import { AlunoListarCoordenador } from './pages/Coordenador-Role/Alunos-Section/AlunoListar';
import { DashBoardInstrutor } from './pages/Instrutor-Role/Dashboard-Section/Dashboard/Dashboard';


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
                                <Route path={'/gestor/alunos'} element={<AlunoListarGestor />} />
                                <Route path={'/gestor/dashboard'} element={<DashBoardGestor />} />
                                <Route path={'/gestor/feedback'} element={<DashBoardFeedbackGestor />} />
                                <Route path={'/gestor/feedback/adicionar'} element={<AdicionarFeedbackGestor />} />
                                <Route path={'/gestor/dashboard/informacoes'} element={<ButtonCardDashboardInformacoes />} />
                                <Route path={'/gestor/perfil'} element={<PerfilGestor />} />
                              </Route>
                            </Route>
                          </Route>

                          <Route element={<CoordenadorRoute />}>
                            <Route element={<CoordenadorLayout />}>
                              <Route path={'/cordenador/dashboard'} element={<DashBoardCoordenador />} />
                              <Route path={'/cordenador/dashboard/feedback'} element={<ButtonCardDashboardFeedback />} />
                              <Route path={'/cordenador/feedback/adicionar'} element={<AdicionarFeedbackCoordenador />} />
                              <Route path={'/cordenador/dashboard/informacoes'} element={<DashBoardInformacoesCoordenador />} />
                              <Route path={'/cordenador/perfil'} element={<PerfilCoordenador />} />
                              <Route path={'/cordenador/configuracoes'} element={<ConfiguracoesCoordenador />} />
                              <Route path={'/cordenador/configuracoes/cadastrar-trilha'} element={<CadastrarTrilha />} />
                              <Route path={'/coordenador/configuracoes/vincular-instrutor'} element={<VincularInstrutor />} />
                              <Route path={'/coordenador/alunos'} element={<AlunoListarCoordenador />} />
                              <Route path={'/coordenador/perfil'} element={<PerfilCoordenador />} />
                            </Route>

                            <Route element={<InstrutorRoute />}>
                              <Route element={<InstrutorLayout />}>
                                <Route path={'/instrutor/dashboard'} element={<DashBoardInstrutor />} />
                                <Route path={'/instrutor/dashboard/feedback'} element={<DashBoardFeedbackInstrutor />} />
                                <Route path={'/instrutor/dashboard/feedback/adicionar'} element={<AdicionarFeedback />} />
                                <Route path={'/instrutor/dashboard/informacoes'} element={<DashBoardInformacoesInstrutor />} />
                                <Route path={'/instrutor/alunos'} element={<AlunoListar />} />
                                <Route path={'/instrutor/atividades'} element={<AtividadesInstrutor />} />
                                <Route path={'/instrutor/atividades/criar'} element={<AtividadesCriar />} />
                                <Route path={'/instrutor/atividades/corrigir'} element={<AtividadesNotas />} />
                                <Route path={'/instrutor/configuracoes'} element={<ConfiguracoesInstrutor />} />
                                <Route path={'/instrutor/configuracoes/cadastrar-modulo'} element={<CadastrarModulo />} />
                                <Route path={'/instrutor/configuracoes/vincular-modulo'} element={<VincularModulo />} />
                                <Route path={'/instrutor/perfil'} element={<PerfilInstrutor />} />
                              </Route>
                            </Route>

                            <Route element={<AlunoRoute />}>
                              <Route element={<AlunoLayout />}>
                                <Route path={'/aluno/dashboard'} element={<DashBoardAluno />} />
                                <Route path={'/aluno/atividades'} element={<AtividadesAluno />} />
                                <Route path={'/aluno/atividades/entrega/:idAtividade'} element={<EntregaAtividade />} />
                                <Route path={'/aluno/perfil'} element={<PerfilAluno />} />
                              </Route>
                            </Route>
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
