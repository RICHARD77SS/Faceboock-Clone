import React from 'react';

import { NavLink, Outlet } from 'react-router-dom';

import { BsFillGearFill } from 'react-icons/bs';
import { IoVideocam } from 'react-icons/io5';
import { RiClapperboardFill } from 'react-icons/ri';
import { FaBookmark } from 'react-icons/fa';
import { WatchSt, WatchLeftSt, WatchRightSt, Flex1St, DivIconSt } from './styles';
import Button from '../Button';
import Input from '../Input';

const Watch = () => {
  return (
    <WatchSt>
      <WatchLeftSt>
        <Flex1St>
          <h1>Watch</h1>
          <Button className='btn-config'>
            <BsFillGearFill />
          </Button>
        </Flex1St>
        <Input placeholder='  Pesquisar videos' />
        <NavLink className='navlink' to='/watch/:home'>
          <Button>
            <DivIconSt className='link-1'>
              <svg className='icon' viewBox="0 0 28 28" height="28" width="28">
                <path d="M 8.75 25.25 C 8.336 25.25 8 24.914 8 24.5 C 8 24.086 8.336 23.75 8.75 23.75 L 19.25 23.75 C 19.664 23.75 20 24.086 20 24.5 C 20 24.914 19.664 25.25 19.25 25.25 L 8.75 25.25 Z M 17 13 L 17 13 L 11 9 L 11 16 Z Z M 21.75 21.75 L 6.25 21.75 C 4.179 21.75 2.5 20.071 2.5 18 L 2.5 6.5 C 2.5 4.429 4.179 2.75 6.25 2.75 L 21.75 2.75 C 23.821 2.75 25.5 4.429 25.5 6.5 L 25.5 18 C 25.5 20.071 23.821 21.75 21.75 21.75 Z">
                </path>
              </svg>
            </DivIconSt>
            <p>Página inicial</p>
          </Button>
        </NavLink>
        <NavLink className='navlink' to={`/watch/live:live`}>
          <Button >
            <DivIconSt className='link-2'>
              <IoVideocam className='icon' />
            </DivIconSt>
            <p>Ao vivo</p>
          </Button>
        </NavLink>
        <NavLink className='navlink' to='/watch/shows'>
          <Button >
            <DivIconSt className='link-3'>
              <RiClapperboardFill className='icon' />
            </DivIconSt>
            <p>Programas</p>
          </Button>
        </NavLink>
        <NavLink className='navlink' to='/watch/saved'>
          <Button >
            <DivIconSt className='link-4
          '>
              <FaBookmark className='icon' />
            </DivIconSt>
            <p>Videos salvos</p>
          </Button>
        </NavLink>
      </WatchLeftSt>
      <WatchRightSt>
        <Outlet />
      </WatchRightSt>
    </WatchSt>
  )
}

export default Watch;
