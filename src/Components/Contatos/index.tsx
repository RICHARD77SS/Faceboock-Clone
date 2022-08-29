import React from 'react';
import { MdMoreHoriz, MdVideoCall, MdSearch } from 'react-icons/md'
import Button from '../Button';

import { ContatosSt, FlexSt, ContatoUsersSt } from './styles'
import { GrClose } from 'react-icons/gr';

import listaDeContatos from './listaDeContatos.json'
import Contato from '../Contato';

import Mensagem from '../Mensagem';

const Contatos = () => {
  const [openMensagem, setOpenMensagem] = React.useState(false)
  return (
    <ContatosSt>
      <FlexSt>
        <h4>Contatos</h4>
        
        <Button className='bt-more'><MdVideoCall className='ico' /></Button>
        <Button className='bt-more'><MdSearch className='ico' /></Button>
        <Button className='bt-more'><MdMoreHoriz className='ico' /></Button>
      </FlexSt>
      <ContatoUsersSt>
        {listaDeContatos.map((ContatoInfo) => {
          return (
            <>
              <Contato id={ContatoInfo.id} name={ContatoInfo.nome} image={ContatoInfo.img} function={() => setOpenMensagem(true)} />
              
              {openMensagem ? 
                <>
                  <Mensagem name={ContatoInfo.nome} image={ContatoInfo.img} >
                    <Button className='btn-icon' onClick={() => setOpenMensagem(false)}><GrClose />
                    </Button>
                  </Mensagem>
                </>: null}
            
            </>
          )
        })}
      </ContatoUsersSt>
    </ContatosSt>
  )
}

export default Contatos;