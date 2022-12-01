import { render, screen } from "@testing-library/react";
import { VinculaAluno } from "./AlunoVincula";

describe('Testa se existe um h1 escrito "Cadastra Usuário"', () => {
  test("deve achar o h1 na tela pelo texto", () => {
    render(<VinculaAluno />);

    const tituloCadastroAluno = screen.getByText("Cadastra Aluno");

    expect(tituloCadastroAluno).toBeInTheDocument();
  });
});

test('Testa se o textField com a label "nome" está na tela', () => {
  render(<VinculaAluno />);

  const inputNomeCadastroAluno = screen.getAllByLabelText("Nome");

  expect(inputNomeCadastroAluno).toBeInTheDocument();
});

test('Testa se o select com a label "Trilha" está na tela', () => {
    render(<VinculaAluno />);
  
    const selectTrilhaCadastroAluno = screen.getAllByLabelText("Trilha");
  
    expect(selectTrilhaCadastroAluno).toBeInTheDocument();
  });

  test('Testa se o select com a label "modulo" está na tela', () => {
    render(<VinculaAluno />);
  
    const selecModuloCadastroAluno = screen.getAllByLabelText("Modulo");
  
    expect(selecModuloCadastroAluno).toBeInTheDocument();
  });

test("deve achar o botão na tela", () => {
  render(<VinculaAluno />);

  const botaoCadastroAluno = screen.getByRole("button");

  expect(botaoCadastroAluno).toBeInTheDocument();
});
