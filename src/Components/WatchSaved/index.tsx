import React from 'react';

import { WatchSavedSt, SavedTopSt, SavedCenterSt, SavedContentSt,VideoSt, BlockSt, FlexSt, MiniIconDiv, ConfigConteiner } from './styles';
import { AiFillLike, AiFillHeart } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import Button from '../Button';
import WatchTopNav from '../WatchTopNav';

const WatchSaved = () => {
  return (
    <WatchSavedSt>
      <WatchTopNav className='topnav'/>
      <SavedTopSt>
        <p>Watch &gt; Salvos</p>
        <h3>Vídeos salvos</h3>
      </SavedTopSt>
      <SavedCenterSt>
        <SavedContentSt>
          <VideoSt>
            <img src="https://img.freepik.com/vetores-gratis/malha-colorida-de-vetor-abstrato-em-fundo-escuro-cartao-de-estilo-futurista-fundo-elegante-para-apresentacoes-de-negocios-esfera-de-pontos-corrompidos-estetica-do-caos_1217-6144.jpg?w=740&t=st=1662164007~exp=1662164607~hmac=0c3d54f3385c4d59f8a1681b39568a2d3212854acb607745c2ace56d51fa86f2" alt="" />
            <h5>0:59</h5>
          </VideoSt>
          <BlockSt>
            <FlexSt>
              <img src="https://img.freepik.com/vetores-gratis/ilustracao-de-verao-desenhada-a-mao_23-2149398917.jpg?t=st=1662164389~exp=1662164989~hmac=2fca5b7a566f94e08fec4d61078879baa89d50090d3dea6e9e80105c5f4fd3b6" alt="" />
              <BlockSt>
                <h4>Page Name</h4>
                <p className='pl'>há um ano</p>
              </BlockSt>
            </FlexSt>
            <h4>Video name for breve description Video name for breve description</h4>
            <FlexSt>
              <MiniIconDiv>
                <AiFillLike />
              </MiniIconDiv>
              <MiniIconDiv>
                <AiFillHeart />
              </MiniIconDiv>
              <pre><a href="/">user e outras 200 mil pessoas</a></pre>
              <pre><p>9,5 mil comentários</p></pre>
              <pre><p>5 mi visualizações</p></pre>
            </FlexSt>
          </BlockSt>
          <ConfigConteiner>
            <Button className='btn-option'>
              <FiMoreHorizontal />
            </Button>
          </ConfigConteiner>
        </SavedContentSt>
      </SavedCenterSt>
    </WatchSavedSt>
  )
}

export default WatchSaved;