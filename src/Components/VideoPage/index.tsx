import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BiWorld } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { BsPlayBtnFill } from 'react-icons/bs';
import { IoVideocam } from 'react-icons/io5';
import { AiOutlineClose, AiFillMedicineBox, AiOutlineCamera } from 'react-icons/ai';

import { Wrapper, Header, Left, Right, ContentPage,VideoContent, VideoContainer, Player,Video, VideoFooter, FooterTop, FooterBottom, InteractionData,SideVideo,SideTop,OwnerInfos,UserContainer, ButtonContainer, Block, TopTab, CommentsContainer, Comments, CommentsFooter, MakeComment, InputReactions, DivIcon,Main, MainContent, SideMain, More, Suggests,VideoSuggest, Infos, User } from './styles';
import Interaction from '../Interaction';
import WatchTopNav from '../WatchTopNav';
import ViewVideo from '../ViewVideo';
import NavRight from '../NavRight';
import Comment from '../Comment';
import Button from '../Button';
import Input from '../Input';
import Logo from '../Logo';
import { RiClapperboardFill } from 'react-icons/ri';
import { MdOutlineEmojiEmotions, MdOutlineGif } from 'react-icons/md';
import { GrEmoji } from 'react-icons/gr';
import { TbNote } from 'react-icons/tb';

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
                  <img src="" alt="" />
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
                <MakeComment>
                  <img src="" alt="" />
                  <Input placeholder='Escreva um comentário...' />
                  <InputReactions>
                    <DivIcon>
                      <MdOutlineEmojiEmotions />
                    </DivIcon>
                    <DivIcon>
                      <GrEmoji />
                    </DivIcon>
                    <DivIcon>
                      <AiOutlineCamera />
                    </DivIcon>
                    <DivIcon>
                      <MdOutlineGif />
                    </DivIcon>
                    <DivIcon>
                      <TbNote />
                    </DivIcon>
                  </InputReactions>
                </MakeComment>
              </CommentsContainer>
            </SideTop>
          </SideVideo>
        </VideoContent>
        <Main>
          <MainContent>
            <ViewVideo userImage='' userImageAlt='' userName='' dataPost='' titlePost='' descriptionPost='' videoPost=''/>
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
            <Suggests>
              <h3>Entretenimento</h3>
              <VideoSuggest>
                <img src="" alt="" />
                <Infos>
                  <h4>Title</h4>
                  <User>
                    <img src="" alt="" />
                    <p>User name</p>
                  </User>
                </Infos>
              </VideoSuggest>
            </Suggests>
          </SideMain>
        </Main>
      </ContentPage>
    </Wrapper>
  )
}

export default VideoPage;