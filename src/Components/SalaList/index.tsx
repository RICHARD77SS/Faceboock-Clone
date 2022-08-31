import React from 'react';

import { SalaListSt } from './styles';
import SalasFriends from '../SalasFriends';

import SalasInfos from './SalasInfos.json'

const SalaList = () => {
  return (
    <SalaListSt>
      {SalasInfos.map((Infos) => {
        return (
          <SalasFriends salaName={Infos.salaName}
            salaUserFirstName={Infos.salaUserFirstName}
            salaUserLastName={Infos.salaUserLastName}
            salaUserImage={Infos.salaUserImg}
            salaUserImageAlt={Infos.salaUserImgAlt}
          />
        )
      })}
    </SalaListSt>
  )
}

export default SalaList;