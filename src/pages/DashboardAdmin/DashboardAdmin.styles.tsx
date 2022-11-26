import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;    
    height: 100vh;
    @media screen and (max-width: 850px) {
        flex-direction: column;
        width: 100%;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    background-color: var(--cor-primaria);
    @media screen and (max-width: 850px) {
        display: none;
    }
    img {
        width: 90%;
        -webkit-user-drag: none;
    }
`

export const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    gap: 30px;
    @media screen and (max-width: 850px) {
        width: 100%;
        margin-top: 50px;
    }
    button {
        margin-top: 40px;
    }
    textarea {
        @media screen and (max-width: 460px) {
            width: 200px;
        }
    }
`

export const LoginTitle = styled.h1`
    display: flex;
    align-items: center;
    font-size: 3.8rem;
    font-weight: 500;
    color: var(--cor-primaria);
    user-select: none;
    gap: 10px;
    margin-bottom: 40px;
    font-family: 'Fragment Mono', monospace;
    @media screen and (max-width: 850px) {
        font-size: 2.8rem;
    }
    i {
        font-size: 4rem;
        margin-bottom: -20px;
        @media screen and (max-width: 850px) {
            font-size: 3rem;
        }
    }
`

export const LoginSubtitle = styled.h2`
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--cor-texto);
    margin-bottom: 20px;
    user-select: none;
`