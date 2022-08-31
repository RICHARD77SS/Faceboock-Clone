import React from 'react';

import { RiVideoAddFill } from 'react-icons/ri';

import { ModalSalaSt, ModalSalaContentSt, ModalSt, SalaTopSt, SalaBottomSt, SalaCenterSt, SalaFlexSt, SalaBlockSt, IconSt } from './styles';

import Button from '../Button';

interface ModalProps {
  children?: React.ReactNode;
  salaUserFirstName?: string;
  salaUserLastName?: string;
  salaUserImage?: string;
  salaUserImageAlt?: string;

}

const ModalSalaFriends = (Props:ModalProps) => {
  return (
    <ModalSalaSt {...Props}>
      <ModalSalaContentSt>
        <ModalSt>
          <SalaTopSt>
            <IconSt>
              <img src={Props.salaUserImage} alt={Props.salaUserImageAlt} />
            </IconSt>
            {Props.children}
          </SalaTopSt>
          <SalaCenterSt>
            <h3>{Props.salaUserFirstName} {Props.salaUserLastName}</h3>
          </SalaCenterSt>
          <SalaBottomSt>

            <Button className='btn-criar'>
              <div className="ico">
                <RiVideoAddFill />
              </div>
              <SalaBlockSt>
                <h4>Iniciar um bate-papo de video</h4>
                <p>{Props.salaUserFirstName} receberá um convite automaticamente.</p>
              </SalaBlockSt>
            </Button>
          </SalaBottomSt>
        </ModalSt>
      </ModalSalaContentSt>
    </ModalSalaSt>
  )
}

export default ModalSalaFriends;