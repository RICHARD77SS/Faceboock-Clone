import React from 'react';
import { Route, Routes } from 'react-router-dom';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Tela from './Components/Tela'
import Main from './Components/Main';
import ModalAddStory from './Components/ModalAddStory';
import ModalReels from './Components/ModalReels';

import usePersistedState from './utils/usePersistedState';
import NavMore from './Components/NavMore';
import GlobalStyle from './styles/global';
import Header from './Components/Header';

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
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/story' element={<ModalAddStory />} />
          <Route path='/reels' element={<ModalReels />} />
          <Route path='/bookmarks' element={<NavMore />} />
          
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
