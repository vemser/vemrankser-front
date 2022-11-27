import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { IButtonMenuLateral } from '../../types/buttonMenuLateral';

const ButtonMenuLateralPrimaryStyle = styled(Button)({
  backgroundColor: 'var(--branco)',
  color: 'var(--cor-texto)',
  fontWeight: '500',
  fontFamily: 'Inter',
  width: 200,
  height: 40,
  marginBottom: '8%',
  textAlign: 'left',
  fontSize: '1rem',
  textTransform: 'capitalize',
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
        {text}
      </ButtonMenuLateralPrimaryStyle>
    </Link>
  )
}
