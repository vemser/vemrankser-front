import styled from "styled-components";

export const MenuLateralContainer = styled.div`
  height: 100vh;
  width: 20%;
  padding-top: 1.5%;
  padding-left: 0.5%;
  padding-right: 0.5%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--cor-primaria);
`;

export const MenuLateralTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  color: var(--branco);
  user-select: none;
  margin-bottom: 40px;
  font-family: "Fragment Mono", monospace;
  display: flex;
  gap: 2%;

  img {
    width: 20%;
  }
`;

export const FotoDePerfil = styled.div`
  height: 145.64px;
  width: 152.62px;
  background-color: var(--branco);
  border-radius: 100%;
  margin-top: 0.2%;
`;

export const NomeDoUsuario = styled.div`
  font-weight: 700;
  color: var(--branco);
  margin-top: 6%;
  text-transform: uppercase;
`;

export const CargoDoUsuario = styled.div`
  font-weight: inherit;
  color: var(--branco);
  margin-top: 5%;
`;

export const ButtonsCategorias = styled.div`
  margin-top: 15%;
`;

export const LogOut = styled.div`
  display: flex;
  gap: -1%;
  cursor: pointer;
  p {
    font-weight: 700;
    color: var(--branco);
  }
`;
