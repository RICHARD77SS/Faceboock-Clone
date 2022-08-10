import React, { useContext } from 'react';

import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';

import { TelaSt } from './styles';

interface Props {
  toggleTheme(): void;
}

const Tela = (Props: Props) => {
  const { colors, title } = useContext(ThemeContext); 
  return (
    <TelaSt>
      <Switch
        onChange={Props.toggleTheme}
        checked={title === 'dark'}
        
        height={15}
        width={35}
        handleDiameter={20}
        onHandleColor='#00ff00'
        offHandleColor='#ff0000'
        offColor={ colors.text}
        onColor={colors.primary}
      />
    </TelaSt>
  )
}

export default Tela;