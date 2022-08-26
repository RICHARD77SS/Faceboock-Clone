import React from 'react';

import { BatepapoSt, BatepapoTopSt, BatepapoUsersSt, BlockSt, DivSt, DivIcoSt } from './styles';

import { AiOutlineRight } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoExpandOutline } from 'react-icons/io5';
import { IoMdChatboxes } from 'react-icons/io';
import { BiVideoPlus } from 'react-icons/bi';
import { MdOutlineNoteAlt } from 'react-icons/md';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Input from '../Input';
const BatePapo = () => {

  return (
    <BatepapoSt>
      <BatepapoTopSt>
        <h2>Bate-papos</h2>
        <DivIcoSt>
          <FiMoreHorizontal />
        </DivIcoSt>
        <DivIcoSt>
          <IoExpandOutline />
        </DivIcoSt>
        <DivIcoSt>
          <BiVideoPlus />
        </DivIcoSt>
        <DivIcoSt>
          <MdOutlineNoteAlt />
        </DivIcoSt>
      </BatepapoTopSt>
      <Input placeholder='   Pesquisar no Messenger' type='search' />
      <BatepapoUsersSt>
        <DivSt>
          <IoMdChatboxes />
        </DivSt>
        <BlockSt>
          <h4>Novas solicitações de contato</h4>
          <p className='bl'>De Tal pessoa e outras 4 pessoas</p>
        </BlockSt>
        <AiOutlineRight className='ai' size='20' />
      </BatepapoUsersSt>
      <BatepapoUsersSt>
        <DivSt>
          <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/120923170_1006167356475369_7354394842471469497_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Pyp9kDCjpVgAX93LRRR&tn=GQbFix6_80bH1mDo&_nc_ht=scontent.fcgh2-1.fna&oh=00_AT-Pg3h2TmGfm4KcKlbb1sQnOqJ6qIPAAlbLM0MCA2Ihaw&oe=6317C312" alt="" />
        </DivSt>
        <BlockSt>
          <h4>User name</h4>
          <p>Você: Menssagem. <span>2d</span></p>
        </BlockSt>
        <BsFillCheckCircleFill className='bs' />
      </BatepapoUsersSt>
      <BatepapoUsersSt>
        <DivSt>
          <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/120923170_1006167356475369_7354394842471469497_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Pyp9kDCjpVgAX93LRRR&tn=GQbFix6_80bH1mDo&_nc_ht=scontent.fcgh2-1.fna&oh=00_AT-Pg3h2TmGfm4KcKlbb1sQnOqJ6qIPAAlbLM0MCA2Ihaw&oe=6317C312" alt="" />
        </DivSt>
        <BlockSt>
          <h4>User name</h4>
          <p>Você: Menssagem. <span>2d</span></p>
        </BlockSt>
        <BsFillCheckCircleFill className='bs' />
      </BatepapoUsersSt>
    </BatepapoSt>
  )
}

export default BatePapo;