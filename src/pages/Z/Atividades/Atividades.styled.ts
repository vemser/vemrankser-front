import styled from 'styled-components';

export const SimpleCardAtividades = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 450px;
    background-color: white;
    border-radius: 10px;
    gap: 40px;
    padding: 10px;
    transition: 0.5s;
    @media screen and (max-width: 850px) {
        width: 80%;
    }

    @media screen and (max-width: 460px) {
        width: 90%;
        gap: 10px;
    }
`
export const SimpleCardAtividadesEntrega = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 150px;
    background-color: white;
    border-radius: 10px;
    gap: 40px;
    padding: 10px;
    transition: 0.5s;
    @media screen and (max-width: 850px) {
        width: 80%;
    }

    @media screen and (max-width: 460px) {
        width: 90%;
        gap: 10px;
    }

`

export const SimpleCardContentAtividade = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
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
export const SimpleCardAtividadeAluno = styled.div`
    display: flex;
    align-items: center;
    width: 32%;
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
        width: 50%;
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
export const SimpleCardContentAtividadeEntrega = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
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

export const SimpleCardNotes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 68%;
    height: 100px;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    gap: 40px;
    padding: 20px;
    transition: 0.5s;
    span {
        font-weight: 600;
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