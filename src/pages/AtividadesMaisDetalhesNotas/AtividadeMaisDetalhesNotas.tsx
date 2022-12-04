import { Link, useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ButtonSecondary } from '../../components/Buttons/Button';
import { Titulo } from '../../components/Styles/Component.styled';
import TextField from '@mui/material/TextField';
import { SimpleCardAtividades, SimpleCardContainer, SimpleCardContentAtividade, SimpleCardWrapper } from '../../components/Styles/SimpleCard';
import { HiAcademicCap, HiBookOpen, HiChartPie, HiCog, HiUser } from 'react-icons/hi';
import { AtividadeContext } from '../../context/AtividadesContext';
import { ComentarioContext } from '../../context/ComentarioContext';
import { ButtonCorrigir } from '../../components/Buttons/ButtonCorrigir';

export const AtividadesDetalhesNotas = () => {
  const [nota, setNota] = useState<number>()
  const [comentario, setComentario] = useState<string>('')
  const { avaliar } = useContext(AtividadeContext)
  const { idAtividade, idUsuario } = useParams()

  const canCorrigirAtividade = idAtividade && nota && comentario && idUsuario
  const corrigiAtividade = () => {
    if (!canCorrigirAtividade) return
    avaliar(parseInt(idAtividade), nota, parseInt(idUsuario), comentario)
    
  }
  return (
    <SimpleCardContainer>
      <section>
        <Titulo>
          Detalhes Notas
        </Titulo>

        <div className='flex'>
        </div>
        <SimpleCardWrapper>
          <SimpleCardAtividades>
            <SimpleCardContentAtividade>
              <p><span>Aluno 1</span></p>
              <p className='date-info'><span>
                <TextField
                  id="da-nota-atividade"
                  value={nota}
                  onChange={(e) => setNota(parseInt(e.target.value))}
                  label="Nota"
                  variant="outlined"
                  sx={{
                    width: '150px',
                    marginBottom: "2%",
                    marginTop: "-2%",
                    backgroundColor: "white",
                  }}
                  size="small"
                />
              </span></p>
              <p><span>Comentário:</span></p>
              <TextField
                id="comentario-atvidade"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                label="Comentários"
                multiline
                rows={6}
                variant="outlined"
                sx={{ width: '100%', marginBottom: "2%", marginTop: "-2%", backgroundColor: "white" }}
              />
            </SimpleCardContentAtividade>

          </SimpleCardAtividades>
          <ButtonCorrigir type={'button'} label={'Corrigir'} onClick={corrigiAtividade} id={'botao-corrigi-atividade'} />
          <Link to='/atividades/notas'>
            <ButtonSecondary
              label="Voltar"
              id="button-volta-mural-notas"
              type="submit"
            />
          </Link>
        </SimpleCardWrapper>
      </section>
    </SimpleCardContainer>
  )
}
