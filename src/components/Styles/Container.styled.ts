import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: var(--cor-de-fundo);
`;

export const ContentWrapper = styled.div`
  background-color: var(--cor-de-fundo);
  width: 80%;
  min-height: 100vh;
  text-align: center;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media (max-width: 1000px) {
    width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
  }
  .flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-top: 40px;
    div {
      display: flex;
      gap: 20px;
    }
    @media screen and (max-width: 850px) {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export const ButtonWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`