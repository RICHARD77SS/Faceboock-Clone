import React from 'react';

import { RiVideoAddFill } from 'react-icons/ri';
import { BsInfoCircleFill } from 'react-icons/bs';
import { MdWavingHand } from 'react-icons/md';
import { AiOutlineRight } from 'react-icons/ai';
import { GiAlarmClock } from 'react-icons/gi';

import { ModalSalaSt, ModalSalaContentSt, ModalSt, SalaTopSt, SalaBottomSt, SalaCenterSt, SalaFlexSt, SalaBlockSt, IconSt } from './styles';

import Button from '../Button';

interface ModalProps {
  children?: React.ReactNode;
}

const ModalSala = (Props:ModalProps) => {
  return (
    <ModalSalaSt {...Props}>
      <ModalSalaContentSt>
        <ModalSt>
          <SalaTopSt>
            <IconSt>
              <RiVideoAddFill />
            </IconSt>
            <Button className='btn info'>
              <BsInfoCircleFill />
            </Button>
            {Props.children}
          </SalaTopSt>
          <SalaCenterSt>
            <h3>Crie a sua sala</h3>
            <SalaFlexSt>
              <div className="bg hand">
                <MdWavingHand />
              </div>
              <SalaBlockSt>
                <h4>Nome da sala</h4>
                <p>Sala de Richard</p>
              </SalaBlockSt>
              <AiOutlineRight className='left-ico top' />
            </SalaFlexSt>
            <SalaFlexSt>
              <div className="bg clock">
                <GiAlarmClock />
              </div>
              <SalaBlockSt>
                <h4>Horario de inicio</h4>
                <p>Agora</p>
              </SalaBlockSt>
              <AiOutlineRight className='left-ico' />
            </SalaFlexSt>
          </SalaCenterSt>
          <SalaBottomSt>
            <p>Sua sala não ficará visivel até que você convide pessoas depois de criá-la.</p>
            <Button className='btn-criar'>Criar sala</Button>
          </SalaBottomSt>
        </ModalSt>
      </ModalSalaContentSt>
    </ModalSalaSt>
  )
}

export default ModalSala;