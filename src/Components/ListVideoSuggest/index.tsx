import React from 'react';

import { Suggests } from './styles';

import Suggest from './Suggest.json'
import VideoSuggest from '../VideoSuggest';

const ListVideoSuggest = () => {
  return (
    <Suggests>
      <h3>Entretenimento</h3>
      {Suggest.map((Infos) => {
        return (
          <VideoSuggest id={Infos.id}
            image={Infos.image}
            title={Infos.title}
            userImage={Infos.userImage}
            userName={Infos.userName}
          />
        )
      })}
    </Suggests>
  )
}

export default ListVideoSuggest;