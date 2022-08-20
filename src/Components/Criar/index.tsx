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
const Criar = () => {
  return (
    <CriarSt>
      <h3>Criar</h3>
      <Button className='button'><div className="ico"><MdOutlineNoteAlt /></div>Publicar</Button>
      <Button className='button'><div className="ico"><FaBookOpen /></div>Story</Button>
      <Button className='button'><div className="ico"><RiVideoAddFill /></div>Sala</Button>
      <Hr width='90%' />
      <Button className='button'><div className="ico"><RiFlagFill /></div>Pagina</Button>
      <Button className='button'><div className="ico"><BsFillMegaphoneFill /></div>Anúncio</Button>
      <Button className='button'><div className="ico"><RiGroup2Fill /></div>Grupo</Button>
      <Button className='button'><div className="ico"><BsFillCalendar2EventFill /></div>Evento</Button>
      <Button className='button'><div className="ico"><RiShoppingBag3Fill /></div>Classificado do<br /> Marketplace</Button>
    </CriarSt>
  )
}

export default Criar;