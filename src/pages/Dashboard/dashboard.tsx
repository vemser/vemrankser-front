import { MenuItem, Select, SelectChangeEvent } from "@mui/material"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Typography from "@mui/material/Typography"
import { height } from "@mui/system"
import React from "react"
import { Titulo } from "../../components/Styles/Component.styled"
import { ContentWrapper } from "../../components/Styles/Container.styled"

export const DashBoard = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };
    return (
        <>
            <ContentWrapper>
                <section>
                    <Titulo>
                        Ranking dos alunos
                    </Titulo>
                    <div className="flex">
                   
                    </div>




                </section>
            </ContentWrapper>
        </>

    )
}



