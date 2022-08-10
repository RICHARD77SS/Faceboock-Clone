import React from 'react';

import Tela from './Components/Tela'

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import usePersistedState from './utils/usePersistedState';

import GlobalStyle from './styles/global'
import Header from './Components/Header'

import { ThemeProvider, DefaultTheme } from 'styled-components';

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Tela toggleTheme={toggleTheme} />
        <GlobalStyle />
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
