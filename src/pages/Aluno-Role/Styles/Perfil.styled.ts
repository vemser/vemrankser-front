import styled from 'styled-components';

export const PerfilContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 80%;
    background-color: white;
    border-radius: 10px;
    gap: 36px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    @media screen and (max-width: 1000px) {
        width: 80%;
    }
    header {
        width: 100%;
        height: 34%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        padding: 40px 0;
        text-align: left;
        background-color: var(--cor-primaria);
        border-radius: 10px 10px 0 0;
        @media screen and (max-width: 640px) {
            flex-direction: column;
            height: auto;
            text-align: center;
        }
        img {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            background-color: white;
            object-fit: cover;
            border: 3px solid var(--branco);
            @media screen and (max-width: 1600px) {
                width: 120px;
                height: 120px;
            }
        }
        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;
            font-size: 1rem;
            font-weight: 500;
            color: white;
            span {
                width: 100%;
                white-space: pre-line;
                color: #afc8ff;
                margin-right: 5px;
            }
            p {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                @media screen and (max-width: 600px) {
                    font-size: 0.9rem;
                }
            }
        }
        h4 {
            font-size: 1.4rem;
            font-weight: 600;
            margin-bottom: 15px;
            color: var(--branco);
            user-select: none;
            @media screen and (max-width: 600px) {
                font-size: 1.3rem;
            }
        }
    }
    section {
        width: 100%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        h5 {
            font-size: 1.2rem;
            font-weight: 600;
        }
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80%;
            height: 80%;
            border-radius: 10px;
        }
    }
`

export const CardPerfil = styled.article`
    display: flex;
    align-items: center;
    width: 90%;
    height: 80px;
    background-color: var(--cor-primaria);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    gap: 40px;
    padding: 20px;
    transition: 0.5s;
    color: white;
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

export const CardPerfilContent = styled.article`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    text-align: left;
    padding: 0 5px;
    font-size: 1rem;
    color: white;
    @media screen and (max-width: 460px) {
        font-size: 0.9rem;
    }
    .text {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    span {
        font-weight: 600;
    }
    .pendente {
        font-size: 0.85rem;
        font-weight: 600;
        color: black;
    }
`

export const PerfilGeralContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 60%;
    background-color: var(--cor-primaria);
    border-radius: 10px;
    gap: 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    @media screen and (max-width: 1000px) {
        width: 80%;
    }
    img {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        background-color: white;
        object-fit: cover;
        border: 3px solid var(--branco);
        @media screen and (max-width: 1600px) {
            width: 120px;
            height: 120px;
        }
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        font-size: 1rem;
        font-weight: 500;
        color: white;
        span {
            width: 100%;
            white-space: pre-line;
            color: #afc8ff;
            margin-right: 5px;
        }
    }
    h4 {
        font-size: 1.4rem;
        font-weight: 600;
        margin-bottom: 15px;
        color: var(--branco);
        user-select: none;
    }
    section {
        width: 100%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        h5 {
            font-size: 1.2rem;
            font-weight: 600;
        }
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80%;
            height: 80%;
            border-radius: 10px;
        }
    }
`