import React from 'react';
import Button from '../Button';
import Hr from '../Hr';
import Logo from '../Logo';

import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';

import { ModalSt, ModalLeftSt, ModalRightSt, FlexSt, CircleSt, ModalAddStoryTopNavSt, BlockSt, ContentSt } from './styles';
import Config from '../Config';
import NavRight from '../NavRight';

const ViewStorys = () => {
  const [config, setConfig] = React.useState(false)
  return (
    <ModalSt>
      <ModalLeftSt>
        <FlexSt>
          <Link to='/'>
            <Button className='btn-close' ><AiOutlineClose /></Button>
          </Link>
          <Logo />
        </FlexSt>
        <Hr className='hr' width='100%' />
        <BlockSt>
          <h2>Stories</h2>
          <FlexSt className='btn'>
            <Button className='button'>Itens Arquivados</Button>
            <Button onClick={() => { setConfig(true) }} className='button btn-config'>Configurações</Button>
          </FlexSt>
          <h4>Seu Story</h4>
        </BlockSt>
        {config ?
          <>
            <Config>
              <Button className='btn cancelar' onClick={() => { setConfig(false) }}>Cancelar</Button>
            </Config>
          </>
          : null}
        <Link to="/story/" className='link'>
          <FlexSt className='make'>
            <CircleSt>
              +
            </CircleSt>
            <BlockSt>
              <h5>Criar um story</h5>
              <p>Compartilhe uma foto ou escreva algo.</p>
            </BlockSt>
          </FlexSt>
        </Link>
        <br />
        <h4>Todos os stories</h4>
        <FlexSt>
          <CircleSt className='circle-user'>
            <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/120923170_1006167356475369_7354394842471469497_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EqoFnRS5Oi0AX9CpJc_&tn=GQbFix6_80bH1mDo&_nc_ht=scontent.fcgh2-1.fna&oh=00_AT9UepzboSKEuN5h-39GfFr-DrwhV7VktGHrlSY6MT_qmQ&oe=63337292" alt="User" />
          </CircleSt>
          <BlockSt>
            <h5>username</h5>
            <p>5 h</p>
          </BlockSt>
        </FlexSt>

      </ModalLeftSt>
      <ModalRightSt>
        <BlockSt className='block-right'>
          <ModalAddStoryTopNavSt>
            <NavRight />
          </ModalAddStoryTopNavSt>
          <ContentSt>
            <h2>content</h2>
          </ContentSt>
        </BlockSt>
      </ModalRightSt>
    </ModalSt>
  )
}

export default ViewStorys;