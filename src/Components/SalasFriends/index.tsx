import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

import { SalasSt, InfoSt, IconSt, Div } from './styles';
import Button from '../Button';
import ModalSalaFriends from '../ModalSalaFriends';

interface SalasProps {
  salaName?: string;
  salaUserFirstName?: string;
  salaUserLastName?: string;
  salaUserImage?: string;
  salaUserImageAlt?: string;

}

const SalasFriends = (Props: SalasProps) => {
  const [openSalas, setOpenSalas] = React.useState(false);

  return (
    <Div>
      <Button className='btn-make' onClick={()=>setOpenSalas(true)}>
        <SalasSt>
          <InfoSt>
            <IconSt>
              <img src={Props.salaUserImage} alt={Props.salaUserImageAlt} />
            </IconSt>
            <Button className='info'><BsInfoCircleFill /></Button>
          </InfoSt>
          <h3>{Props.salaName}{Props.salaUserFirstName} {Props.salaUserLastName}</h3>
          <Button className='btn-criar'>Dê um oi</Button>
        </SalasSt>
      </Button>
      {openSalas?
        <>
          <Button className='bd' onClick={() => setOpenSalas(false)}></Button>
          <ModalSalaFriends
            salaUserFirstName={Props.salaUserFirstName}
            salaUserLastName={Props.salaUserLastName}
            salaUserImage={Props.salaUserImage}
            salaUserImageAlt={Props.salaUserImageAlt}

          >
            <Button className='btn close' onClick={() => setOpenSalas(false)}><AiOutlineClose /></Button>
          </ModalSalaFriends>
        </>
        : null}
    </Div>
  )
}

export default SalasFriends;