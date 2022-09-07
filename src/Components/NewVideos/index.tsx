import React from 'react';

import { NewVideosSt, FlexVideosSt, BlockSt } from './styles';
import Button from '../Button';

import { FiMoreHorizontal } from 'react-icons/fi';

import { GrPrevious, GrNext } from 'react-icons/gr'

const NewVideos = () => {

  const goLeft = () => {
    let slide = document.querySelector("#slider-video");
    slide!.scrollLeft += 410;
  }
  const goRight = () => {
    let slide = document.querySelector("#slider-video");
    slide!.scrollLeft -= 410;
  }
  return (
    <NewVideosSt>
      <h3>Novos vídeos para você 5</h3>
      <FlexVideosSt id='slider-video'>
        <Button className='btn prev' onClick={() => { goRight() }}>
          <GrPrevious size='20' />
        </Button>
        <Button className='video-link'>
          <img src="https://img.freepik.com/vetores-gratis/gato-bonito-bocejando-sonolento-desenho-animado-icone-ilustracao-vetorial-conceito-de-icone-de-natureza-animal-isolado-vetor-premium-estilo-flat-cartoon_138676-3732.jpg?w=740&t=st=1662227807~exp=1662228407~hmac=b63913a10d9f98e6f9f2bcde285a54aeacd964c63fb6b81bf8f4167e684f9d74" alt="" />
          <BlockSt>
            <p>User name e User name Playing Vídeos.</p>
            <div className='flex'><div className="bullet"></div><span>há 12 horas</span></div>
          </BlockSt>
          <Button className='btn-option'>
            <FiMoreHorizontal />
          </Button>
        </Button>
        <Button className='video-link'>
          <img src="https://img.freepik.com/vetores-gratis/gato-legal-bonito-usando-oculos-e-ilustracao-de-icone-de-vetor-dos-desenhos-animados-com-capuz-conceito-de-icone-de-moda-animal-isolado-de-vetor-premium-estilo-de-desenho-animado-plano_138676-4234.jpg?w=740&t=st=1662227787~exp=1662228387~hmac=f4d55e812dfa9bc6461b0c7f321e263bfaaf977b98fba7966e6ec48f0f96c07b" alt="" />
          <BlockSt>
            <p>User name e User name compartilharam Vídeos.</p>
            <div className='flex'><div className="bullet"></div><span>há 12 horas</span></div>
          </BlockSt>
          <Button className='btn-option'>
            <FiMoreHorizontal />
          </Button>
        </Button>
        <Button className='video-link'>
          <img src="https://img.freepik.com/vetores-gratis/gato-legal-bonito-usando-oculos-e-ilustracao-de-icone-de-vetor-dos-desenhos-animados-com-capuz-conceito-de-icone-de-moda-animal-isolado-de-vetor-premium-estilo-de-desenho-animado-plano_138676-4234.jpg?w=740&t=st=1662227787~exp=1662228387~hmac=f4d55e812dfa9bc6461b0c7f321e263bfaaf977b98fba7966e6ec48f0f96c07b" alt="" />
          <BlockSt>
            <p>User name e User name compartilharam Vídeos.</p>
            <div className='flex'><div className="bullet"></div><span>há 12 horas</span></div>
          </BlockSt>
          <Button className='btn-option'>
            <FiMoreHorizontal />
          </Button>
        </Button>
        <Button className='btn next' onClick={() => { goLeft() }}>
          <GrNext size='20' />
        </Button>
      </FlexVideosSt>
    </NewVideosSt>
  )
}

export default NewVideos;