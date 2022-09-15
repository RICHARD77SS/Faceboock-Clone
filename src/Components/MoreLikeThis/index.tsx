import React from 'react'

import { Container, MoreLikeThisSt} from './styles'
import VideoItem from '../VideoItem';
import MoreLives from './MoreLives.json';

const MoreLikeThis = () => {
  return (
    <Container>
      <MoreLikeThisSt>
        {MoreLives.map((Infos) => {
          return (
            <VideoItem duration={Infos.duration}
              title={Infos.title}
              userName={Infos.userName}
              data={Infos.data}
              views={Infos.views}
            />
            
          )
        })}
      </MoreLikeThisSt>
    </Container>
  )
}

export default MoreLikeThis;