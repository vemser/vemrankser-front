import { IButton } from '../../types/components';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ButtonPrimaryStyle = styled(Button)({
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

const ButtonSecondaryStyle = styled(Button)({
  backgroundColor: 'var(--cor-de-fundo)',
  border: '2px solid var(--cor-primaria)',
  width: 200,
  height: 40,
  transition: '0.5s',
  color: 'var(--cor-primaria)',
  '&:hover': { 
    transition: '0.5s',
    transform: 'scale(1.02)',
    backgroundColor: 'var(--branco)'
  },
  '&:active': {
    backgroundColor: 'var(--branco)'
  }
})

export const ButtonPrimary = ({ label, id, type, onClick }:IButton):JSX.Element => {
  return (
    <ButtonPrimaryStyle type={type} onClick={onClick} id={id} variant="contained" disableElevation>
      <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden' textTransform='capitalize' fontSize={'1rem'} fontFamily='Inter'>
        {label}
      </Typography>
    </ButtonPrimaryStyle>
  )
}

export const ButtonSecondary = ({ label, id, type }:IButton):JSX.Element => {
  return (
    <ButtonSecondaryStyle type={type} id={id} variant="contained" disableElevation>
      <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden' textTransform='capitalize' fontSize={'1rem'} fontFamily='Inter' fontWeight={600}>
        {label}
      </Typography>
    </ButtonSecondaryStyle>
  )
}