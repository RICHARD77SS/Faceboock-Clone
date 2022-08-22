import React from 'react';


import { BiWorld } from 'react-icons/bi'
import { FaUserFriends, FaUserEdit } from 'react-icons/fa'

import { ConfigSt, ConfigTopSt, ConfigCenterSt, ConfigFlexSt, IconDivSt, BlockDivSt, ConfigBottomSt, ConfigBgSt } from './styles';

import Input from '../Input';
import Button from '../Button';

interface ConfigProps {
  children: React.ReactNode;
}

const Config = (Props:ConfigProps) => {
  return (
    <ConfigBgSt>

      <ConfigSt>
        <ConfigTopSt>
          <h2>Privacidade do story</h2>
        </ConfigTopSt>
        <ConfigCenterSt>
          <h3>Quem pode ver seu story?</h3>
          <p>Seu story ficará visível no Facebook e no Messenger por 24 horas.</p>
          <ConfigFlexSt>
            <IconDivSt>
              <BiWorld />
            </IconDivSt>
            <BlockDivSt>
              <h3>Público</h3>
              <p>Qualquer pessoa no Facebook ou Messager</p>
            </BlockDivSt>
            <Input type='radio' /> 
          </ConfigFlexSt>
          <ConfigFlexSt>
            <IconDivSt>
              <FaUserFriends />
            </IconDivSt>
            <BlockDivSt>
              <h3>Amigos</h3>
              <p>Somente seus amigos do facebook</p>
            </BlockDivSt>
            <Input type='radio' /> 
          </ConfigFlexSt>
          <ConfigFlexSt>
            <IconDivSt>
              <FaUserEdit />
            </IconDivSt>
            <BlockDivSt>
              <h3>Personalizado</h3>
              <p>Escolha para quem mostrar seu story</p>
            </BlockDivSt>
            <Input type='radio' /> 
          </ConfigFlexSt>

        </ConfigCenterSt>
          <p>Somente seus amigos e conexões podem responder diretamente ao seu story</p>

        <ConfigBottomSt>
          {Props.children}
          <Button>Salvar</Button>
        </ConfigBottomSt>
      </ConfigSt>
    </ConfigBgSt>
  )
}

export default Config;