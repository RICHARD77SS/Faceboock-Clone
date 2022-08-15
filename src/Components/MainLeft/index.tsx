import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Hr from '../Hr';
import { MainLeftSt, UlSt, ListSt, AtalhosSt } from './styles';

const MainLeft = () => {
  return (
    <MainLeftSt>
      <UlSt>
        <ListSt className='List'><img src='https://i.postimg.cc/brczWrGr/richardsilva.jpg' alt='' /><span>Richard Silva</span></ListSt>
        <ListSt><img src='https://i.postimg.cc/tCSphBX2/amigos.png' alt='' /><span>Amigos</span></ListSt>
        <ListSt><img src='https://i.postimg.cc/SRCKxC0c/grupos.png' alt='' /><span>Grupos</span></ListSt>
        <ListSt><img src='https://i.postimg.cc/3xnxN3qf/marketplace.png' alt='' /><span>Marketplace</span></ListSt>
        <ListSt><img src='https://i.postimg.cc/26Bk0hSg/paginas.png' alt='' /><span>Páginas</span></ListSt>
        <ListSt><img src='https://i.postimg.cc/dVtJzz02/watch.png' alt='' /><span>Watch</span></ListSt>
        <ListSt><img src='https://i.postimg.cc/gcZjsFwr/lembran-as.png' alt='' /><span>Lembranças</span></ListSt>
        <ListSt><img src='https://i.postimg.cc/brxzhPbT/salvos.png' alt='' /><span>Salvos</span></ListSt>
        <Accordion className="accordion">
          <AccordionSummary className='accordion-summary'
            expandIcon={<ExpandMoreIcon className='exicon' />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >

            <Typography className='typ'><pre>Ver Mais</pre></Typography>
          </AccordionSummary>
          <AccordionDetails className='accordion-details'>
            <ListSt><img src='https://i.postimg.cc/kXX760d2/ajudadacomunidade.png' alt='' /><span>Ajuda da Comunidade</span></ListSt>
            <ListSt><img src='https://i.postimg.cc/Vk2wh50t/atividadedeanunciosrecentes.png' alt='' /><span>Atividade de anúncios recente</span></ListSt>
            <ListSt><img src='https://i.postimg.cc/pLmxkKrx/campanhasdearrecada-aodefundos.png' alt='' /><span>Campanhas de arrecadação de<br /> fundos</span></ListSt>
            <ListSt><img src='https://i.postimg.cc/pVwhMXND/centraldeanuncios.png' alt='' /><span>Central de Anúncios</span></ListSt>
            <ListSt><img src='https://i.postimg.cc/y8PkRmDP/climacentraldeinforma-oes.png' alt='' /><span>Clima: Central de informações</span></ListSt>
            <ListSt><img src='https://i.postimg.cc/TYnydMGB/covid19centraldeinforma-oes.png' alt='' /><span>COVID-19: Central de<br /> informações</span></ListSt>
            <ListSt><img src='https://i.postimg.cc/Jhzt5sJW/doa-oesdedangue.png' alt='' /><span>Doações de Sangue</span></ListSt>
            <ListSt><img src='https://i.postimg.cc/DZtZh5N2/eventos.png' alt='' /><span>Eventos</span></ListSt>
            <ListSt><img src='https://i.postimg.cc/htgXhytv/faceboockpay.png' alt='' /><span>Facebook Pay</span></ListSt>
            <ListSt><img src='https://i.postimg.cc/MTcTggdP/favoritos.png' alt='' /><span>Favoritos</span></ListSt>
            <ListSt><img src='https://i.postimg.cc/YSD0ntfL/gerenciador-de-anuncios.png' alt='' /><span>Gerenciador de Anúncios</span></ListSt>
            <ListSt><img src='https://i.postimg.cc/J4Cnd6Jx/gerenciadordenegocios.png' alt='' /><span>Gerenciador de Negócios</span></ListSt>
            <ListSt><img src='https://i.postimg.cc/c47HqRBS/jogar.png' alt='' /><span>Jogar</span></ListSt>
            <ListSt><img src='https://i.postimg.cc/HkpLTr67/mainrecentes.png' alt='' /><span>Mais recentes</span></ListSt>
            <ListSt><img src='https://i.postimg.cc/k5GXtk3J/messager.png' alt='' /><span>Messanger</span></ListSt>
            <ListSt><img src='https://i.postimg.cc/TPs2jCfr/messagerkids.png' alt='' /><span>Messager Kids</span></ListSt>
            <ListSt><img src='https://i.postimg.cc/NftsxyqP/saudeemocional.png' alt='' /><span>Saúde Emocional</span></ListSt>
            <ListSt><img src='https://i.postimg.cc/jqPqNH97/videodejogos.png' alt='' /><span>Video de jogos</span></ListSt>
            <ListSt><img src='https://i.postimg.cc/fTvwqwMW/videosaovivo.png' alt='' /><span>Videos ao vivo</span></ListSt>
          </AccordionDetails>
        </Accordion>
      </UlSt>
      <Hr width='70%' />
      <AtalhosSt>
        <span className='seus-atalhos'>Seus Atalhos</span>
      </AtalhosSt>
    </MainLeftSt>
  )
}

export default MainLeft;