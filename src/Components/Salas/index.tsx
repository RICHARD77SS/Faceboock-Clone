import React from 'react';
import { RiVideoAddFill } from 'react-icons/ri';
import { BsInfoCircleFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

import { SalasSt, InfoSt, IconSt, Div } from './styles';
import Button from '../Button';
import ModalSala from '../ModalSala';

const Salas = () => {
  const [openSalas, setOpenSalas] = React.useState(false);

  return (
    <Div>
      <Button className='btn-make' onClick={()=>setOpenSalas(true)}>
        <SalasSt>
          <InfoSt>
            <IconSt>
              <RiVideoAddFill />
            </IconSt>
            <Button className='info'><BsInfoCircleFill /></Button>
          </InfoSt>
          <h3>Sala de Richard</h3>
          <p>Começar</p>
          <Button className='btn-criar'>Criar</Button>
        </SalasSt>
      </Button>
      {openSalas?
        <>
          <Button className='bd' onClick={() => setOpenSalas(false)}></Button>
          <ModalSala>
            <Button className='btn close' onClick={() => setOpenSalas(false)}><AiOutlineClose /></Button>
          </ModalSala>
        </>
        : null}
    </Div>
  )
}

export default Salas;