import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai'
import { FiMoreHorizontal } from 'react-icons/fi'

import { NavLink } from 'react-router-dom';

import { WatchTopNavSt, MoreWrapper } from './styles';
import Button from '../Button';
import WatchFollows from '../WatchFollows';

interface TopNavProps {
  className?: string;
}


const WatchTopNav = (Props: TopNavProps) => {

  const [more, setMore] = React.useState(false)
  const moreToggle = () => {
    setMore(more === true ? false : true)
  }

  const [follows, setFollows] = React.useState(false)

  return (
    <WatchTopNavSt {...Props}>
      <h3>Watch</h3>
      <NavLink className='navlink' to='/watch/:home'>
        Página inicial
      </NavLink>
      <NavLink className='navlink' to='/watch/live:live'>
        Ao vivo
      </NavLink>
      <NavLink className='navlink' to='/watch/shows:shows'>
        Programas
      </NavLink>
      <NavLink className='navlink explore' to='/watch/topic:topic'>
        Explorar
      </NavLink>
      <NavLink className='navlink save' to='/watch/saved:saved'>
        Videos salvos
      </NavLink>
      <Button onClick={() => { setFollows(true) }} className='navlink follow' >
        Seguindo
      </Button>
      <Button className='search' >
        <AiOutlineSearch />
      </Button>
      <Button onClick={() => { moreToggle() }} className='more'>
        <FiMoreHorizontal />
      </Button>
      {more ?
        <MoreWrapper>
          <NavLink className='programs' to='/watch/shows:shows'>
            Programas
          </NavLink>
          <NavLink className='explore' to='/watch/topic:topic'>
            Explorar
          </NavLink>
          <NavLink className='save' to='/watch/saved:saved'>
            Videos salvos
          </NavLink>
          <Button className='follow' >
            Seguindo
          </Button>
        </MoreWrapper>
        : null}
      {follows ?
        <>

          <WatchFollows>
            <Button onClick={() => setFollows(false)} className='button-close'>
              <AiOutlineClose />
            </Button>
          </WatchFollows>
          <Button className='container-close' onClick={() => setFollows(false)} >
          </Button>
        </>
        : null}
    </WatchTopNavSt>
  )
}

export default WatchTopNav;