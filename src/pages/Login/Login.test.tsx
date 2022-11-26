import { render, screen } from '@testing-library/react';
import { Login } from './Login';

describe('testa se o título está na tela', () => {
    test('deve achar o título na tela pelo texto', () => {
        render(<Login />);

        const titulo = screen.getByText(/VemRankSer/);

        expect(titulo).toBeInTheDocument();
    })
    test('deve achar o título na tela pela tag', () => {
        render(<Login />);

        const titulo = screen.getByRole('heading', { level: 1 });

        expect(titulo).toBeInTheDocument();
    })
})

describe('testa se a descrição está na tela', () => {
    test('deve achar a descrição na tela pelo texto', () => {
        render(<Login />);

        const titulo = screen.getByText(/Entre na sua conta/);

        expect(titulo).toBeInTheDocument();
    })
    test('deve achar a descrição na tela pela tag', () => {
        render(<Login />);

        const titulo = screen.getByRole('heading', { level: 2 });

        expect(titulo).toBeInTheDocument();
    })
})

test('deve achar o botão na tela', () => {
    render(<Login />);

    const botao = screen.getByRole('button');

    expect(botao).toBeInTheDocument();
})