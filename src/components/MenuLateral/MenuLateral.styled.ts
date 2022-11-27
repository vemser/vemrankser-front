import styled from "styled-components";

export const MenuLateralContainer = styled.div`
  min-height: 100vh;
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
    width: 35px;
    padding-top: 5px;
  }
`;

export const FotoDePerfil = styled.div`
  height: 120px;
  width: 130px;
  background-color: var(--branco);
  border-radius: 50%;
  margin-top: 0.2%;
  object-fit: cover;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const NomeDoUsuario = styled.div`
  font-weight: 500;
  font-size: 1.1rem;
  color: var(--branco);
  margin-top: 6%;
  text-transform: capitalize;
  user-select: none;
`;

export const CargoDoUsuario = styled.div`
  font-weight: inherit;
  color: var(--cor-texto);
  text-transform: uppercase;
  font-size: 0.9rem;
  margin-top: 3%;
  font-weight: 700;
  user-select: none;
`;

export const ButtonsCategorias = styled.div`
  margin-top: 15%;
  margin-bottom: 5%;
`;

export const LogOut = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  gap: 1%;
  cursor: pointer;
  transition: 0.5s;
  p {
    font-weight: 800;
    color: var(--cor-texto);
  }
  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
`;
