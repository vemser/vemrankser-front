import TextField from "@mui/material/TextField";
import { IBarraPesquisa } from "../../types/barraDePesquisa";

export default function BarraPesquisa({ label, id }: IBarraPesquisa) {
  return (
    <>
      <TextField id={id} label={label} variant="standard" />
    </>
  );
}
