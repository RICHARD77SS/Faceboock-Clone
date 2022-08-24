import React from 'react';


import { BiWorld } from 'react-icons/bi'
import { FaUserFriends, FaUserEdit } from 'react-icons/fa'

import { ConfigSt, ConfigTopSt, ConfigCenterSt, ConfigFlexSt, IconDivSt, BlockDivSt, ConfigBottomSt, ConfigBgSt, BottomTextSt } from './styles';

import Input from '../Input';
import Button from '../Button';

interface ConfigProps {
  children: React.ReactNode;
}

const Config = (Props: ConfigProps) => {

  return (
    <ConfigBgSt>

      <ConfigSt>
        <ConfigTopSt>
          <h3>Privacidade do story</h3>
        </ConfigTopSt>
        <ConfigCenterSt>
          <h4>Quem pode ver seu story?</h4>
          <p>Seu story ficará visível no Facebook e no Messenger por 24 horas.</p>
          <ConfigFlexSt>
            <IconDivSt>
              <BiWorld />
            </IconDivSt>
            <BlockDivSt>
              <h4>Público</h4>
              <p>Qualquer pessoa no Facebook ou Messager</p>
            </BlockDivSt>
            <Input name='option' value='primeiro' type='radio' checked />
          </ConfigFlexSt>
          <ConfigFlexSt>
            <IconDivSt>
              <FaUserFriends />
            </IconDivSt>
            <BlockDivSt>
              <h3>Amigos</h3>
              <p>Somente seus amigos do facebook</p>
            </BlockDivSt>
            <Input name='option' type='radio' />
          </ConfigFlexSt>
          <ConfigFlexSt>
            <IconDivSt>
              <FaUserEdit />
            </IconDivSt>
            <BlockDivSt>
              <h3>Personalizado</h3>
              <p>Escolha para quem mostrar seu story</p>
            </BlockDivSt>
            <Input name='option' type='radio' />
          </ConfigFlexSt>

        </ConfigCenterSt>
        <BottomTextSt>
          <p>Somente seus amigos e conexões podem responder diretamente ao seu<br /> story</p>
        </BottomTextSt>

        <ConfigBottomSt>
          {Props.children}
          <Button className='btn salvar'>Salvar</Button>
        </ConfigBottomSt>
      </ConfigSt>
    </ConfigBgSt>
  )
}

export default Config;