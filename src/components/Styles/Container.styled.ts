import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--cor-de-fundo);
`;

export const ContentWrapper = styled.div`
  width: 80%;
  text-align: center;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
  }
`;

export const ButtonWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

