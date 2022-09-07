import React from 'react';

import { AiOutlineSearch } from 'react-icons/ai'
import { FiMoreHorizontal } from 'react-icons/fi'

import { NavLink } from 'react-router-dom';

import { WatchTopNavSt, MoreWrapper } from './styles';
import Button from '../Button';

const WatchTopNav = () => {

  const [more, setMore] = React.useState(false)
  const moreToggle = () => {
    setMore(more === true ? false : true)
  }
  return (
    <WatchTopNavSt>
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
      <Button className='navlink follow' >
        Seguindo
      </Button>
      <Button className='search' >
        <AiOutlineSearch />
      </Button>
      <Button onClick={()=>{moreToggle()}} className='more'>
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
    </WatchTopNavSt>
  )
}

export default WatchTopNav;