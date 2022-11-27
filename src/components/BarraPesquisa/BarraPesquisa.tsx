import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { IBarraPesquisa } from "../../types/barraDePesquisa";

const TextFieldStyle = styled(TextField)({
  heigth: 50,
  "& label.Mui-focused": {
    color: "var(--cor-primaria)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "var(--cor-primaria)",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "var(--cor-primaria)",
    },
  },
});

export default function BarraPesquisa({ label, id }: IBarraPesquisa) {
  return (
    <>
      <TextFieldStyle id={id} label={label} variant="standard" />
    </>
  );
}
