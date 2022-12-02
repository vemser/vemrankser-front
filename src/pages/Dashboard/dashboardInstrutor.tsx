import {  MenuItem, Select, SelectChangeEvent } from "@mui/material"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import React from "react"
import { ButtonPrimary } from "../../components/Buttons/Button"
import { ButtonCardContainer, ButtonCardContent, ButtonCardDashboard, ButtonCardWrapper } from "../../components/Styles/ButtonCard"
import { Titulo } from "../../components/Styles/Component.styled"
import userDummy from "../../assets/user.png";
import { GiChampions } from "react-icons/gi"
import { Link } from "react-router-dom"

export const DashBoard = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };
    return (
        <>
         <ButtonCardContainer>
      <section>
        <Titulo>
          Dashboard
        </Titulo>
        <div className="flex">
          <div>
            <FormControl
              sx={{ width: 200, backgroundColor: "white" }}
              fullWidth
              size="small"
            >
              <InputLabel id="select-aluno-label">Trilha</InputLabel>
              <Select
                labelId="select-aluno-label"
                id="select-atividade"
                value={age}
                label="Trilha"
                onChange={handleChange}
              >
                <MenuItem value={"geral"}>Geral</MenuItem>
                <MenuItem value={"backend"}>Backend</MenuItem>
                <MenuItem value={"frontend"}>Frontend</MenuItem>
                <MenuItem value={"qa"}>QA</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Link to={"/dashboard/feedback"}>
          <ButtonPrimary
              type={"button"}
              id={"botao-vincula-aluno"}
              label={"Feedbacks"}
            />
          </Link>
            <Link to={"/dashboard/informacoes"}>
            <ButtonPrimary
              type={"button"}
              id={"botao-vincula-aluno"}
              label={"Informações"}
            />
            </Link>
        </div>
        <ButtonCardWrapper>
          <ButtonCardDashboard>
            <ButtonCardContent>
              <img src={userDummy} alt="Foto" />
              <div>
                <p><span>Nome: </span>Luiza Valentini</p>
              </div>
              <div>
                <p><span>Pontos:</span> 1300 </p>
              </div>
              <div>
                <p><span>Posição:</span>1</p>
              </div>
              <div>
                <GiChampions size={'40px'} color={'var(--cor-primaria)'}/>
              </div>
            </ButtonCardContent>
          </ButtonCardDashboard>
        </ButtonCardWrapper>
      </section>
    </ButtonCardContainer>
        </>

    )
}



