import React from 'react';

import { AiFillMedicineBox, AiOutlineClose } from 'react-icons/ai';

import { BsBookmarkHeartFill } from 'react-icons/bs';

import { FiMoreHorizontal } from 'react-icons/fi';
import { BiWorld } from 'react-icons/bi';

import { Wrapper, Live, LiveHeader, LiveIn, VideoContainer, Video, Footer, Reactions, Sidebar, Navbar, SideHeader, UserInfos, Block, Interactions, Icon, TabContainer, TabButtons, TabContent } from './styles';
import Button from '../Button';
import Logo from '../Logo';
import NavRight from '../NavRight';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import TabLive from '../TabLive';

const LivePage = () => {

  return (
    <Wrapper>
      <Live>
        <LiveHeader>
          <Link to='/watch/live:live'>
            <Button>
              <AiOutlineClose />
            </Button>
          </Link>
          <Logo />
          <LiveIn>

          </LiveIn>
        </LiveHeader>
        <VideoContainer>
          <Video src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' controls />
        </VideoContainer>
        <Footer>
          <Reactions>
            <img src="https://i.postimg.cc/vmFmxnfs/like.png" alt="Haha Icon by Icon Mafia on IconScout" />
          </Reactions>
          <Reactions>
            <img src="https://i.postimg.cc/9Fk0VKfz/love.png" alt="Haha Icon by Icon Mafia on IconScout" />
          </Reactions>
          <Reactions>
            <img src="https://i.postimg.cc/LsY0wqbn/care.png" alt="Haha Icon by Icon Mafia on IconScout" />
          </Reactions>
          <Reactions>
            <img src="https://i.postimg.cc/gJGkNPgt/haha.png" alt="Haha Icon by Icon Mafia on IconScout" />
          </Reactions>
          <Reactions>
            <img src="https://i.postimg.cc/fTyyGDD6/wow.png" alt="Haha Icon by Icon Mafia on IconScout" />
          </Reactions>
          <Reactions>
            <img src="https://i.postimg.cc/g26J0sw-s/sad.png" alt="Haha Icon by Icon Mafia on IconScout" />
          </Reactions>
          <Reactions>
            <img src="https://i.postimg.cc/Hk1zSZC8/angry.png" alt="Haha Icon by Icon Mafia on IconScout" />
          </Reactions>
        </Footer>
      </Live>
      <Sidebar>
        <Navbar>
          <NavRight />
        </Navbar>
        <SideHeader>
          <UserInfos>
            <img src="https://img.freepik.com/fotos-gratis/apta-a-mulher-caucasiana-no-boxe-sportswear-isolado-na-parede-branca-novato-boxeador-caucasiano-feminino-treinando-e-praticando-em-movimento-e-acao-esporte-estilo-de-vida-saudavel-conceito-de-movimento_155003-37780.jpg?w=740&t=st=1663093580~exp=1663094180~hmac=512b2884e6e3fda9d426780cd05efc0ca283c939a581c89caf62f66fd7882963" alt="User" />
            <Block>
              <p><a href="/">UserName</a> está ao vivo agora -- jogando <a href="/">Good of war</a></p>
              <span><p>59 min</p><BiWorld /></span>
            </Block>
            <Button><BsBookmarkHeartFill /></Button>
            <Button><FiMoreHorizontal /></Button>
          </UserInfos>
          <Interactions>
            <Icon>
              <img src="https://i.postimg.cc/vmFmxnfs/like.png" alt="Like Icon by Icon Mafia on IconScout" />
            </Icon>
            <Icon>
              <img src="https://i.postimg.cc/9Fk0VKfz/love.png" alt="love Icon by Icon Mafia on IconScout" />
            </Icon>
            <Icon>
              <img src="https://i.postimg.cc/LsY0wqbn/care.png" alt="care Icon by Icon Mafia on IconScout" />
            </Icon>
            <p>19</p>
            <p>7 comentários</p>
            <p>2 compartilhamentos</p>
          </Interactions>
          <Button className='follow-live'><AiFillMedicineBox size='22' /><p>Seguir</p> </Button>
        </SideHeader>
        <TabContainer className='tab-container'>
          <TabLive />
        </TabContainer>
      </Sidebar>
    </Wrapper>
  )
}

export default LivePage;