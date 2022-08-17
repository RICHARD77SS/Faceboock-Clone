import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import { BsEmojiSmile } from 'react-icons/bs';
import { MakePubSt, Flex1St, Flex2St, ModalPostSt, ModalConteinerSt, AdicionarSt, ModlSt, ModlBlockSt } from './styles';

import Hr from '../Hr';
import Input from '../Input';
import Button from '../Button';
import VideoLiveIcon from '../VideoLive-Icon';
import FotoVideoPostIcon from '../FotoVideoPostIcon';
import SentimentoAtividade from '../Sentimento/atividade'


export const MakePub = () => {
  const [postOpen, setPostOpen] = React.useState(false);
  const open = () => {
    setPostOpen(true)
    document.body.style.overflow = 'hidden'
  }
  const close = () => {
    setPostOpen(false)
    document.body.style.overflow = 'unset'
  }
  return (
    <MakePubSt>
      <Flex1St>
        <img src="https://i.postimg.cc/brczWrGr/richardsilva.jpg" alt="" />
        {postOpen ?
          <ModalConteinerSt>
            <ModalPostSt>
              <ModlSt>
                <h3>Criar publicação</h3>
                <Button className='btn-close' onClick={() => close()}><AiOutlineClose /></Button>
              </ModlSt>
              <Hr width='100%' className='hr' />
              <ModlSt>
                <img src="https://i.postimg.cc/brczWrGr/richardsilva.jpg" alt="" />
                <ModlBlockSt>
                  <p>Richard Silva</p>
                  <Button className='btn-mod'>Publico</Button>
                </ModlBlockSt>
              </ModlSt>
              <textarea className='input-text' title='text'></textarea>
              <ModlSt>
                <Button className='btn-col'><img src="https://i.postimg.cc/nrrh3qNz/download.png" alt="" /></Button>
                <Button className='btn-emo'><BsEmojiSmile /></Button>
              </ModlSt>
              <AdicionarSt>
                <Button>1</Button>
                <Button>1</Button>
                <Button>1</Button>
                <Button>1</Button>
              </AdicionarSt>
              <Button className='btn-publ'>Publicar</Button>
            </ModalPostSt>
          </ModalConteinerSt>
        : null}
        <Input placeholder=' Noque voce esta pensando. Richard?' className='input' onClick={() => open()} />
      </Flex1St>
      <Hr width='106%' className='hr'/>
      <Flex2St>
        <Button className='btn'><VideoLiveIcon /><p>Video ao vivo</p></Button>
        <Button className='btn'><FotoVideoPostIcon /><p>Foto/ Video</p></Button>
        <Button className='btn'><SentimentoAtividade /><p>Sentimento / Atividade</p></Button>
      </Flex2St>
    </MakePubSt>
  )
}

export default MakePub;