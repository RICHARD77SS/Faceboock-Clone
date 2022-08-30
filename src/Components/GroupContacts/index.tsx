import React from 'react';

import { GroupContactsSt } from './styles'

import Button from '../Button';

interface groupContactProps {
  id?: string;
  name?: string;
  image?: string;
  function?: any;
}

const GroupContact = (Props: groupContactProps) => {
  return (
    <GroupContactsSt {...Props}>
      <Button id={Props.id} className='bt-user' onClick={Props.function}>
        <img src={Props.image} alt="" />
        <h4>{Props.name}</h4>
      </Button>
    </GroupContactsSt>
  )
}

export default GroupContact;