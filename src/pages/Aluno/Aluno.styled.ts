import styled from "styled-components";

export const AlunoContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: var(--cor-de-fundo);
`;
export const AlunoContainerWrapper = styled.div`
  width: 85%;
`;
export const BarraDePesquisa = styled.div`
 padding-top: 0.5%;
 padding-left: 2%;
  display: flex;
  align-items: baseline;
  align-content: flex-end;
  width: 100%;
  height: 8%;
  background-color: var(--branco);
`;

export const TituloPagina = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  margin-top: 2%;
  div {
    border-radius: 10px;
    padding: 0.5%;
    text-align: center;
    height: 15%;
    width: 15%;
    background-color: aqua;
  }
  .select {
    width: 20%;
  }
`;

export const TableContainer = styled.div`
  margin: 2%;
`;
