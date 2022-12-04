import { IButtonSmall } from '../../types/components';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ButtonSmallStyle = styled(Button)({
  backgroundColor: 'var(--cor-primaria)',
  color: "var(--branco)",
  width: 120,
  height: 30,
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

export const ButtonSmall = ({ label , id}: IButtonSmall): JSX.Element => {
  return (
    <ButtonSmallStyle variant="outlined" id={id}>
      <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden' textTransform='capitalize' fontSize={'1rem'} fontFamily='Inter'>
        {label}
      </Typography>
    </ButtonSmallStyle>
  )
}
