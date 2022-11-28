import { render, screen } from "@testing-library/react";
import { EditaAluno } from "./EditaAluno";

describe('Testa se existe um h1 escrito "Edita Usuário"', () => {
  test("deve achar o h1 na tela pelo texto", () => {
    render(<EditaAluno />);

    const titulo = screen.getByText("Edita Aluno");

    expect(titulo).toBeInTheDocument();
  });
});

test('Testa se o textField com a label "nome" está na tela', () => {
  render(<EditaAluno />);

  const inputNome = screen.getAllByLabelText("Nome");

  expect(inputNome).toBeInTheDocument();
});

test('Testa se o select com a label "Trilha" está na tela', () => {
    render(<EditaAluno />);
  
    const selectTrilha = screen.getAllByLabelText("Trilha");
  
    expect(selectTrilha).toBeInTheDocument();
  });

  test('Testa se o select com a label "modulo" está na tela', () => {
    render(<EditaAluno />);
  
    const selecModulo = screen.getAllByLabelText("Modulo");
  
    expect(selecModulo).toBeInTheDocument();
  });

test("deve achar o botão na tela", () => {
  render(<EditaAluno />);

  const botao = screen.getByRole("button");

  expect(botao).toBeInTheDocument();
});
