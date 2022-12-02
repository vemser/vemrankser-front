import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { IButton } from '../../types/buttons';

const ButtonCorrigirStyle = styled(Button)({
  backgroundColor: 'var(--cor-primaria)',
  width: 200,
  height: 40,
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



export const ButtonCorrigir = ({ onClick, id, label, type}:IButton):JSX.Element => {
  return (
    <ButtonCorrigirStyle type={type} id={id} variant="contained" disableElevation>
      <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden' textTransform='capitalize' fontSize={'1rem'} fontFamily='Inter'>
        {label}
      </Typography>
    </ButtonCorrigirStyle>
  )
}
