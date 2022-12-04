import styled from 'styled-components';

export const SimpleCardConfiguracoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 100px;
    margin-top: 2%;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    gap: 40px;
    padding: 20px;
    transition: 0.5s;
    &:hover {
        transition: 1s;
        transform: scale(1.01);
    }
    @media (max-width: 850px) {
        width: 60%;
    }
    @media screen and (max-width: 460px) {
        width: 80%;
        gap: 10px;
    }
    img {
        width: 68px;
        width: 68px;
        border-radius: 50%;
        object-fit: cover;
        @media screen and (max-width: 460px) {
            width: 40px;
            height: 40px;
        }
    }
`
