import { Link, useSearchParams } from "react-router-dom";
import { ButtonPrimary } from "../../components/Buttons/Button";
import { MenuLateral } from "../../components/MenuLateral/MenuLateral";
import { ButtonMenuLateral } from "../../components/Buttons/ButtonMenuLateral";
import { Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { HiUser, HiChartPie, HiAcademicCap, HiBookOpen, HiCog, HiSearch } from "react-icons/hi";
import { BarraDePesquisa, Titulo } from "../../components/Styles/Component.styled";
import { ButtonCardContainer, ButtonCardWrapper } from "../../components/Styles/ButtonCard";
import { useContext, useEffect, useMemo } from "react";
import { UsersContext } from "../../context/UserContext";
import { IUser } from "../../types/user";

export const Usuario = () => {
  const { getUsersList, user, totalPages } = useContext(UsersContext);
  const [searchParam, setSearchParams] = useSearchParams();

  const pagina = useMemo(() => {
    return Number(searchParam.get('pagina') || '1');
  }, [searchParam])

  useEffect(() => {
    getUsersList(pagina);
  }, [pagina]);

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
              />
              <i>
                <HiSearch size={"28px"} />
              </i>
            </BarraDePesquisa>

            <Link to={"/usuarios/cadastrar"}>
              <ButtonPrimary
                type={"button"}
                id={"botao-adiciona-usuario"}
                label={"Adicionar Usuário"}
              />
            </Link>
          </div>
          <ButtonCardWrapper>
            <TableContainer component={Paper} variant="outlined" sx={{ m: 1, width: 'auto' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontSize: '0.9rem', fontFamily: 'Inter' }} ><strong>Nome</strong></TableCell>
                    <TableCell sx={{ fontSize: '0.9rem', fontFamily: 'Inter' }}><strong>Email</strong></TableCell>
                    <TableCell sx={{ fontSize: '0.9rem', fontFamily: 'Inter' }}><strong>Status</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {user.map((usuario: IUser) => {
                    return (
                      <TableRow key={usuario.email}>
                        <TableCell  sx={{ width: 200, fontSize: '0.9rem', fontFamily: 'Inter' }}>{usuario.nome}</TableCell>
                        <TableCell sx={{ width: 300, fontSize: '0.9rem', fontFamily: 'Inter' }}>{usuario.email}</TableCell>
                        <TableCell sx={{ width: 100, fontSize: '0.9rem', fontFamily: 'Inter' }}>{usuario.statusUsuario == '1' ? 'Ativo' : 'Inativo'}</TableCell>
                      </TableRow>
                    )
                  })}
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