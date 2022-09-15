import React from 'react';
import Logo from '../Logo';
import NavRight from '../NavRight';
import WatchTopNav from '../WatchTopNav';
import { FiMoreHorizontal } from 'react-icons/fi';
import Interaction from '../Interaction';
import { BiWorld } from 'react-icons/bi';
import Comment from '../Comment';
import Input from '../Input';
import ViewVideo from '../ViewVideo';
import { Link } from 'react-router-dom';
import { BsPlayBtnFill } from 'react-icons/bs';
import { IoVideocam } from 'react-icons/io5';


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
      <WatchTopNav />
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
              </FootTop>
              <FooterBottom>
                <Interaction />
                <InteractionData>
                  <p>Friend e outras 74 mil pessoas</p>
                  <p>6,5mil comentários</p>
                  <p>11 mi visualizações</p>
                </InteractionData>
              </FooterBottom>
            </VideoFooter>
          </VideoContainer>
          <SideVideo>
            <SideTop>
              <OwnerInfos>
                <img src="" alt="" />
                <Block>
                  <h4>User name</h4>
                  <p>18 de agosto ás 20:00 <BiWorld /> </p>
                </Block>
                <Button><AiFillMedicineBox />Seguir</Button>
                <Buttoon><FiMoreHorizontal /></Buttoon>
              </OwnerInfos>
              <TopTab>
                <Button>Visão geral</Button>
                <Button>Comentários</Button>
              </TopTab>
              <CommentsContainer>
                <Comments>
                  <Comment userImage='' userName='' comment='' dataComment='' />
                  <CommentsFooter>
                    <Button>Ver maus comentários</Button>
                    <p>2 de 3.477</p>
                  </CommentsFooter>
                </Comments>
                <MakeComment>
                  <img src="" alt="" />
                  <Input placeholder='Escreva um comentário...' />
                  <InputReactions>
                    <DivIcon>
                      <img src="https://i.postimg.cc/59Hcrkcn/x-G18le-W-h0y.png" alt="" />
                    </DivIcon>
                  </InputReactions>
                </MakeComment>
              </CommentsContain>
            </SideTop>
          </SideVideo>
        </VideoContent>
        <Main>
          <MainContent>
            <ViewVideo userImage='' userImageAlt='' userName='' dataPost='' titlePost='' descriptionPost='' videoPost=''/>
          </MainContent>
          <SideMain>
            <More>
              <Link to="/watch/home">
                <BsPlayBtnFill />
                <p>Página inicial</p>
              </Link>
              <Link to='/watch/live:live'>
                <IoVideocam />
                <p>Ao vivo</p>
              </Link>
              <Link to='/watch/shows:shows'>
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