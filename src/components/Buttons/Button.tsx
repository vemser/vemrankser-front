import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { IButton } from '../../types/buttons';

const ButtonPrimaryStyle = styled(Button)({
  backgroundColor: 'var(--cor-primaria)',
  fontWeight: '500',
  height: 40,
  fontSize: '1rem',
  textTransform: 'capitalize',
  fontFamily: 'Inter',
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

export const ButtonPrimary = ({ label, id, type }:IButton):JSX.Element => {
  return (
    <ButtonPrimaryStyle type={type} id={id} variant="contained" disableElevation>
      {label}
    </ButtonPrimaryStyle>
  )
}
