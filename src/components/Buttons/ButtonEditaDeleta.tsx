import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { IButtonEditaDeleta } from '../../types/buttonEditaDeleta';

const ButtonEditaDeletaStyle = styled(Button)({
  backgroundColor: 'var(--cor-primaria)',
  color: "var(--branco)",
  width: 120,
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

export const ButtonEditaDeleta = ({ icone, label , id}: IButtonEditaDeleta): JSX.Element => {
  return (
    <ButtonEditaDeletaStyle variant="outlined" id={id} startIcon={icone}>
      <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden' textTransform='capitalize' fontSize={'1rem'} fontFamily='Inter'>
        {label}
      </Typography>
    </ButtonEditaDeletaStyle>
  )
}
