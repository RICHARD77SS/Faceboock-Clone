import React from 'react';

import { MainLeftSt, Ul, List, AtalhosSt } from './styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import Button from '../Button';

const MainLeft = () => {

  const [openAccordion, setOpenAccordion] = React.useState(false);

  const toggleAccordion = () => {
    setOpenAccordion(openAccordion === true ? false : true);
  };

  return (
    <MainLeftSt>
      <Ul>
        <List>
          <img src='https://i.postimg.cc/brczWrGr/richardsilva.jpg' alt='' />
          <span>Richard Silva</span>
        </List>
        <List>
          <img src='https://i.postimg.cc/tCSphBX2/amigos.png' alt='' />
          <span>Amigos</span>
        </List>
        <List>
          <img src='https://i.postimg.cc/SRCKxC0c/grupos.png' alt='' />
          <span>Grupos</span>
        </List>
        <List>
          <img src='https://i.postimg.cc/3xnxN3qf/marketplace.png' alt='' />
          <span>Marketplace</span>
        </List>
        <List>
          <img src='https://i.postimg.cc/26Bk0hSg/paginas.png' alt='' />
          <span>Páginas</span>
        </List>
        <List>
          <img src='https://i.postimg.cc/dVtJzz02/watch.png' alt='' />
          <span>Watch</span>
        </List>
        <List>
          <img src='https://i.postimg.cc/gcZjsFwr/lembran-as.png' alt='' />
          <span>Lembranças</span>
        </List>
        <List>
          <img src='https://i.postimg.cc/brxzhPbT/salvos.png' alt='' />
          <span>Salvos</span>
        </List>
        {openAccordion ?
          <>
            <List>
              <img src='https://i.postimg.cc/kXX760d2/ajudadacomunidade.png' alt='' />
              <span>Ajuda da Comunidade</span>
            </List>
            <List>
              <img src='https://i.postimg.cc/Vk2wh50t/atividadedeanunciosrecentes.png' alt='' />
              <span>Atividade de anúncios recente</span>
            </List>
            <List>
              <img src='https://i.postimg.cc/pLmxkKrx/campanhasdearrecada-aodefundos.png' alt='' />
              <span>Campanhas de arrecadação de<br /> fundos</span>
            </List>
            <List><img src='https://i.postimg.cc/pVwhMXND/centraldeanuncios.png' alt='' /><span>Central de Anúncios</span></List>
            <List><img src='https://i.postimg.cc/y8PkRmDP/climacentraldeinforma-oes.png' alt='' /><span>Clima: Central de informações</span></List>
            <List><img src='https://i.postimg.cc/TYnydMGB/covid19centraldeinforma-oes.png' alt='' /><span>COVID-19: Central de<br /> informações</span></List>
            <List><img src='https://i.postimg.cc/Jhzt5sJW/doa-oesdedangue.png' alt='' /><span>Doações de Sangue</span></List>
            <List><img src='https://i.postimg.cc/DZtZh5N2/eventos.png' alt='' /><span>Eventos</span></List>
            <List><img src='https://i.postimg.cc/htgXhytv/faceboockpay.png' alt='' /><span>Facebook Pay</span></List>
            <List><img src='https://i.postimg.cc/MTcTggdP/favoritos.png' alt='' /><span>Favoritos</span></List>
            <List><img src='https://i.postimg.cc/YSD0ntfL/gerenciador-de-anuncios.png' alt='' /><span>Gerenciador de Anúncios</span></List>
            <List><img src='https://i.postimg.cc/J4Cnd6Jx/gerenciadordenegocios.png' alt='' /><span>Gerenciador de Negócios</span></List>
            <List><img src='https://i.postimg.cc/c47HqRBS/jogar.png' alt='' /><span>Jogar</span></List>
            <List><img src='https://i.postimg.cc/HkpLTr67/mainrecentes.png' alt='' /><span>Mais recentes</span></List>
            <List><img src='https://i.postimg.cc/k5GXtk3J/messager.png' alt='' /><span>Messanger</span></List>
            <List><img src='https://i.postimg.cc/TPs2jCfr/messagerkids.png' alt='' /><span>Messager Kids</span></List>
            <List><img src='https://i.postimg.cc/NftsxyqP/saudeemocional.png' alt='' /><span>Saúde Emocional</span></List>
            <List><img src='https://i.postimg.cc/jqPqNH97/videodejogos.png' alt='' /><span>Video de jogos</span></List>
            <List><img src='https://i.postimg.cc/fTvwqwMW/videosaovivo.png' alt='' /><span>Videos ao vivo</span></List>
          </>
          : null}
        <Button className='viewMore' onClick={() => { toggleAccordion() }}>
          {openAccordion ?
            <>
              <IoIosArrowUp size='20' /><p>Ver menos</p>
            </>
            :
            <>
              <IoIosArrowDown size='20' /><p>Ver mais</p>
            </>}
        </Button>
        <AtalhosSt>
          <span className='seus-atalhos'>Seus Atalhos</span>
        </AtalhosSt>
      </Ul>
    </MainLeftSt>
  )
}

export default MainLeft;