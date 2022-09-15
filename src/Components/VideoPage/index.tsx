import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BiWorld } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { BsPlayBtnFill } from 'react-icons/bs';
import { IoVideocam } from 'react-icons/io5';
import { AiOutlineClose, AiFillMedicineBox } from 'react-icons/ai';

import { Wrapper, Header, Left, Right, ContentPage,VideoContent, VideoContainer, Player,Video, VideoFooter, FooterTop, FooterBottom, InteractionData,SideVideo,SideTop,OwnerInfos,UserContainer, ButtonContainer, Block, TopTab, CommentsContainer, Comments, CommentsFooter,Main, MainContent, SideMain, More } from './styles';
import Interaction from '../Interaction';
import WatchTopNav from '../WatchTopNav';
import ViewVideo from '../ViewVideo';
import NavRight from '../NavRight';
import Comment from '../Comment';
import Button from '../Button';

import Logo from '../Logo';
import { RiClapperboardFill } from 'react-icons/ri';


import ListVideoSuggest from '../ListVideoSuggest';
import MakeComments from '../MakeComments';

const VideoPage = () => {
  return (
    <Wrapper>
      <Header>
        <Left>
          <Button>
            <AiOutlineClose />
          </Button>
          <Logo />
        </Left>
        <Right>
          <NavRight />
        </Right>
      </Header>
      <WatchTopNav className='topnav' />
      <ContentPage>
        <VideoContent>
          <VideoContainer>
            <Player>
              <Video controls/>
            </Player>
            <VideoFooter>
              <FooterTop>
                <h2>Title for this video</h2>
                <Button><FiMoreHorizontal /></Button>
              </FooterTop>
              <FooterBottom>
                <Interaction />
                <InteractionData>
                  <img src="https://i.postimg.cc/vmFmxnfs/like.png" alt="Like Icon by Icon Mafia on IconScout" />
                  <p>Friend1, Friend2 e outras 74 mil pessoas</p>
                  <p>6,5mil comentários</p>
                  <span>11 mi visualizações</span>
                </InteractionData>
              </FooterBottom>
            </VideoFooter>
          </VideoContainer>
          <SideVideo>
            <SideTop>
              <OwnerInfos>
                <UserContainer>
                  <img src="https://i.postimg.cc/brczWrGr/richardsilva.jpg" alt="" />
                  <Block>
                    <h4>User name</h4>
                    <div className='p'> <p>18 de agosto ás 20:00</p>  <BiWorld /> </div>
                  </Block>
                </UserContainer>
                <ButtonContainer>
                  <Button><AiFillMedicineBox />Seguir</Button>
                  <Button><FiMoreHorizontal /></Button>
                </ButtonContainer>
              </OwnerInfos>
              <TopTab>
                <Button>Visão geral</Button>
                <Button>Comentários</Button>
              </TopTab>
              <CommentsContainer>
                <Comments>
                  <Comment userImage='' userName='Name of user' comment='Content message' dataComment='2 d' />
                  <Comment userImage='' userName='Name of user' comment='Content message' dataComment='2 d' />
                  <Comment userImage='' userName='Name of user' comment='Content message' dataComment='2 d' />
                  <Comment userImage='' userName='Name of user' comment='Content message' dataComment='2 d' />
                  <CommentsFooter>
                    <Button>Ver mais comentários</Button>
                    <p>2 de 3.477</p>
                  </CommentsFooter>
                </Comments>
                <MakeComments />
              </CommentsContainer>
            </SideTop>
          </SideVideo>
        </VideoContent>
        <Main>
          <MainContent>
            <ViewVideo userImage='https://i.postimg.cc/brczWrGr/richardsilva.jpg' userImageAlt='' userName='' dataPost='' titlePost='' descriptionPost='' videoPost=''/>
          </MainContent>
          <SideMain>
            <h3>Explore mais vídeos no Watch</h3>
            <More>
              <Link className='link' to="/watch/home">
                <BsPlayBtnFill />
                <p>Página inicial</p>
              </Link>
              <Link className='link' to='/watch/live:live'>
                <IoVideocam />
                <p>Ao vivo</p>
              </Link>
              <Link className='link' to='/watch/shows:shows'>
                <RiClapperboardFill />
                <p>Programas</p>
              </Link>
            </More>
            <ListVideoSuggest />
          </SideMain>
        </Main>
      </ContentPage>
    </Wrapper>
  )
}

export default VideoPage;