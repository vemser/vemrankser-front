import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { HiTrash } from 'react-icons/hi';
import { IButtonEditaDeleta } from '../../types/buttonEditaDeleta';
import { IButton } from '../../types/buttons';

const ButtonEditaDeletaStyle = styled(Button)({
  backgroundColor: 'var(--cor-primaria)',
  color: "var(--branco)",
  fontWeight: '500',
  width: 105,
  height: 40,
  fontSize: '1.1rem',
  textTransform: 'capitalize',
  transition: '0.5s',
  '&:hover': { 
    transition: '0.5s',
    transform: 'scale(1.02)',
    backgroundColor: 'var(--botao-hover)'
  },
  '&:active': {
    backgroundColor: 'var(--botao-active)'
  }
})

export const ButtonEditaDeleta = ({icone, label}:IButtonEditaDeleta):JSX.Element => {
  return (
    <ButtonEditaDeletaStyle variant="outlined" startIcon={icone}>
   {label}
  </ButtonEditaDeletaStyle>
  )
}
