import {  MenuItem, Select, SelectChangeEvent } from "@mui/material"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import React, { useContext, useEffect } from "react"
import { ButtonPrimary } from "../../components/Buttons/Button"
import { ButtonCardContainer, ButtonCardContent, ButtonCardDashboard, ButtonCardWrapper } from "../../components/Styles/ButtonCard"
import { Titulo } from "../../components/Styles/Component.styled"
import userDummy from "../../assets/user.webp";
import { GiChampions } from "react-icons/gi"
import { Link } from "react-router-dom"
import { VinculaTrilhaContext } from "../../context/VinculaTrilhaContext"
import { IRanking, ITrilha } from "../../types/vinculaTrilha"


export const DashBoard = () => {
    const [trilha, setTrilha] = React.useState('');
    const {getTrilhas, trilhas, getRanking, ranking} = useContext(VinculaTrilhaContext)

    useEffect(()=>{
      getTrilhas()
    },[])

    useEffect(()=>{
      if(trilha){
         getRanking(parseInt(trilha))
      }
    }, [trilha])

    useEffect(()=>{
      if(trilhas.length>0){
         setTrilha(trilhas[0].idTrilha as unknown as string)
      }
    }, [trilhas])

    const handleChange = (event: SelectChangeEvent) => {
      setTrilha(event.target.value as string);
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
              <InputLabel id="label-select-trilha-dashboard-instrutor">Trilha</InputLabel>
              <Select
                labelId="label-select-trilha-dashboard-instrutor"
                id="select-trilha-dashboard-instrutor"
                value={trilha}
                label="Trilha"
                onChange={handleChange}
              >
                 {trilhas && trilhas.map((trilha: ITrilha) => <MenuItem value={trilha.idTrilha}>{trilha.nome}</MenuItem>)}
              </Select>
            </FormControl>
          </div>
          <Link to={"/dashboard/feedback"}>
          <ButtonPrimary
              type={"button"}
              id={"botao-feedbacks-dashboard-feedback"}
              label={"Feedbacks"}
            />
          </Link>
            <Link to={"/dashboard/informacoes"}>
            <ButtonPrimary
              type={"button"}
              id={"botao-informacoes-dashboard-feedback"}
              label={"Informações"}
            />
            </Link>
        </div>
        <ButtonCardWrapper>
              {ranking&&ranking.map((r:IRanking, index)=>
                  index<3&&
                <ButtonCardDashboard>
               <ButtonCardContent>
                <img src={userDummy} alt="Foto" />
              <div>
                <p><span>Nome: </span>{r.nome}</p>
              </div>
              <div>
                <p><span>Pontos: </span>{r.pontuacaoAluno}</p>
              </div>
              <div>
                <p><span>Posição: </span>{index+1}</p>
              </div>
              <div>
                <GiChampions size={'40px'} color={'var(--cor-primaria)'}/>
              </div>
              </ButtonCardContent>
               </ButtonCardDashboard>
              )}
        </ButtonCardWrapper>
      </section>
    </ButtonCardContainer>
        </>

    )
}



