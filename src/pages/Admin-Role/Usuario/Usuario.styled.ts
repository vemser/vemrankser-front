import styled from 'styled-components';

export const ButtonCardWrapperUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 55%;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 10px;
  @media (max-width: 1400px) {
      width: 100%;
  }
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