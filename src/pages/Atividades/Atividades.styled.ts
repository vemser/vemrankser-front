import styled from 'styled-components';

export const AtividadeContainer = styled.div`
    display: flex;
    section {
        width: 80%;
        min-height: 100vh;
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

export const MuralTitulo = styled.h1`
    font-size: 1.8rem;
    font-weight: 500;
    user-select: none;
    color: var(--cor-texto);
    text-align: center;
    @media screen and (max-width: 460px) {
        font-size: 1.6rem;
    }
`

export const MuralSelect = styled.div`
    width: 200px;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 70%;
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

export const AtividadeCard = styled.div`
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
    @media (max-width: 850px) {
        width: 100%;
    }
    @media screen and (max-width: 460px) {
        gap: 10px;
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
`

export const CardContent = styled.div`
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