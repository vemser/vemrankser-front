import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { vinculaAlunoSchema } from "../../utils/schemas";
import { IEditaAluno } from "../../types/editaAluno";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { ButtonPrimary, ButtonSecondary } from "../../components/Buttons/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ButtonWraper, ContentWrapper } from "../../components/Styles/Container.styled";
import { ErrorMessage, Titulo } from "../../components/Styles/Component.styled";

export const VinculaAluno = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditaAluno>({
    resolver: yupResolver(vinculaAlunoSchema),
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
    <ContentWrapper>
      <Titulo>
        Adicionar aluno à trilha
      </Titulo>
      <form>
        <TextField
          id="nome-cadastra-aluno"
          label="Nome"
          variant="outlined"
          sx={{ width: "100%", marginBottom: "5%", marginTop: "10%", backgroundColor: 'white' }}
          {...register("nome")}
          size="small"
        />
        {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}

        <FormControl
          sx={{
            width: "100%",
            marginBottom: "5%",
            backgroundColor: "white",
          }}
          fullWidth
          size="small"
        >
          <InputLabel id="select-cadastra-trilha" {...register("trilha")}>
            Trilha
          </InputLabel>
          {errors.trilha && <ErrorMessage>{errors.trilha.message}</ErrorMessage>}
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
  );
};
