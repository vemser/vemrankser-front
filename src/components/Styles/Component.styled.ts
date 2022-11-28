import styled from 'styled-components';

export const Titulo = styled.h1`
    font-size: 1.8rem;
    font-weight: 500;
    user-select: none;
    color: var(--cor-texto);
    text-align: center;
    @media screen and (max-width: 460px) {
        font-size: 1.6rem;
    }
`

export const BarraDePesquisa = styled.div`
  display: flex;
    align-items: center;
    i{
      margin-left: -15px;
      cursor: pointer;
      background-color: var(--branco);
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      border: 1px solid #b5b5b5;
      transition: 0.5s;
      &:hover {
        transition: 0.5s;
        transform: scale(1.05);
        border-color: var(--cor-texto);
      }
      &:active {
        border: 2px solid var(--cor-primaria);
      }
    }
`