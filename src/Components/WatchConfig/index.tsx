import React from 'react';

import { WatchConfigSt, IconDiv } from './styles';
import Switch from 'react-switch';
import Hr from '../Hr';
import Button from '../Button';
import { BsFillGearFill } from 'react-icons/bs';
import { CgNotifications } from 'react-icons/cg';

const WatchConfig = () => {
  return (
    <WatchConfigSt >
      <h4>Configurações de notficação</h4>
      <p>Voçê pode gerenciar como receber notificações sobre atualizações do watch.</p>
      <Hr className='hr' width='98%' />
      <Button className='button'>
        <IconDiv>
          <CgNotifications />
        </IconDiv>
        <p>Mostrar pontos de notificação</p>
        <Switch
          onChange={() => { }}
          checked={true}
          height={20}
          width={35}
          handleDiameter={20}
          onHandleColor='#fff'
          offHandleColor='#fff'
          offColor='#ccc'
          onColor='#2358E1'
        />

      </Button>
      <Button className='button'>
        <IconDiv>
          <BsFillGearFill />
        </IconDiv>
        <p>Notificações personalizadas</p>
      </Button>
    </WatchConfigSt>
  )
}

export default WatchConfig;