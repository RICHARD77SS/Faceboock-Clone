import React from 'react';
import { BiNote, BiWorld } from 'react-icons/bi';
import { BsBookmarkHeartFill, BsEmojiSmile } from 'react-icons/bs';
import Button from '../Button';
import Logo from '../Logo';

import { } from './styles';
import { FiMoreHorizontal } from 'react-icons/fi';
import { GoComment } from 'react-icons/go';
import { AiFillMedicineBox, AiOutlineLike, AiOutlineStar } from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';
import { IoIosArrowForward, IoMdArrowDropdown } from 'react-icons/io';
import Input from '../Input';
import { FaCommentAlt } from 'react-icons/fa';


const LivePage = () => {
  return (
    <Wrapper>
      <Live>
        <LiveHeader>
          <Button>
            X
          </Button>
          <Logo />
          <LiveIn>

          </LiveIn>
        </LiHeader>
        <Video controler />
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

        </Navbar>
        <SideHeader>
          <UserInfos>
            <img src="" alt="User" />
            <Block>
              <p><a href="/">UserName</a> está ao vivo agora -- jogando <a href="/">Good of war</a></p>
              <span>59 min <BiWorld /></span>
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
          <Button><AiFillMedicineBox />Seguir</Button>
        </SideHeader>
        <TabContainer>
          <TabButtons>
            <Button>Visão gerel</Button>
            <Button>Bate-papo ao vivo</Button>
            <Button>Suas respostas</Button>
            <Button>Mais como esse</Button>
          </TabButtons>
          <TabContent>
            <OverView>
              <Header>
                <h3>God of war</h3>
                <p>God interruptes by giant dragon</p>
                <Interactions>
                  <Button>
                    <AiOutlineLike />
                    <p>Curtir</p> 
                  </Button>
                  <Button>
                    <GoComment />
                    <p>Comentar</p>
                  </Button>
                  <Button>
                    <RiShareForwardLine />
                    <p>Compartilhar</p>
                  </Button>
                  <Button>
                    <img src="" alt="" />
                    <IoMdArrowDropdown />
                  </Button>
                </Interactions>
              </Header>
              <GroupInfos>
                <img src="" alt="" />
                <h3>Hyper Gaming</h3>
                <p>Welcome Family Of Hyper Gaming</p>
                <Button>
                  Participar do grupo
                </Button>
              </GroupInfos>
              <Subscriber>
                <img src="" alt="" />
                <h3>Benefícios do assinante</h3>
                <p>Como assinante, você terá acesso exclusivo a vantagens especiais, como um modo de bate-papo somente para assinantes e acess</p>
                <Button>Assinar</Button>
              </Subscriber>
            </OverView>
            <LiveChat>
              <Comments>
                <Post>
                  <img src="" alt="" />
                  <BlockMess>
                    <Mess>
                      <h4>Username</h4>
                      <p>comment for this video</p>
                    </Mess>
                    <MesInteractions>
                      <p>Curtir</p>
                      <p>Responder</p>
                      <p>10 min</p>
                    </MesInteractions>
                  </BlockMess>
                </Post>
              </Comments>
              <ChatFooter>
                <HelpOwner>
                  <FixedMess>
                    <img src="" alt="" />
                    <Icon>
                      <img src="https://i.postimg.cc/vmFmxnfs/like.png" alt="Like Icon by Icon Mafia on IconScout" />
                    </Icon>
                    <Icon>
                      <img src="https://i.postimg.cc/9Fk0VKfz/love.png" alt="love Icon by Icon Mafia on IconScout" />
                    </Icon>
                  </FixedMess>
                  <Support>
                    <img src="" alt="" />
                    <BlockSup>
                      <p>Help me to get new pc</p>
                      <ProgressBar></ProgressBar>
                    </BlockSup>
                    <Icondiv><IoIosArrowForward /></Icondiv>
                  </Support>
                </HelpOwner>
                <CommentArea>
                  <img src="" alt="" />
                  <IoMdArrowDropdown />
                  <Input />
                  <InputReactions>
                    <AiOutlineStar />
                    <BsEmojiSmile />
                    <BiNote />
                  </InputReactions>
                  <AiOutlineLike />
                  <RiShareForwardLine />
                </CommentArea>
              </ChatFooter>
            </LiveChat>
            <YourAnswers>
              <FaCommentAlt />
              <p>Os comentários aos quais você respondeu e as respostas aos seus comentários aparecerão aqui</p>
            </YourAnswers>
            <MoreLikeThis>
              <VideoItem>
                <Image>
                  <img src="" alt="" />
                  <Duration>
                    1:22:22
                  </Duration>
                </Image>
                <Infos>
                  <h4>Video Name</h4>
                  <span>User Name</span>
                  <p>Há 20 horas 7,3 mi</p>
                </Infos>
                <Button><FiMoreHorizontal /></Button>
              </VideoItem>
            </MoreLikeThis>
          </TabContent>
        </TabContainer>
      </Sidebar>
    </Wrapper>
  )
}

export default LivePage;