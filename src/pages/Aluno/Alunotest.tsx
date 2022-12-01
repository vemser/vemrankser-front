import { render, screen } from "@testing-library/react";
import { Aluno } from "./Aluno";

describe('Testa se existe um h1 escrito "Alunos"', () => {
  test("deve achar o h1 na tela pelo texto", () => {
    render(<Aluno />);

    const tituloAluno = screen.getByText("Edita Aluno");

    expect(tituloAluno).toBeInTheDocument();
  });
  test("deve achar o título na tela pela tag", () => {
    render(<Aluno />);

    const tituloAluno = screen.getByRole("heading", { level: 1 });

    expect(tituloAluno).toBeInTheDocument();
  });
});

test("deve achar o botão na tela", () => {
  render(<Aluno />);

  const botaoAdiconaAluno = screen.getByRole("button");

  expect(botaoAdiconaAluno).toBeInTheDocument();
});
