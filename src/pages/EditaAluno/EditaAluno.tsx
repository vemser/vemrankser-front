import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../components/Buttons/Button";
import { Input } from "../../components/Inputs/Input";
import {
  CadastraAlunoContainer,
  ContainerCadastro,
} from "./EditaAluno.styled";

export const EditaAluno = () => {
  return (
    <>
      <CadastraAlunoContainer>
        <ContainerCadastro>
          <h1>Edita Alunos</h1>
          <div>
            <Input id="login-input-senha" label="Nome" />
            <Input id="login-input-senha" label="Email" />
            <Input id="login-input-senha" label="Login" />
            <Input id="login-input-senha" label="Cidade" />
            <Input id="login-input-senha" label="Status" />
            {/* <BasicSelect /> */}
          </div>
          <div className="button-cadastra-aluno">
            <Link to={'/alunos'}>
            <ButtonPrimary label={"Edita Alunos"} id={"teste"} type={'submit'}/>
            </Link>
          </div>
         
        </ContainerCadastro>
      </CadastraAlunoContainer>
    </>
  );
};
