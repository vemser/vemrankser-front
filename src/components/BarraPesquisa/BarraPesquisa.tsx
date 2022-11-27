import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { IBarraPesquisa } from "../../types/barraDePesquisa";

const TextFieldStyle = styled(TextField)({
  heigth: 50,
});

export default function BarraPesquisa({ label, id }: IBarraPesquisa) {
  return (
    <>
      <TextFieldStyle id={id} label={label} variant="standard" />
    </>
  );
}
