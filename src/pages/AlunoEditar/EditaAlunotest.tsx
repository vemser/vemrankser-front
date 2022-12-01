import { render, screen } from "@testing-library/react";
import { EditaAluno } from "./EditaAluno";

describe('Testa se existe um h1 escrito "Edita Usuário"', () => {
  test("deve achar o h1 na tela pelo texto", () => {
    render(<EditaAluno />);

    const tituloEditaAluno = screen.getByText("Edita Aluno");

    expect(tituloEditaAluno).toBeInTheDocument();
  });
});

test('Testa se o textField com a label "nome" está na tela', () => {
  render(<EditaAluno />);

  const inputNomeEditaAluno = screen.getAllByLabelText("Nome");

  expect(inputNomeEditaAluno).toBeInTheDocument();
});

test('Testa se o select com a label "Trilha" está na tela', () => {
    render(<EditaAluno />);
  
    const selectTrilhaEditaAluno = screen.getAllByLabelText("Trilha");
  
    expect(selectTrilhaEditaAluno).toBeInTheDocument();
  });

  test('Testa se o select com a label "modulo" está na tela', () => {
    render(<EditaAluno />);
  
    const selecModuloEditaAluno = screen.getAllByLabelText("Modulo");
  
    expect(selecModuloEditaAluno).toBeInTheDocument();
  });

test("deve achar o botão na tela", () => {
  render(<EditaAluno />);

  const botaoEditaAluno = screen.getByRole("button");

  expect(botaoEditaAluno).toBeInTheDocument();
});
