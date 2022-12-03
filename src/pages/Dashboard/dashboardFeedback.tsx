import {  MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import React from "react"
import { ButtonSecondary } from "../../components/Buttons/Button"
import { ButtonCardContainer, ButtonCardContent, ButtonCardDashboard, ButtonCardDashboardFeedback, ButtonCardWrapper } from "../../components/Styles/ButtonCard"
import { BarraDePesquisa, Titulo } from "../../components/Styles/Component.styled"
import userDummy from "../../assets/user.png";
import { Link } from "react-router-dom"
import { HiSearch } from "react-icons/hi"
import { ButtonEditaDeleta } from "../../components/Buttons/ButtonEditaDeleta"

export const DashBoardFeedback = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };
    return (
        <>
         <ButtonCardContainer>
      <section>
        <Titulo>
          Feedback
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
          <BarraDePesquisa>
              <TextField variant="outlined" sx={{ width: 300, backgroundColor: "white" }}
                fullWidth
                size="small"
                // size="small"
                label={"Filtrar por nome ou email"}
                // value={nome}
                id={"barra-de-pesquisa-aluno"}
                // onChange={handleNome}
              />
             <i>
              <HiSearch size={"28px"}
              />
              </i>
            </BarraDePesquisa>
            <Link to={"/dashboard"}>
            <ButtonSecondary 
              label={'voltar'}
              type={'button'}
              id={''}
            />
            </Link>
        </div>
        <ButtonCardWrapper>
          <ButtonCardDashboardFeedback>
            <ButtonCardContent>
              <img src={userDummy} alt="Foto" />
              <div>
                <p><span>Nome: </span>Luiza Valentini</p>
              </div>
              <div className="button-adiciona-visualiza-feedback">
                <Link to={'/dashboard/feedback/visualiza/pontos'}> 
                 <ButtonEditaDeleta icone={''}  label={"Visualizar"} />
                </Link>
              </div>
            </ButtonCardContent>
          </ButtonCardDashboardFeedback>
        </ButtonCardWrapper>
      </section>
    </ButtonCardContainer>
        </>
    )
}



