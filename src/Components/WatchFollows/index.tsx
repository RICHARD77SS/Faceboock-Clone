import React from 'react';

import { ContainerSt, FollowsContainerSt, FollowsTopSt, FollowsSt, FlexSt, BlockSt, IconDiv } from './styles';

import Button from '../Button';

import { BsFillPlayFill } from 'react-icons/bs';
interface FollowsProps {
  children: React.ReactNode;
}

const WatchFollows = (Props: FollowsProps) => {
  return (
    <ContainerSt {...Props}>

      <FollowsContainerSt>
        <FollowsTopSt>
          <h3>Seguindo</h3>
          {Props.children}
        </FollowsTopSt>
        <FollowsSt>

          <FlexSt>
            <p>Seguindo</p>
            <Button className='manange'>Gerenciar</Button>
          </FlexSt>

          <Button className='user'>
            <IconDiv>
              <BsFillPlayFill />
            </IconDiv>
            <BlockSt>
              <p>Videos mais recentes</p>
            </BlockSt>
          </Button>
          <Button className='user'>
            <img src="https://img.freepik.com/vetores-gratis/bebe-fofo-dormindo-na-ilustracao-do-icone-dos-desenhos-animados-do-travesseiro-de-nuvem_138676-2812.jpg?w=740&t=st=1662583775~exp=1662584375~hmac=675fd3605ae931ac0b818f89f2feb77036ff80859b8e49e821f4c88218d0aa19" alt="" />
            <BlockSt>
              <p>user 1</p>
              <span> 2 novos videos</span>
            </BlockSt>
          </Button>
          <Button className='user'>
            <img src="https://img.freepik.com/vetores-gratis/bebe-fofo-dormindo-na-ilustracao-do-icone-dos-desenhos-animados-do-travesseiro-de-nuvem_138676-2812.jpg?w=740&t=st=1662583775~exp=1662584375~hmac=675fd3605ae931ac0b818f89f2feb77036ff80859b8e49e821f4c88218d0aa19" alt="" />
            <BlockSt>
              <p>user more</p>
              <span> 9+ novos videos</span>
            </BlockSt>
          </Button>

        </FollowsSt>

      </FollowsContainerSt>

    </ContainerSt>
  )
}

export default WatchFollows;