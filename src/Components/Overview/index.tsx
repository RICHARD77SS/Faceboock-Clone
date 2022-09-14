import React from 'react'

import { OverView, Header, Interactionsb, GroupInfos, Subscriber } from './styles';
import Button from './../Button/index';
import { AiOutlineLike } from 'react-icons/ai';
import { GoComment } from 'react-icons/go';
import { RiShareForwardLine } from 'react-icons/ri';
import { IoMdArrowDropdown } from 'react-icons/io';

const Overview = () => {
  return (
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
  )
}

export default Overview;