import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from '@mui/material/styles';

const InputLabelStyle = styled(InputLabel)({
  width: 355,
  heigth: 50,
  "& .MuiOutlinedInput-notchedOutline": {
    color: "var(--cor-primaria)",
  },
  "": {
    borderColor: "var(--cor-primaria)",
  },
  "& .MuiOutlinedInput-root": {
      borderColor: "var(--cor-primaria)",
  },
});


export interface ISelectAluno {
  label: string,
  id: string,
}

export default function SelectAluno({label, id}: ISelectAluno) {
  const [trilhaSelect, setTrilhaSelect] = React.useState("");
  
  const handleChange = (event: SelectChangeEvent) => {
    setTrilhaSelect(event.target.value as string);
  };
  return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabelStyle id={id}>{label}</InputLabelStyle>
        <Select
          value={trilhaSelect}
          label="Trilha"
          onChange={handleChange}
        >
          <MenuItem value={10}>Front-end</MenuItem>
          <MenuItem value={20}>Back-end</MenuItem>
          <MenuItem value={30}>QA</MenuItem>
        </Select>
      </FormControl>
  );
}
