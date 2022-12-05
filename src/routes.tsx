import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PrivateRoute } from './routes/PrivateRoute';
import { UsersProvider } from './context/UserContext';
import { AlunoProvider } from './context/AlunoContext';
import { VinculaTrilhaProvider } from './context/VinculaTrilhaContext';
import { AuthProvider } from './context/AuthContext';
import { AtividadeProvider } from './context/AtividadesContext';
import { NotasProvider } from './context/Notascontext';
import { ModuloProvider } from './context/ModuloContext';
import { ComentarioProvider } from './context/ComentarioContext';
import { PerfilProvider } from './context/PerfilContext';
import { Login } from './pages/Login/Login';
import { AdminRoute } from './routes/AdminRoute';
import { GestaoRoute } from './routes/GestaoRoute';
import { CoordenadorRoute } from './routes/CoordenadorRoute';
import { InstrutorRoute } from './routes/InstrutorRoute';
import { AlunoRoute } from './routes/AlunoRoute';
import { AdminLayout } from './components/Layouts/Admin';
import { GestaoLayout } from './components/Layouts/Gestao';
import { CoordenadorLayout } from './components/Layouts/Coordenador';
import { InstrutorLayout } from './components/Layouts/Instrutor';
import { AlunoLayout } from './components/Layouts/Aluno';
import { UsuarioListar } from './pages/Admin-Role/Usuario/UsuarioListar/UsuarioListar';
import { UsuarioCadastrar } from './pages/Admin-Role/Usuario/UsuarioCadastrar/UsuarioCadastrar';
import { UsuarioEditar } from './pages/Admin-Role/Usuario/UsuarioEditar/UsuarioEditar';
import { UsuarioCadastrarFoto } from './pages/Admin-Role/Usuario/UsuarioCadastrarFoto/UsuarioCadastrarFoto';
import { AlunoListarGestor } from './pages/Gestor-Role/Alunos-Section/AlunoListar';
import { DashBoardGestor } from './pages/Gestor-Role/Dashboard-Section/Dashboard/Dashboard';
import { DashBoardFeedbackGestor } from './pages/Gestor-Role/Dashboard-Section/Feedback/DashboardFeedback';
import { PerfilGestor } from './pages/Gestor-Role/Perfil-Section/Perfil';
import { DashBoardCoordenador } from './pages/Coordenador-Role/Dashboard-Section/Dashboard/Dashboard';
import { DashBoardFeedback } from './pages/Coordenador-Role/Dashboard-Section/Feedback/DashboardFeedback';
import { DashBoardInformacoesCoordenador } from './pages/Coordenador-Role/Dashboard-Section/Informações/DashboardInformacoes';
import { PerfilCoordenador } from './pages/Coordenador-Role/Perfil-Section/Perfil';
import { ConfiguracoesCoordenador } from './pages/Coordenador-Role/Configuracoes-Section/Configuracoes/ConfiguracoesCoordenador';
import { CadastrarTrilha } from './pages/Coordenador-Role/Configuracoes-Section/CadastrarTrilha/CadastrarTrilha';
import { VincularInstrutor } from './pages/Coordenador-Role/Configuracoes-Section/VincularInstrutor/VincularInstrutor';
import { AlunoListarCoordenador } from './pages/Coordenador-Role/Alunos-Section/AlunoListar';
import { DashBoardInstrutor } from './pages/Instrutor-Role/Dashboard-Section/Dashboard/Dashboard';
import { DashBoardFeedbackInstrutor } from './pages/Instrutor-Role/Dashboard-Section/Feedback/DashboardFeedback';
import { AdicionarFeedback } from './pages/Instrutor-Role/Dashboard-Section/FeedbackAdicionar/dashboardAdiciona';
import { DashBoardInformacoesInstrutor } from './pages/Instrutor-Role/Dashboard-Section/Informações/DashboardInformacoes';
import { AtividadesInstrutor } from './pages/Instrutor-Role/Atividades-Section/Atividades/Atividades';
import { AtividadesCriar } from './pages/Instrutor-Role/Atividades-Section/AtividadeCriar/AtividadesCriar';
import { AtividadesNotas } from './pages/Instrutor-Role/Atividades-Section/AtividadeNota/AtividadesNotas';
import { ConfiguracoesInstrutor } from './pages/Instrutor-Role/Configuracoes-Section/Configuracoes/ConfiguracoesCoordenador';
import { CadastrarModulo } from './pages/Instrutor-Role/Configuracoes-Section/CadastrarModulo/CadastrarModulo';
import { VincularModulo } from './pages/Instrutor-Role/Configuracoes-Section/VincularModulo/VincularModulo';
import { PerfilInstrutor } from './pages/Instrutor-Role/Perfil-Section/Perfil';
import { DashBoardAluno } from './pages/Aluno-Role/Dashboard-Section/Dashboard';
import { EntregaAtividade } from './pages/Aluno-Role/Atividades-Section/AtividadesEntregar/EntregaAtividadeAluno';
import { PerfilAluno } from './pages/Aluno-Role/Perfil-Section/Perfil';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';
import { FeedbackPontosGestor } from './pages/Gestor-Role/Dashboard-Section/FeedbackPontos/FeedbackPontos';
import { FeedbackPontosCoordenador } from './pages/Coordenador-Role/Dashboard-Section/FeedbackPontos/FeedbackPontos';
import { DashBoardInformacoes } from './pages/Gestor-Role/Dashboard-Section/Informações/DashboardInformacoes';
import { FeedbackPontosInstrutor } from './pages/Instrutor-Role/Dashboard-Section/FeedbackPontos/FeedbackPontos';
import { AtividadesCorrigir } from './pages/Instrutor-Role/Atividades-Section/AtividadeCorrigir/AtividadeCorrigir';
import { VinculaAluno } from './pages/Instrutor-Role/Alunos-Section/AlunoVincular/AlunoVincular';
import { AlunoListar } from './pages/Instrutor-Role/Alunos-Section/AlunoListar/AlunoListar';
import { AtividadesAluno } from './pages/Aluno-Role/Atividades-Section/AtividadesLista/Atividades';


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
                                <Route path={'/adm/usuarios'} element={<UsuarioListar />} />
                                <Route path={'/adm/usuarios/cadastrar'} element={<UsuarioCadastrar />} />
                                <Route path={'/adm/usuarios/editar'} element={<UsuarioEditar />} />
                                <Route path={'/adm/usuarios/cadastrar-foto'} element={<UsuarioCadastrarFoto />} />
                              </Route>
                            </Route>

                            <Route element={<GestaoRoute />} >
                              <Route element={<GestaoLayout />}>
                                <Route path={'/gestor/alunos'} element={<AlunoListarGestor />} />
                                <Route path={'/gestor/dashboard'} element={<DashBoardGestor />} />
                                <Route path={'/gestor/dashboard/feedback'} element={<DashBoardFeedbackGestor />} />
                                <Route path={'/gestor/dashboard/feedback/pontos/:idUsuario'} element={<FeedbackPontosGestor />} />
                                <Route path={'/gestor/dashboard/informacoes'} element={<DashBoardInformacoes />} />
                                <Route path={'/gestor/perfil'} element={<PerfilGestor />} />
                              </Route>
                            </Route>

                            <Route element={<CoordenadorRoute />}>
                              <Route element={<CoordenadorLayout />}>
                                <Route path={'/coordenador/dashboard'} element={<DashBoardCoordenador />} />
                                <Route path={'/coordenador/dashboard/feedback'} element={<DashBoardFeedback />} />
                                <Route path={'/coordenador/dashboard/feedback/pontos/:idUsuario'} element={<FeedbackPontosCoordenador />} />
                                <Route path={'/coordenador/dashboard/informacoes'} element={<DashBoardInformacoesCoordenador />} />
                                <Route path={'/coordenador/perfil'} element={<PerfilCoordenador />} />
                                <Route path={'/coordenador/configuracoes'} element={<ConfiguracoesCoordenador />} />
                                <Route path={'/coordenador/configuracoes/cadastrar-trilha'} element={<CadastrarTrilha />} />
                                <Route path={'/coordenador/configuracoes/vincular-instrutor'} element={<VincularInstrutor />} />
                                <Route path={'/coordenador/alunos'} element={<AlunoListarCoordenador />} />
                                <Route path={'/coordenador/perfil'} element={<PerfilCoordenador />} />
                              </Route>
                            </Route>

                            <Route element={<InstrutorRoute />}>
                              <Route element={<InstrutorLayout />}>
                                <Route path={'/instrutor/dashboard'} element={<DashBoardInstrutor />} />
                                <Route path={'/instrutor/dashboard/feedback'} element={<DashBoardFeedbackInstrutor />} />
                                <Route path={'/instrutor/dashboard/feedback/pontos/:idUsuario'} element={<FeedbackPontosInstrutor />} />
                                <Route path={'/instrutor/dashboard/feedback/adicionar'} element={<AdicionarFeedback />} />
                                <Route path={'/instrutor/dashboard/informacoes'} element={<DashBoardInformacoesInstrutor />} />
                                <Route path={'/instrutor/alunos'} element={<AlunoListar />} />
                                <Route path={'/instrutor/alunos/vincular'} element={<VinculaAluno />} />
                                <Route path={'/instrutor/atividades'} element={<AtividadesInstrutor />} />
                                <Route path={'/instrutor/atividades/criar'} element={<AtividadesCriar />} />
                                <Route path={'/instrutor/atividades/notas'} element={<AtividadesNotas />} />
                                <Route path={'/instrutor/atividades/corrigir/:idUsuario/:idAtividade'} element={<AtividadesCorrigir />} />
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
    </BrowserRouter >
  )
}
