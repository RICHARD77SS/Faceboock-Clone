import React from 'react';

import { AiFillMedicineBox, AiOutlineLike, AiOutlineStar, AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowForward, IoMdArrowDropdown } from 'react-icons/io';
import { BsBookmarkHeartFill, BsEmojiSmile } from 'react-icons/bs';
import { RiShareForwardLine } from 'react-icons/ri';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BiNote, BiWorld } from 'react-icons/bi';
import { FaCommentAlt } from 'react-icons/fa';
import { GoComment } from 'react-icons/go';

import { Wrapper, Live, LiveHeader, LiveIn, VideoContainer, Video, Footer, Reactions, Sidebar, Navbar, SideHeader, UserInfos, Block, Interactions, Icon, TabContainer, TabButtons, TabContent, OverView, Header, Interactionsb, GroupInfos, Subscriber, LiveChat, Comments, Post, BlockMess, Mess, MessInteractions, ChatFooter, HelpOwner, FixedMess, Support, BlockSup, ProgressBar, Icondiv, CommentArea, InputReactions, YourAnswers, MoreLikeThis, VideoItem, Image, Duration, Infos } from './styles';
import Input from '../Input';
import Button from '../Button';
import Logo from '../Logo';
import NavRight from '../NavRight';
import { GrNext, GrPrevious } from 'react-icons/gr';

const LivePage = () => {

  const goLeft = () => {
    let tabButtons = document.getElementById('tab-buttons');
    tabButtons!.scrollLeft += 100;
  }
  const goRight = () => {
    let tabButtons = document.getElementById('tab-buttons');
    tabButtons!.scrollLeft -= 100;
  }

  return (
    <Wrapper>
      <Live>
        <LiveHeader>
          <Button>
            <AiOutlineClose />
          </Button>
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
          <TabButtons id='tab-buttons'>
            <Button className='btn prev' onClick={() => { goRight() }}>
              <GrPrevious size='20' />
            </Button>
            <Button className='tab-button active' data-id='btn-1'><pre>Visão gerel</pre></Button>
            <Button className='tab-button' data-id='btn-2'><pre>Bate-papo ao vivo</pre></Button>
            <Button className='tab-button' data-id='btn-3'><pre>Suas respostas</pre></Button>
            <Button className='tab-button' data-id='btn-4'><pre>Mais como esse</pre></Button>
            <Button className='btn next' onClick={() => { goLeft() }}>
              <GrNext size='20' />
            </Button>
          </TabButtons>
          <TabContent>
            <OverView id='btn-1' className='content active'>
              <Header>
                <h3>God of war</h3>
                <p>God interruptes by giant dragon</p>
                <Interactionsb>
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
                    <img src="https://i.postimg.cc/brczWrGr/richardsilva.jpg" alt="" />
                    <IoMdArrowDropdown />
                  </Button>
                </Interactionsb>
              </Header>
              <GroupInfos>
                <img src="https://img.freepik.com/vetores-gratis/astronauta-bonito-esfregando-na-ilustracao-do-icone-do-vetor-dos-desenhos-animados-do-controlador-de-jogo-conceito-de-icone-de-recreacao-de-tecnologia-isolado-vetor-premium-estilo-flat-cartoon_138676-3715.jpg?w=740&t=st=1663096121~exp=1663096721~hmac=959fde55fd4b1bdbbbf2dc0945f0387d4ab1c1b31e0f6c572896ded80106aaa9" alt="" />
                <h3>Hyper Gaming</h3>
                <p>Welcome Family Of Hyper Gaming</p>
                <Button>
                  Participar do grupo
                </Button>
              </GroupInfos>
              <Subscriber>
                <img src="https://i.postimg.cc/gkXRs4ZF/Subs-Gifting-header.png" alt="" />
                <h3>Benefícios do assinante</h3>
                <p>Como assinante, você terá acesso exclusivo a vantagens especiais, como um modo de bate-papo somente para assinantes e acess</p>
                <Button>Assinar</Button>
              </Subscriber>
            </OverView>
            <LiveChat id='btn-2' className='content'>
              <Comments>
                <Post>
                  <img src="" alt="" />
                  <BlockMess>
                    <Mess>
                      <h4>Username</h4>
                      <p>comment for this video</p>
                    </Mess>
                    <MessInteractions>
                      <p>Curtir</p>
                      <p>Responder</p>
                      <p>10 min</p>
                    </MessInteractions>
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
            <YourAnswers id='btn-3' className='content'>
              <FaCommentAlt />
              <p>Os comentários aos quais você respondeu e as respostas aos seus comentários aparecerão aqui</p>
            </YourAnswers>
            <MoreLikeThis id='btn-4' className='content'>
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