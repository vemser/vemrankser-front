import { Link, useSearchParams } from "react-router-dom";
import { ButtonPrimary } from "../../components/Buttons/Button";
import { MenuLateral } from "../../components/MenuLateral/MenuLateral";
import { ButtonMenuLateral } from "../../components/Buttons/ButtonMenuLateral";
import { Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { HiUser, HiChartPie, HiAcademicCap, HiBookOpen, HiCog, HiSearch, HiUsers } from "react-icons/hi";
import { BarraDePesquisa, Titulo } from "../../components/Styles/Component.styled";
import { ButtonCardContainer, ButtonCardWrapper } from "../../components/Styles/ButtonCard";
import { useEffect, useMemo, useState } from "react";
import { IUser } from "../../types/user";
import { api } from "../../utils/api";
import { toast } from "react-toastify";
import { toastConfig } from "../../types/toast";
import nProgress from 'nprogress';

export const Usuario = () => {
  const [searchParam, setSearchParams] = useSearchParams();
  const [user, setUser] = useState<IUser[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [input, setInput] = useState<string>('');
  const [dataTable, setDataTable] = useState(user);
  const token = localStorage.getItem('token');

  const getUsersList = async (page: number) => {
    try {
      nProgress.start();

      api.defaults.headers.common['Authorization'] = token;
      const { data } = await api.get(`/usuario/lista-usuarios?pagina=${page - 1}&tamanho=6`);
      setTotalPages(data.quantidadePaginas);

      setUser(data.elementos);
      setDataTable(data.elementos);
    } catch (error) {
      console.error(error);
      toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
    } finally {
      nProgress.done();
    }
  }

  const pagina = useMemo(() => {
    return Number(searchParam.get('pagina') || '1');
  }, [searchParam]);

  useEffect(() => {
    getUsersList(pagina);
  }, [pagina]);

  function filtraUsuario(input: string) {
    const filterSearch = user.filter((usuario) => {
      const resultado = usuario.nome.toLowerCase().includes(input) || usuario.email.toLowerCase().includes(input)
      return resultado
    })
    setDataTable(filterSearch)
  }

  const handleKeyPress = (event: any) => {
    if (event.charCode == 13) {
      filtraUsuario(input);
    }
  }

  function verificaTipoUsuario(tipoPerfil: number) {
    switch (tipoPerfil) {
      case 1:
        return 'Coordenador'

      case 2:
        return 'Aluno'

      case 3:
        return 'Instrutor'

      case 4:
        return 'Admin'

      case 5:
        return 'Gestão'

      default:
        return 'Indefinido'
    }
  }

  console.log(user)

  return (
    <>
      <ButtonCardContainer>
        <MenuLateral
          nomeDoUsuario={"Luiza Valentini"}
          cargoDoUsuario={"ADMIN"}
          fotoDePerfil={""}
        >
          <ButtonMenuLateral
            text={"Dashboard"}
            icone={<HiChartPie />}
            link={"/dashboard"}
          />
          <ButtonMenuLateral
            text={"Usuários"}
            icone={<HiUsers />}
            link={"/usuarios"}
          />
          <ButtonMenuLateral
            text={"Alunos"}
            icone={<HiAcademicCap />}
            link={"/alunos"}
          />
          <ButtonMenuLateral
            text={"Atividades"}
            icone={<HiBookOpen />}
            link={"/atividades"}
          />
          <ButtonMenuLateral
            text={"Perfil"}
            icone={<HiUser />}
            link={"/perfil"}
          />
          <ButtonMenuLateral
            text={"Configurações"}
            icone={<HiCog />}
            link={"/configurações"}
          />
        </MenuLateral>
        <section>
          <Titulo>
            Usuários
          </Titulo>
          <div className="flex">
            <BarraDePesquisa>
              <TextField variant="outlined" sx={{ width: 300, heigth: 50, backgroundColor: "white" }}
                fullWidth
                size="small"
                label={"Filtrar por nome ou email"}
                id={"barra-de-pesquisa-usuario"}
                onChange={(search) => setInput(search.target.value.toLowerCase())}
                onKeyPress={handleKeyPress}
              />
              <i>
                <HiSearch size={"28px"}
                  onClick={() => filtraUsuario(input)} />
              </i>
            </BarraDePesquisa>

            <Link to={"/usuarios/cadastrar"}>
              <ButtonPrimary
                type={"button"}
                id={"botao-adiciona-usuario"}
                label={"Cadastrar usuário"}
              />
            </Link>
          </div>
          <ButtonCardWrapper>
            <TableContainer component={Paper} variant="outlined" sx={{ m: 1, width: 'auto', height: 440 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{  width: 200, fontSize: '0.9rem', fontFamily: 'Inter' }} ><strong>Nome</strong></TableCell>
                    <TableCell sx={{  width: 300, fontSize: '0.9rem', fontFamily: 'Inter' }}><strong>Email</strong></TableCell>
                    <TableCell sx={{  width: 180, fontSize: '0.9rem', fontFamily: 'Inter' }}><strong>Tipo</strong></TableCell>
                    <TableCell sx={{ width: 100, fontSize: '0.9rem', fontFamily: 'Inter' }}><strong>Status</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataTable.length !== 0 ? dataTable.map((usuario: IUser) => {
                    console.log(usuario.tipoPerfil)
                    return (
                      <TableRow key={usuario.email}>
                        <TableCell sx={{ fontSize: '0.9rem', fontFamily: 'Inter' }}>{usuario.nome}</TableCell>
                        <TableCell sx={{ fontSize: '0.9rem', fontFamily: 'Inter' }}>{usuario.email}</TableCell>
                        <TableCell sx={{ fontSize: '0.9rem', fontFamily: 'Inter' }}>{verificaTipoUsuario(usuario.tipoPerfil)}</TableCell>
                        <TableCell sx={{ fontSize: '0.9rem', fontFamily: 'Inter' }}>{usuario.statusUsuario == '1' ? 'Ativo' : 'Inativo'}</TableCell>
                      </TableRow>
                    )
                  }) : <p>Nenhum resultado encontrado.</p>}
                </TableBody>
              </Table>
              <Pagination sx={{ width: '100%', height: 50, alignItems: 'center', display: 'flex', justifyContent: 'center' }}
                page={pagina}
                count={totalPages}
                onChange={(e, newPage) => setSearchParams({ pagina: newPage.toString() }, { replace: true })}
              />
            </TableContainer>
          </ButtonCardWrapper>
        </section>
      </ButtonCardContainer>
    </>
  );
};