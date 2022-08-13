import React from 'react';

import Button from '../Button';
import { StorysSt, StorySt } from './styles';

const Storys = () => {
  return (
    <StorysSt>
      <StorySt>
        <img src='https://img.freepik.com/fotos-gratis/mulher-alegre-feliz-se-sentindo-animada-por-vencer-gritando-e-comemorando-a-vitoria-com-os-bracos-erguidos-torcendo-com-entusiasmo-pelo-sucesso-e-triunfo-desfrutando-da-vitoria-no-estudio_482257-46602.jpg?w=740&t=st=1660427508~exp=1660428108~hmac=c1be4e3cab978e87868475f0461bdebe2e071fbd5bacb733f403b7d5f328edd4' alt='' />
        <Button className='bt-add'>
          <div className="div-ico">
            +
          </div>
          <p>Criar story</p>
        </Button>
      </StorySt>
      <StorySt>

      </StorySt>
    </StorysSt>
  )
}

export default Storys;