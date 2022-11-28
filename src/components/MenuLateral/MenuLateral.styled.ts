import styled from "styled-components";

interface menuLateralContainerProps{
  mobileOpen: boolean;
}

export const MenuLateralContainer = styled.div<menuLateralContainerProps>`
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
  @media (max-width: 1000px) {
    display:${(props) => props.mobileOpen ? 'flex' : 'none'};
    width: 100vw;
    overflow: hidden;
    flex-direction: column;
    position: absolute;
    z-index: 5;
    margin: 0;
  }
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
  i {
    font-size: 2rem;
    padding-top: 10px;
    @media (max-width: 1200px) {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 1200px) {
    font-size: 1.6rem;
  }
`;

export const FotoDePerfil = styled.div`
  height: 120px;
  width: 130px;
  background-color: var(--branco);
  border-radius: 50%;
  margin-top: 0.2%;
  object-fit: cover;
  border: 2px solid white;
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
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const LogOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  gap: 1%;
  cursor: pointer;
  transition: 0.5s;
  font-size: 0.9rem;
  padding-bottom: 20px;
  p {
    font-weight: 800;
    color: var(--cor-texto);
    text-transform: uppercase;
  }
  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
`;

export const ButtonHandler= styled.div`
  display: flex;
  position: absolute;
  height: 35px;
  margin: 10px;
  cursor: pointer;
  font-size: 1.1rem;
  color: white;
  font-weight: 600;
  z-index: 50;
  &::before {
    background-color: white;
    width: 100px;
    height: 100px;
    border-radius: 45%;
    margin-top: -50px;
    margin-left: -50px;
  }
  @media (min-width: 1000px) {
    display:none;
  }
`