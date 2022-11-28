import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editaAlunoSchema } from "../../utils/schemas";
import { IEditaAluno } from "../../types/editaAluno";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { ButtonMenuLateral } from "../../components/Buttons/ButtonMenuLateral";
import { ButtonPrimary, ButtonSecondary } from "../../components/Buttons/Button";
import { MenuLateral } from "../../components/MenuLateral/MenuLateral";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { HiAcademicCap,HiBookOpen,HiChartPie,HiCog,HiUser} from "react-icons/hi";
import { ButtonWraper, ContentWrapper, MainContainer } from "../../components/Styles/Container.styled";
import { Titulo } from "../../components/Styles/Component.styled";

export const EditaAluno = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditaAluno>({
    resolver: yupResolver(editaAlunoSchema),
  });

  const [trilha, setTrilha] = React.useState("");
  const [modulo, setModulo] = React.useState("");

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setTrilha(event.target.value as string);
  };

  const handleChangeSelect2 = (event: SelectChangeEvent) => {
    setModulo(event.target.value as string);
  };

  return (
    <>
      <MainContainer>
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
        <ContentWrapper>
          <Titulo>
            Editar Aluno
          </Titulo>
          <form>
            <TextField
              id="nome-edita-aluno"
              label="Nome"
              variant="outlined"
              sx={{ width: "100%", marginBottom: "5%", marginTop: "10%", backgroundColor: 'white' }}
              size="small"
              {...register("nome")}
            />
            {errors.nome && <span>{errors.nome.message}</span>}

            <FormControl
              sx={{
                marginBottom: "5%",
                backgroundColor: "white",
              }}
              fullWidth
              size="small"
            >
              <InputLabel id="select-edita-trilha" {...register("trilha")}>
                Trilha
              </InputLabel>
              {errors.trilha && <span>{errors.trilha.message}</span>}
              <Select
                labelId="select-edita-trilha"
                id="edita-trilha"
                value={trilha}
                label="Trilha"
                onChange={handleChangeSelect}
              >
                <MenuItem value={"geral"}>Geral</MenuItem>
                <MenuItem value={"backend"}>Backend</MenuItem>
                <MenuItem value={"frontend"}>Frontend</MenuItem>
                <MenuItem value={"qa"}>QA</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{
                width: "100%",
                marginBottom: "5%",
                backgroundColor: "white",
              }}
              fullWidth
              size="small"
            >
              <InputLabel id="select-edita-modulo" {...register("modulo")}>
                Módulo
              </InputLabel>
              {errors.modulo && <span>{errors.modulo.message}</span>}
              <Select
                labelId="select-edita-modulo"
                id="edita-modulo"
                value={modulo}
                label="Modulo"
                onChange={handleChangeSelect2}
                size="small"
              >
                <MenuItem value={"modulo1"}>Módulo 1</MenuItem>
                <MenuItem value={"modulo2"}>Módulo 2</MenuItem>
                <MenuItem value={"modulo3"}>Módulo 3</MenuItem>
                <MenuItem value={"modulo4"}>Módulo 4</MenuItem>
              </Select>
            </FormControl>
            <ButtonWraper>
              <ButtonPrimary
                label="Adicionar"
                id="button-edita-aluno"
                type="submit"
              />
              <Link to="/alunos">
                <ButtonSecondary
                  label="Cancelar"
                  id="button-cancela-aluno"
                  type="button"
                />
              </Link>
            </ButtonWraper>
          </form>
        </ContentWrapper>
      </MainContainer>
    </>
  );
};
