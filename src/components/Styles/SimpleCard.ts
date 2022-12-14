import styled from 'styled-components';

export const SimpleCardContainer = styled.div`
    display: flex;
    width: 80%;
    @media (max-width: 1000px) {
    width: 100%;
    }
    section {
        min-height: 100vh;
        width: 100%;
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
        background-color: #f5f5f5;
        @media (max-width: 1000px) {
            width: 100vw;
            gap: 36px;
        }
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
        @media screen and (max-width: 1200px) {
            flex-direction: column;
            gap: 10px;
        }
    }
`

export const SimpleCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 80%;
    max-height: 80%;
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 10px;
    @media (max-width: 850px) {
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
`

export const SimpleCard = styled.div`
    display: flex;
    align-items: center;
    width: 95%;
    height: 100px;
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
        width: 100%;
    }
    @media screen and (max-width: 460px) {
        gap: 10px;
    }
    img {
        width: 68px;
        width: 68px;
        object-fit: cover;
        @media screen and (max-width: 460px) {
            width: 40px;
            height: 40px;
        }
    }
`

export const SimpleCardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    font-size: 1rem;
    @media screen and (max-width: 460px) {
        font-size: 0.9rem;
    }
    span {
        font-weight: 600;
    }
    .date-info {
        font-size: 0.9rem;
        font-weight: 500;
    }
`