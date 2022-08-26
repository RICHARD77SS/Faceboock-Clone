import React from 'react';

import { NotificationSt, BlockSt, FlexSt, BollSt, Notificationu, OptionsNotificationSt } from './styles'

import { FiMoreHorizontal } from 'react-icons/fi';
import { TbPoint } from 'react-icons/tb';
import { FaUserAlt } from 'react-icons/fa';

import { GrCheckmark } from 'react-icons/gr';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { VscCloseAll } from 'react-icons/vsc';
import { BsBug } from 'react-icons/bs';

import Button from '../Button';

const Notification = () => {

  const [option, setOption] = React.useState(false)
  const toggleOption = () => {
    setOption(option === true ? false : true)
  }

  return (
    
    <NotificationSt>
      <FlexSt>
        <h2>Notificações</h2>
        <Button className='more'><FiMoreHorizontal /></Button>
      </FlexSt>
      <FlexSt>
        <Button className='tudo'>Tudo</Button>
        <Button className='notl'>Não lidas</Button>
      </FlexSt>
      <FlexSt>
        <h4>Anteriores</h4>
        <Button className='view'>Ver tudo</Button>
      </FlexSt>
      <Notificationu id='notification'>
        <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/120923170_1006167356475369_7354394842471469497_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Pyp9kDCjpVgAX93LRRR&tn=GQbFix6_80bH1mDo&_nc_ht=scontent.fcgh2-1.fna&oh=00_AT-Pg3h2TmGfm4KcKlbb1sQnOqJ6qIPAAlbLM0MCA2Ihaw&oe=6317C312" alt="" />
        <BollSt><FaUserAlt /></BollSt>
        <BlockSt>
          <p>Você tem uma nova sugestão de amizade</p>
          <span>há 2 semanas</span>
        </BlockSt>
        <TbPoint className='tbp' size='40' />
        <Button id='optionb' className='option' onClick={() => toggleOption()}><FiMoreHorizontal /></Button>
        {option ?
          <Button className='bc' onClick={() => setOption(false)}>
            <OptionsNotificationSt>
              <Button className='btn-opt'><GrCheckmark className='ico' />Marcar como lida</Button>
              <Button className='btn-opt'><AiOutlineCloseSquare className='ico' />Remover essa notificação</Button>
              <Button className='btn-opt'><VscCloseAll className='ico' />Desativar essas notificações</Button>
              <Button className='btn-opt'><BsBug className='ico' />Relatar problemas para a<br />
                equipe de Notificações</Button>
            </OptionsNotificationSt>
          </Button>
          : null}
      </Notificationu>
    </NotificationSt>
  )
}

export default Notification;