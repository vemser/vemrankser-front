import {  MenuItem, Pagination, Select, SelectChangeEvent, TextField } from "@mui/material"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import React, { ChangeEvent, useContext, useEffect, useMemo } from "react"
import { ButtonSecondary } from "../../components/Buttons/Button"
import { ButtonCardContainer, ButtonCardContent, ButtonCardDashboard, ButtonCardDashboardFeedback, ButtonCardWrapper } from "../../components/Styles/ButtonCard"
import { BarraDePesquisa, Titulo } from "../../components/Styles/Component.styled"
import userDummy from "../../assets/user.webp";
import { Link, useSearchParams } from "react-router-dom"
import { HiSearch } from "react-icons/hi"
import { ButtonEditaDeleta } from "../../components/Buttons/ButtonEditaDeleta"
import { VinculaTrilhaContext } from "../../context/VinculaTrilhaContext"
import { ITrilha } from "../../types/vinculaTrilha"
import { AlunoContext } from "../../context/AlunoContext"
import { IAluno, IAlunoFilterParams } from "../../types/aluno"

export const DashBoardFeedback = () => {
    const [trilha, setTrilha] = React.useState('');  
    const [nome, setNome] = React.useState('');  
    const [filterParams, setFilterParams] = React.useState<IAlunoFilterParams>({}); 
    const [searchParam, setSearchParam] = useSearchParams();
    const {getTrilhas, trilhas} = useContext(VinculaTrilhaContext)
    const {getAlunosWithFilter, alunos, totalPages } = useContext(AlunoContext)

    const pagina = useMemo(() => {
      return Number(searchParam.get("pagina") || "1")
    }, [searchParam])

    useEffect(()=>{
      const newFilterParams={...filterParams}
         if(trilha){
           newFilterParams.idTrilha=parseInt(trilha)
         }
         if(nome){
          newFilterParams.nome=nome
        }
        setFilterParams(newFilterParams)
    }, [trilha, nome])

    useEffect(()=>{
      getTrilhas()
    },[])

    useEffect(()=>{
      getAlunosWithFilter(pagina,filterParams)
    },[filterParams, pagina])

    const handleTrilhaChange = (event: SelectChangeEvent) => {
      setTrilha(event.target.value as string);
    };
    const handleNomeChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setNome(event.target.value as string);
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
                value={trilha}
                label="Trilha"
                onChange={handleTrilhaChange}
              >
                  {trilhas && trilhas.map((trilha: ITrilha) => <MenuItem value={trilha.idTrilha}>{trilha.nome}</MenuItem>)}
              </Select>
            </FormControl>
          </div>
          <BarraDePesquisa>
              <TextField variant="outlined" sx={{ width: 300, backgroundColor: "white" }}
                fullWidth
                size="small"
                label={"Filtrar por nome"}
                value={nome}
                id={"barra-de-pesquisa-aluno"}
                onChange={handleNomeChange}
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
          {alunos&&alunos.map((aluno:IAluno)=>
           <ButtonCardDashboardFeedback>
            <ButtonCardContent>
              <img src={userDummy} alt="Foto" />
              <div>
                <p><span>Nome: </span>{aluno.nome}</p>
              </div>
              <div className="button-adiciona-visualiza-feedback">
                <Link to={`/dashboard/feedback/visualiza-pontos/${aluno.idUsuario}`}> 
                 <ButtonEditaDeleta icone={''} label={"Visualizar"} id={""} />
                </Link>
              </div>
            </ButtonCardContent>
          </ButtonCardDashboardFeedback>
          )}
        </ButtonCardWrapper>
        <Pagination count={totalPages} page={pagina} onChange={(e, newPage) => setSearchParam({ pagina: newPage.toString() }, { replace: true })} color="primary" />
      </section>
    </ButtonCardContainer>
        </>
    )
}



