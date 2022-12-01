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
    header {
        width: 100%;
        height: 34%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        padding: 40px 0;
        text-align: left;
        background-color: var(--cor-primaria);
        border-radius: 10px 10px 0 0;
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
            }
        }
        h4 {
            font-size: 1.4rem;
            font-weight: 600;
            color: var(--branco);
            user-select: none;
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