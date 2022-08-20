import React from 'react';
import { CriarSt } from './styles';
import { FaBookOpen } from 'react-icons/fa';
import { RiVideoAddFill, RiShoppingBag3Fill } from 'react-icons/ri';
import { MdOutlineNoteAlt } from 'react-icons/md';
import { RiFlagFill } from 'react-icons/ri';
import { BsFillMegaphoneFill } from 'react-icons/bs';
import { RiGroup2Fill } from 'react-icons/ri';
import { BsFillCalendar2EventFill } from 'react-icons/bs';
import Hr from '../Hr';
import Button from '../Button';

const CriarMain = () => {
  return (
    <CriarSt>
      <h3>Criar</h3>
      <Button className='button'>
        <div className="ico">
          <MdOutlineNoteAlt />
        </div>
        <div className='block'>
          Publicar
          <p>Compartilhe uma publicação mo Feed de<br /> Notícias.</p>
        </div>
      </Button>
      <Button className='button'>
        <div className="ico">
          <FaBookOpen />
        </div>
        <div className='block'>
          Story
          <p>Compartilhe uma foto ou escreva algo.</p>
        </div>
      </Button>
      <Button className='button'>
        <div className="ico">
          <RiVideoAddFill />
        </div>
        <div className='block'>
          Sala
          <p>Converse por vídeo com qualquer pessoa,<br />
            dentro ou fora do Facebook, sem limite de 
          tempo.</p>
        </div>
      </Button>
      <Hr className='hr' width='90%' />
      <Button className='button'>
        <div className="ico">
          <RiFlagFill />
        </div>
        <div className='block'>
          Pagina
          <p>Conecte-se e compartilhe com clientes ou fãs.</p>
        </div>
      </Button>
      <Button className='button'>
        <div className="ico">
          <BsFillMegaphoneFill />
        </div>
        <div className='block'>
          Anúncio
          <p>Anuncie sua empresa, marca ou organização.</p>
        </div>
      </Button>
      <Button className='button'>
        <div className="ico">
          <RiGroup2Fill />
        </div>
        <div className='block'>
          Grupo
          <p>Conecte-se com pessoas que compartilham seus<br /> interesses.</p>
        </div>
      </Button>
      <Button className='button'>
        <div className="ico">
          <BsFillCalendar2EventFill />
        </div>
        <div className='block'>
          Evento
          <p>Reúna as pessoas com um evento público ou <br />
          privado.</p>
        </div>
      </Button>
      <Button className='button'>
        <div className="ico">
          <RiShoppingBag3Fill />
        </div>
        <div className='block'>
          Classificado do Marketplace
          <p>Venda itens para as pessoas na sua comunidade.</p>
        </div>
      </Button>
    </CriarSt>
  )
}

export default CriarMain;