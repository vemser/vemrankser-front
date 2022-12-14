import styled from 'styled-components';

export const ButtonCardContainer = styled.div`
  display: flex;
  width: 80%;
  @media (max-width: 1000px) {
    width: 100%;
  }
  section {
    width: 100%;
    min-height: 100vh;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    background-color: #f5f5f5;
    @media (max-width: 1000px) {
        gap: 36px;
    }
  }
  .flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    div {
      display: flex;
      gap: 20px;
    }
    @media screen and (max-width: 1100px) {
      gap: 20px;
    }
    @media screen and (max-width: 850px) {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export const ButtonCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 80%;
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

export const ButtonCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  height: 100px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  gap: 40px;
  padding: 20px;
  transition: 0.5s;
  @media (max-width: 850px) {
      flex-direction: column;
      height: auto;
  }
  &:hover {
    transition: 1s;
    transform: scale(1.01);
  }
  img {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    object-fit: cover;
    @media screen and (max-width: 460px) {
        width: 40px;
        height: 40px;
    }
  }
  @media (max-width: 850px) {
      width: 100%;
  }
  @media screen and (max-width: 460px) {
      gap: 10px;
  }
`;

export const ButtonCardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  font-size: 1rem;
  .button-editar-visualiza{
    gap: 5%;
  }
  @media screen and (max-width: 460px) {
      font-size: 0.9rem;
  }
  @media (max-width: 1100px) {
      gap: 20px;
  }
  @media (max-width: 850px) {
      flex-direction: column;
      text-align: center;
      height: auto;
      gap: 40px;
  }
  div {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 10px;
    p {
      white-space: pre-line;
    }
  }
  .firstSection {
    width: 280px;
    @media (max-width: 1600px) {
        width: 200px;
    }
    @media (max-width: 1400px) {
        width: 280px;
    }
    @media (max-width: 1200px) {
        width: 200px;
    }
    @media (max-width: 1000px) {
        width: 230px;
    }
    @media (max-width: 850px) {
        width: 100%;
    }
  }
  .secondSection {
    width: 250px;
    @media (max-width: 1600px) {
        width: 170px;
    }
    @media (max-width: 1400px) {
        width: 180px;
    }
    @media (max-width: 1000px) {
        width: 200px;
    }
    @media (max-width: 850px) {
        width: 100%;
    }
  }
  p {
    font-size: 1rem;
    span {
        font-weight: 600;
    }
    .ativo {
      font-weight: 500;
      color: #05a075;
    }
    .inativo {
      font-weight: 500;
      color: #e40b36;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
