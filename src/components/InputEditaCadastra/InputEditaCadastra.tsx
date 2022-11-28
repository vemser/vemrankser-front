import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { IInput } from '../../types/inputs';

const InputStyleEditaCadastra = styled(TextField)({
    width: 350,
    heigth: 50,
})

export const InputEditaCadastra = ({ label, id }: IInput): JSX.Element => {
    return (
        <InputStyleEditaCadastra id={id} label={label} variant="outlined" />
    )
}
