import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ButtonPrimary } from "../../../components/Buttons/Button";
import { Pagination, Paper, TableContainer, TextField } from "@mui/material";
import { HiSearch, HiPencilAlt, HiOutlinePhotograph } from "react-icons/hi";
import { BarraDePesquisa, Titulo } from "../../../components/Styles/Component.styled";
import { ButtonCardContainer } from "../../../components/Styles/ButtonCard";
import { useEffect, useMemo, useState } from "react";
import { IUser } from "../../../types/user";
import { api } from "../../../utils/api";
import { toast } from "react-toastify";
import { toastConfig } from "../../../types/toast";
import nProgress from 'nprogress';
import { DataGrid, GridActionsCellItem, GridRowParams, GridValueGetterParams } from "@mui/x-data-grid";
import { ButtonCardWrapperUser } from "./Usuario.styled";

export const Usuario = () => {
  const [searchParam, setSearchParams] = useSearchParams();
  const [user, setUser] = useState<IUser[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [input, setInput] = useState<string>('');
  const [dataTable, setDataTable] = useState(user);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const getUsersList = async (page: number) => {
    try {
      nProgress.start();

      api.defaults.headers.common['Authorization'] = token;

      const { data } = await api.get(`/usuario/lista-usuarios?pagina=${page - 1}&tamanho=6`);
      setTotalPages(data.quantidadePaginas);
      const dataTableFormatted = data.elementos.map((usuarios: IUser) => {
        return ({ ...usuarios, id: usuarios.idUsuario || Math.random() })
      })

      setUser(data.elementos);
      setDataTable(dataTableFormatted);
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
      const resultado = usuario.nome.toLowerCase().includes(input) || usuario.email.toLowerCase().includes(input);
      return resultado;
    })
    setDataTable(filterSearch);
  }

  const handleKeyPress = (event: any) => {
    if (event.charCode == 13) {
      filtraUsuario(input);
    }
  }

  function generateRandomId() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

  const columns: any[] = [
    { field: 'nome', headerName: 'Nome' },
    { field: 'email', headerName: 'Email', width: 300 },
    {
      field: 'tipoPerfil', headerName: 'Tipo',
      valueGetter: (params: GridValueGetterParams) =>
        `${verificaTipoUsuario(params.row.tipoPerfil)}`
    },
    {
      field: 'statusUsuario', headerName: 'Status',
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.statusUsuario == 1 ? 'Ativo' : 'Inativo'}`
    },
    {
      field: 'actions', type: 'actions', headerName: 'Ações', cellClassName: 'actions',
      getActions: (params: GridRowParams) => {
        return [
          <GridActionsCellItem icon={<HiPencilAlt size={20} />} label="Editar"
            onClick={() => navigate('/usuarios/editar', { state: params.row })}
            color="inherit"
            key={params.row.idUsuario}
          />,
          <GridActionsCellItem icon={<HiOutlinePhotograph size={20} />} label="Adicionar foto"
            onClick={() => navigate('/usuarios/cadastrar-foto', { state: params.row })}
            color="inherit"
            key={params.row.email}
          />,
        ];
      },
    },
  ]

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

  return (
    <ButtonCardContainer>
      <section>
        <Titulo>
          Usuários
        </Titulo>
        <div className="flex">
          <BarraDePesquisa>
            <TextField variant="outlined" sx={{ width: 280, backgroundColor: "white" }}
              fullWidth
              size="small"
              label={"Buscar por nome ou email"}
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
        <ButtonCardWrapperUser>
          <TableContainer component={Paper} variant="outlined" sx={{ height: '430px', width: '100%' }}>
            <DataGrid
              rows={dataTable}
              columns={columns}
              pageSize={6}
              rowsPerPageOptions={[6]}
              hideFooter={true}
              sx={{ height: '370px', minWidth: 'auto' }}
              getRowId={(row: any) =>  generateRandomId()}
            />
            <Pagination sx={{ width: '100%', height: 50, alignItems: 'center', display: 'flex', justifyContent: 'center' }}
              page={pagina}
              count={totalPages}
              onChange={(e, newPage) => setSearchParams({ pagina: newPage.toString() }, { replace: true })}
            />
          </TableContainer>
        </ButtonCardWrapperUser>
      </section>
    </ButtonCardContainer>
  );
};