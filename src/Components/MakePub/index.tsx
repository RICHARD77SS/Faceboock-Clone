import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import { BiWorld } from 'react-icons/bi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FiMoreHorizontal } from 'react-icons/fi';
import { HiFlag } from 'react-icons/hi';
import { MdOutlineEmojiEmotions, MdPhotoLibrary, MdInsertEmoticon } from 'react-icons/md';
import { FaUserTag, FaMapMarkerAlt } from 'react-icons/fa';
import { BsEmojiSmile } from 'react-icons/bs';

import { MakePubSt, Flex1St, Flex2St, ModalPostSt, ModalConteinerSt, AdicionarSt, ModlSt, ModlBlockSt } from './styles';

import Hr from '../Hr';
import Input from '../Input';
import Button from '../Button';
import VideoLiveIcon from '../VideoLive-Icon';
import FotoVideoPostIcon from '../FotoVideoPostIcon';



export const MakePub = () => {
  const [postOpen, setPostOpen] = React.useState(false);

  return (
    <MakePubSt>
      <Flex1St>
        <img src="https://i.postimg.cc/brczWrGr/richardsilva.jpg" alt="" />
        {postOpen ?
          <>
            <Button className='bd' onClick={() => setPostOpen(false)}></Button>
            <ModalConteinerSt>
              <ModalPostSt>
                <ModlSt>
                  <h3>Criar publicação</h3>
                  <Button className='btn-close' onClick={() => setPostOpen(false)}><AiOutlineClose /></Button>
                </ModlSt>
                <Hr width='100%' className='hr' />
                <ModlSt>
                  <img src="https://i.postimg.cc/brczWrGr/richardsilva.jpg" alt="" />
                  <ModlBlockSt>
                    <p>Richard Silva</p>
                    <Button className='btn-mod'><BiWorld />Publico<IoMdArrowDropdown /></Button>
                  </ModlBlockSt>
                </ModlSt>
                <textarea className='input-text' title='text' placeholder='   No que você esta pensando, Richard ?'></textarea>
                <ModlSt>
                  <Button className='btn-col'><img src="https://i.postimg.cc/nrrh3qNz/download.png" alt="" /></Button>
                  <Button className='btn-emo'><BsEmojiSmile /></Button>
                </ModlSt>
                <AdicionarSt>
                  <p>Adicionar à sua puclicação</p>
                  <Button className='btn a'><MdPhotoLibrary /></Button>
                  <Button className='btn b'><MdOutlineEmojiEmotions /></Button>
                  <Button className='btn c'><FaUserTag /></Button>
                  <Button className='btn d'><FaMapMarkerAlt /></Button>
                  <Button className='btn e'><HiFlag /></Button>
                  <Button className='btn f'><FiMoreHorizontal /></Button>
                </AdicionarSt>
                <Button className='btn-publ'>Publicar</Button>
              </ModalPostSt>
            </ModalConteinerSt>
          </>
          : null}
        <Input placeholder=' Noque voce esta pensando. Richard?' className='input' onClick={() => setPostOpen(true)} />
      </Flex1St>
      
      <Flex2St>
        <Button className='btn icoa'><VideoLiveIcon /><p>Video ao vivo</p></Button>
        <Button className='btn icob'><FotoVideoPostIcon /><p>Foto/ Video</p></Button>
        <Button className='btn icoc'><MdInsertEmoticon /><p>Sentimento/Atividade</p></Button>
      </Flex2St>
    </MakePubSt>
  )
}

export default MakePub;