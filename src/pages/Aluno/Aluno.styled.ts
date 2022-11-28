import styled from "styled-components";

export const AlunosContainer = styled.div`
  display: flex;
  section {
    width: 80%;
    height: 100vh;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    background-color: #f5f5f5;
  }
  .flex {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    div {
      display: flex;
      gap: 20px;
    }

    .barra-pesquisa-e-icone{
    display: flex;
    align-items: center;
    i{
      margin-left: -15px;
      cursor: pointer;
      background-color: var(--branco);
      border-radius: 5px;
      padding: 2px;
    }
  }
    @media screen and (max-width: 850px) {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export const Titulo = styled.div`
  h1 {
    font-size: 1.8rem;
    font-weight: 500;
    user-select: none;
    color: var(--cor-texto);
  }
`;

export const HeaderSelect = styled.div`
  width: 200px;
  
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 80%;
  max-height: 80%;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 1%;
  ::-webkit-scrollbar {
    width: 10px;
    margin-top: 80px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px 10px #ccc;
    border: solid 2px transparent;
    border-radius: 15px;
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px #062e8c;
    border: solid 2px transparent;
    border-radius: 15px;
  }
`;

export const AlunosCard = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 160px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  gap: 40px;
  padding: 20px;
  transition: 0.5s;
  &:hover {
    transition: 1s;
    transform: scale(1.01);
  }
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
  }
  @media screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 130%;
    height: 300%;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    padding-left: 3%;
    padding-right: 3%;
  }
  @media screen and (max-width: 860px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 200%;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    padding-left: 3%;
    padding-right: 3%;
  }
  @media screen and (max-width: 997px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 300%;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    padding-left: 3%;
    padding-right: 3%;
  }
  @media screen and (max-width: 1064px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 300%;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    padding-left: 3%;
    padding-right: 3%;
  }
  @media screen and (max-width: 1409px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 300%;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    padding-left: 3%;
    padding-right: 3%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  font-size: 1rem;
.teste{
  color: aqua;
  font-weight: 100;
}
  @media screen and (max-width: 460px) {
    .date-info {
      font-size: 2.2rem;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2%;
`;
