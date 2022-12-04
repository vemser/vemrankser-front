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

export const ImageWrapper = styled.span`
  input[type=file] {
    width: 20px;
    height: 20px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  label {
      padding: 12px 10px;
      width: 200px;
      background-color: var(--cor-primaria);
      border: 1px solid #999;
      color: #FFF;
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: 600;
      text-align: center;
      display: block;
      margin-top: 10px;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        transition: 0.5s;
        transform: scale(1.02);
      }
    }
`