import React from 'react';
import { GrAdd } from 'react-icons/gr'
import { GpChatSt, FlexSt } from './styles';
import Button from '../Button';
import listaDeGruposContatos from './listaDeGruposContatos.json'
import GroupContacts from '../GroupContacts'
import { GrClose } from 'react-icons/gr';
import GroupMensagem from '../GroupMensagem';
const GpChat = () => {
  const [openGroupChat, setOpenGroupChat] = React.useState(false)
  return (
    <GpChatSt>
      <FlexSt>
        <h4>Conversas em grupo</h4>
      </FlexSt>
      <>
        {listaDeGruposContatos.map((GroupContatosInfo) => {
          return (
            <>
              <GroupContacts name={GroupContatosInfo.nome} image={GroupContatosInfo.img} function={() => setOpenGroupChat(true)} />
            </>
          )
        })}
      </>
      {openGroupChat?
        <>
          <GroupMensagem>
            <Button className='btn-icon' onClick={() => setOpenGroupChat(false)}><GrClose />
            </Button>
          </GroupMensagem>
        </>: null}
      <Button className='bt-user'>
        <div className="div-ico"><GrAdd /></div>
        <h4>Criar novo grupo</h4>
      </Button>
    </GpChatSt>
  )
}

export default GpChat;