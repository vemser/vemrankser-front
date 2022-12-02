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
        @media screen and (max-width: 1400px) {
            width: 75%;
        }
    }
`

export const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    gap: 50px;
    @media screen and (max-width: 1400px) {
        gap: 10px;
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
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
    .floating {
        -webkit-animation: movebounce 5s linear infinite;
        animation: movebounce 5s linear infinite;
        @-webkit-keyframes movebounce {
            0% {
                -webkit-transform: translateY(0px);
                transform: translateY(0px);
            }
            50% {
                -webkit-transform: translateY(20px);
                transform: translateY(20px);
            }
            100% {
                -webkit-transform: translateY(0px);
                transform: translateY(0px);
            }
        }
        @keyframes movebounce {
            0% {
                -webkit-transform: translateY(0px);
                transform: translateY(0px);
            }
            50% {
                -webkit-transform: translateY(20px);
                transform: translateY(20px);
            }
            100% {
                -webkit-transform: translateY(0px);
                transform: translateY(0px);
            }
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
    margin-bottom: 60px;
    margin-top: -40px;
    font-family: 'Fragment Mono', monospace;
    @media screen and (max-width: 1400px) {
        font-size: 3.2rem;
    }
    @media screen and (max-width: 850px) {
        font-size: 2.8rem;
    }
    i {
        height: 80px;
        width: 66px;
        font-size: 4rem;
        @media screen and (max-width: 1400px) {
            font-size: 3.4rem;
        }
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