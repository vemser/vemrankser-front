import TextField from "@mui/material/TextField";
import { HiUser } from "react-icons/hi";
import { IBarraPesquisa } from "../../types/barraDePesquisa";

export default function BarraPesquisa({ label, id }: IBarraPesquisa) {
  return (
    <>
      <TextField id={id} label={label} variant="outlined"  sx={{ width: 200, heigth: 50, backgroundColor: "white" }}
                fullWidth
                size="small" />
    </>
  );
}
