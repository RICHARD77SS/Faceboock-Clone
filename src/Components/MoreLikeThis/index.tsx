import React from 'react'
import Button from '../Button';

import { Container, MoreLikeThisSt, VideoItem, Image, Duration, Infos } from './styles'
import { FiMoreHorizontal } from 'react-icons/fi';

const MoreLikeThis = () => {
  return (
    <Container>
      <MoreLikeThisSt id='btn-4' className='content'>
        <VideoItem>
          <Image>
            <img src="https://img.freepik.com/fotos-gratis/pesos-de-exercicios-dumbbell-de-ferro-com-placas-extra_1423-223.jpg?w=740&t=st=1663176799~exp=1663177399~hmac=e448938cb04cde31ceb1a90d4fd2b9e81780e1e70ba68917016f87882d101f0d" alt="" />
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
        <VideoItem>
          <Image>
            <img src="https://img.freepik.com/fotos-gratis/pesos-de-exercicios-dumbbell-de-ferro-com-placas-extra_1423-223.jpg?w=740&t=st=1663176799~exp=1663177399~hmac=e448938cb04cde31ceb1a90d4fd2b9e81780e1e70ba68917016f87882d101f0d" alt="" />
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
        <VideoItem>
          <Image>
            <img src="https://img.freepik.com/fotos-gratis/pesos-de-exercicios-dumbbell-de-ferro-com-placas-extra_1423-223.jpg?w=740&t=st=1663176799~exp=1663177399~hmac=e448938cb04cde31ceb1a90d4fd2b9e81780e1e70ba68917016f87882d101f0d" alt="" />
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
      </MoreLikeThisSt>
    </Container>
  )
}

export default MoreLikeThis;