import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { IButtonMenuLateral } from '../../types/buttonMenuLateral';

const ButtonMenuLateralPrimaryStyle = styled(Button)({
  backgroundColor: 'var(--branco)',
  color: 'var(--cor-texto)',
  width: 190,
  height: 40,
  textAlign: 'left',
  fontSize: '1rem',
  justifyContent: 'flex-start',
  '&:hover': {
    backgroundColor: 'var(--branco)',
    color: 'var(--cor-primaria)'
  },
})

export const ButtonMenuLateral = ({ text, icone, link }: IButtonMenuLateral): JSX.Element => {
  return (
    <Link to={link}>
      <ButtonMenuLateralPrimaryStyle variant="contained" id='menu-lateral-button' startIcon={icone} disableElevation>
      <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden' textTransform='capitalize' fontSize={'1rem'} fontFamily='Inter'>
        {text}
      </Typography>
      </ButtonMenuLateralPrimaryStyle>
    </Link>
  )
}
