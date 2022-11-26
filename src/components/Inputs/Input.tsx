import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { IInput } from '../../types/inputs';

const InputStyle = styled(TextField)({
    width: 350,
    heigth: 50,
    '& label.Mui-focused': {
        color: 'var(--cor-primaria)'
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'var(--cor-primaria)'
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: 'var(--cor-primaria)'
        }
    }
})

export const Input = ({ label, id }: IInput): JSX.Element => {
    return (
        <InputStyle id={id} label={label} variant="outlined" />
    )
}
