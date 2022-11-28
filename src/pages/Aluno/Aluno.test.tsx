import { render, screen } from '@testing-library/react';
import { Aluno } from './Aluno';

describe('testa se a barra de pesquisa está na tela', () => {
    test('deve achar a barra de pesquisa na tela pelo seu label', () => {
        render(<Aluno />);

        const barraDePesquisa = screen.getByLabelText('Search');

        expect(barraDePesquisa).toBeInTheDocument();
    })
})

describe('testa se o titulo Aluno está na tela', () => {
    test('deve achar o titulo na tela pelo titulo ', () => {
        render(<Aluno />);

        const tituloAluno = screen.getByText('Alunos');

        expect(tituloAluno).toBeInTheDocument();
    })
})

describe('testa se o select de trilha está na tela', () => {
    test('deve achar o select de trilha na tela pelo id', () => {
        render(<Aluno />);

        const selectTrilha = screen.getByTestId('select-trilha-aluno');

        expect(selectTrilha).toBeInTheDocument();
    })
})

