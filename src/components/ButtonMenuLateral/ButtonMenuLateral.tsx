import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { IButtonMenuLateral } from '../../types/buttonMenuLateral';

const ButtonMenuLateralPrimaryStyle = styled(Button)({
  backgroundColor: 'var(--branco)',
  color: 'var(--cor-primaria)',
  fontWeight: '500',
  width: 240,
  height: 40,
  marginBottom: '10%',
  textAlign: 'center',
  fontSize: '1.2rem',
  textTransform: 'capitalize',
  '&:hover': { 
    backgroundColor: 'var(--branco)'
  },
})

export const ButtonMenuLateral = ({ text, icone, link }:IButtonMenuLateral):JSX.Element => {
  return (
    <Link to={link}>
      <ButtonMenuLateralPrimaryStyle variant="contained"  id='menu-lateral-button' startIcon={icone} disableElevation>
      {text}
    </ButtonMenuLateralPrimaryStyle>
    </Link>
  )
}
