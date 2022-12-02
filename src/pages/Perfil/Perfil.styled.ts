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
        justify-content: space-around;
        gap: 15px;
        padding: 40px 0;
        text-align: center;
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
            gap: 5px;
            font-size: 1rem;
            color: white;
            span {
                font-weight: 600;
                font-size: 0.9rem;
                width: 100%;
                white-space: pre-line;
            }
            p {
                @media screen and (max-width: 600px) {
                    font-size: 0.9rem;
                }
            }
        }
        h4 {
            font-size: 1.4rem;
            font-weight: 600;
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