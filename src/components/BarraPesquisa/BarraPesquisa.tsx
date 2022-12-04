import TextField from "@mui/material/TextField";
import { IBarraPesquisa } from "../../types/components";

export default function BarraPesquisa({ label, id, value, setValue }: IBarraPesquisa) {
  return (
    <>
      <TextField id={id} label={label} variant="outlined" value={value} onChange={setValue} sx={{ width: 280, heigth: 50, backgroundColor: "white" }}
                fullWidth
                size="small" />
    </>
  );
}
