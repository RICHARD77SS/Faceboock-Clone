import React from 'react';

import { ContaModalSt, ContasBoxSt, DivIconSt, ContaModaFooterlSt } from './styles';

import { BsGearFill, BsFillMoonFill } from 'react-icons/bs'
import { MdHelp, MdFeedback } from 'react-icons/md'
import { ImExit } from 'react-icons/im'
import { AiOutlineRight } from 'react-icons/ai'
import Button from '../Button';

const ContaModal = () => {
  return (
    <ContaModalSt>
      <ContasBoxSt>
        <Button className='btn-flex top'>
          <img className='img' src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/120923170_1006167356475369_7354394842471469497_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Pyp9kDCjpVgAX93LRRR&tn=GQbFix6_80bH1mDo&_nc_ht=scontent.fcgh2-1.fna&oh=00_AT-Pg3h2TmGfm4KcKlbb1sQnOqJ6qIPAAlbLM0MCA2Ihaw&oe=6317C312" alt="" />
          <h3>Richard Silva</h3>

        </Button>
        <hr className='hr'/>
        <Button className='btn-viw'>
          Ver todos os perfis
        </Button>
      </ContasBoxSt>
      <Button className='btn-flex'>
        <DivIconSt>
          <BsGearFill />
        </DivIconSt>
        <p>
          Configurações e privacidade
        </p>
        <AiOutlineRight className='icon' />
      </Button>
      <Button className='btn-flex'>
        <DivIconSt>
          <MdHelp />
        </DivIconSt>
        <p>
          Ajuda e suporte
        </p>
        <AiOutlineRight className='icon' />
      </Button>
      <Button className='btn-flex'>
        <DivIconSt>
          <BsFillMoonFill />
        </DivIconSt>
        <p>
          Tela e acessibilidade
        </p>
        <AiOutlineRight className='icon' />
      </Button>
      <Button className='btn-flex'>
        <DivIconSt>
          <MdFeedback />
        </DivIconSt>
        <p>
          Dar feedback
        </p>
        <AiOutlineRight className='icon' />
      </Button>
      <Button className='btn-flex'>
        <DivIconSt>
          <ImExit />
        </DivIconSt>
        <p>
          Sair
        </p>
        <AiOutlineRight className='icon' />
      </Button>
      <ContaModaFooterlSt >

      </ContaModaFooterlSt>
    </ContaModalSt>
  )
}

export default ContaModal;