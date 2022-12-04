import styled from 'styled-components';

export const ButtonCardContentVisualiza = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  font-size: 1rem;
  .button-editar-visualiza{
    gap: 5%;
  }
  @media screen and (max-width: 460px) {
      font-size: 0.9rem;
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
  }
  p {
    font-size: 1rem;
    span {
        font-weight: 600;
    }
  }
`;

export const ButtonCardDashboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 100px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  gap: 40px;
  padding: 20px;
  transition: 0.5s;
  .button-adiciona-visualiza-feedback{
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 850px) {
      flex-direction: column;
      height: auto;
  }
  &:hover {
    transition: 1s;
    transform: scale(1.01);
  }
  img {
    width: 60px;
    height: 60px;
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
export const ButtonCardDashboardFeedback = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  height: auto;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  gap: 40px;
  padding: 20px;
  transition: 0.5s;
  .button-adiciona-visualiza-feedback{
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 850px) {
      flex-direction: column;
      height: auto;
  }
  &:hover {
    transition: 1s;
    transform: scale(1.01);
  }
  img {
    width: 60px;
    height: 60px;
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
export const ButtonCardDashboardInformacoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 200px;
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
    width: 60px;
    height: 60px;
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
