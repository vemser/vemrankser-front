import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ButtonMenuLateral } from "../../components/Buttons/ButtonMenuLateral";
import { MenuLateral } from "../../components/MenuLateral/MenuLateral";
import { ButtonWraper,ContentWrapper,MainContainer,} from "../../components/Styles/Container.styled";
import { ErrorMessage, Titulo } from "../../components/Styles/Component.styled";
import { ButtonPrimary,ButtonSecondary,} from "../../components/Buttons/Button";
import {HiAcademicCap,HiBookOpen,HiChartPie,HiCog,HiUser,HiUsers,} from "react-icons/hi";
import { cadastraAtividadeSchema } from "../../utils/schemas";
import { ICadastraAtividade } from "../../types/cadastraAtividade";
import { AtividadeContext } from "../../context/AtividadesContext";
import { VinculaTrilhaContext } from "../../context/VinculaTrilhaContext";
import { ModuloContext } from "../../context/ModuloContext";


export const AtividadesCriar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICadastraAtividade>({
    resolver: yupResolver(cadastraAtividadeSchema),
  });
  
  const [trilha, setTrilha] = React.useState("");
  const [modulo, setModulo] = React.useState("");
  const {criaAtividade} = useContext(AtividadeContext)
  const {getTrilhas, trilhas} = useContext(VinculaTrilhaContext)
  const [trilhasSelecionadas, setTrilhasSelecionadas] = useState<number[]>([])
  const [peso, setPeso] = useState<number>()
  const {getModulos, modulos} = useContext(ModuloContext)
  const [dataEntrega, setDataEntrega] = useState<string>();


  useEffect(()=>{
    getTrilhas()
    getModulos()
  },[])
 
  const handleChangeSelect2 = (event: SelectChangeEvent) => {
    setModulo(event.target.value as string);
    
  };

  const handleChangePeso = (event: SelectChangeEvent<number>)=>{
    const {
      target: { value },
    } = event;
    if(!(typeof value==='string')){
      setPeso(value)
    }
  }
  const handleDataEntregaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDataEntrega(event.target.value)
  }

  const handleTrilhasSelecionadasChange = (event: SelectChangeEvent<typeof trilhasSelecionadas>) => {
    const {
      target: { value },
    } = event;
    if(!(typeof value==='string')){
       setTrilhasSelecionadas(
     value
    );
    }
  };

  const enviaAtividade = (data: ICadastraAtividade) => {
    criaAtividade({...data,idTrilha:trilhasSelecionadas})
  }

  return (
    <MainContainer>
      <MenuLateral
        nomeDoUsuario={"Luiza Valentini"}
        cargoDoUsuario={"ADMIN"}
        fotoDePerfil={""}
      >
        <ButtonMenuLateral
          text={"Dashboard"}
          icone={<HiChartPie />}
          link={"/dashboard"}
        />
        <ButtonMenuLateral
            text={"Usuários"}
            icone={<HiUsers />}
            link={"/usuarios"}
          />
        <ButtonMenuLateral
          text={"Alunos"}
          icone={<HiAcademicCap />}
          link={"/alunos"}
        />
        <ButtonMenuLateral
          text={"Atividades"}
          icone={<HiBookOpen />}
          link={"/atividades"}
        />
        <ButtonMenuLateral
          text={"Perfil"}
          icone={<HiUser />}
          link={"/perfil"}
        />
        <ButtonMenuLateral
          text={"Configurações"}
          icone={<HiCog />}
          link={"/configurações"}
        />
      </MenuLateral>
      <ContentWrapper>
        <Titulo>Adicionar Nova Atividade</Titulo>
        <form onSubmit={handleSubmit(enviaAtividade)}>
          <TextField
            {...register("titulo")}
            id="titulo-cadastra-atividade"
            label="Título"
            variant="outlined"
            sx={{
              width: '300px',
              marginBottom: "5%",
              marginTop: "10%",
              backgroundColor: "white",
            }}
            size="small"
          />
          {errors.titulo && <ErrorMessage>{errors.titulo.message}</ErrorMessage>}
          <TextField
            id="descricao-cadastra-atividade"
            label="Descrição"
            multiline
            rows={6}
            variant="outlined"
            {...register("instrucoes")}
            sx={{ width: '300px', marginBottom: "5%", backgroundColor: "white" }}
          />
            {errors.instrucoes && <ErrorMessage>{errors.instrucoes.message}</ErrorMessage>}
            <div>
            <FormControl >
        <InputLabel  id="demo-multiple-checkbox-label">Trilha</InputLabel>
        <Select
         sx={{ width: '300px', height: '40px', backgroundColor: 'white', marginBottom: '5%'}}
          labelId="label-checkbox-multiplaescolha-trilha"
          id="checkbox-trilha"
          multiple
          value={trilhasSelecionadas}
          onChange={handleTrilhasSelecionadasChange}
          input={<OutlinedInput label="Escolha a trilha" />}
          renderValue={(selected) => trilhas.filter((trilha)=> selected.includes(trilha.idTrilha)).map((trilha)=>trilha.nome).join(', ')}
        >
          {trilhas.map((trilha) => (
            <MenuItem key={trilha.idTrilha} value={trilha.idTrilha}>
              <Checkbox checked={trilhasSelecionadas.indexOf(trilha.idTrilha) > -1} />
              <ListItemText primary={trilha.nome} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
            </div>
           {errors.idTrilha && <ErrorMessage>{errors.idTrilha.message}</ErrorMessage>}

          <FormControl
            sx={{
              width: '300px',
              marginBottom: "5%",
              backgroundColor: "white",
            }}
            fullWidth
            size="small"
          >
            <InputLabel id="label-select-cadastra-atividade-modulo">Módulo</InputLabel>
            <Select
              labelId="label-select-cadastra-atividade-modulo"
              id="cadastra-atividade-modulo"
              value={modulo}
              label="Modulo"
              {...register("idModulo")}
              onChange={handleChangeSelect2}
            >
              {modulos&&modulos.map((modulo) =>  <MenuItem value={modulo.idModulo}>
                {modulo.nome}
              </MenuItem>
              )}
            </Select>
          </FormControl>
          {errors.idModulo && <ErrorMessage>{errors.idModulo.message}</ErrorMessage>}
          <FormControl
            sx={{
              width: '300px',
              marginBottom: "5%",
              backgroundColor: "white",
            }}
            fullWidth
            size="small"
          >
            <InputLabel id="label-select-cadastra-atividade-peso">
              Peso
            </InputLabel>
            <Select
              labelId="label-select-cadastra-atividade-peso"
              id="cadastra-atividade-peso"
              label="Peso"
              value={peso}
              {...register("pesoAtividade")}
              onChange={handleChangePeso}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>
          {errors.pesoAtividade && <ErrorMessage>{errors.pesoAtividade.message}</ErrorMessage>}
          <TextField 
          sx={{
            width: '300px',
            marginBottom: "5%",
            backgroundColor: "white",
          }}
          fullWidth
          size="small"
           className="input-data" id={'textfield-data'} {...register('dataEntrega')} placeholder={'teste'} type={'date'} value={dataEntrega} onChange={ 
               handleDataEntregaChange} />
      {errors.dataEntrega && <ErrorMessage>{errors.dataEntrega.message}</ErrorMessage>}
          <ButtonWraper>
            <ButtonPrimary
              label="Adicionar"
              id="botao-adiciona-atividade"
              type="submit"
            />
            <Link to="/atividades">
              <ButtonSecondary
                type="button"
                label="Cancelar"
                id="botao-cancela-cadastro-atividade"
              />
            </Link>
          </ButtonWraper>
        </form>
      </ContentWrapper>
    </MainContainer>
  );
};
