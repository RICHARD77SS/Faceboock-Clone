import React from 'react';
import { Route, Routes } from 'react-router-dom';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Tela from './Components/Tela'
import Main from './Components/Main';
import ModalAddStory from './Components/ModalAddStory';
import ModalReels from './Components/ModalReels';
import ViewStorys from './Components/ViewStorys';

import usePersistedState from './utils/usePersistedState';
import NavMore from './Components/NavMore';
import GlobalStyle from './styles/global';
import Header from './Components/Header';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import Watch from './Components/Watch/index';
import WatchHome from './Components/WatchHome';
import WatchLive from './Components/WatchLive';
import WatchShows from './Components/WatchShows';
import WatchSaved from './Components/WatchSaved';
import Marketplace from './Components/Marketplace';

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
          <Route path='/story/' element={<ModalAddStory />} />
          <Route path='/storys/view' element={<ViewStorys />} />
          <Route path='/reels/' element={<ModalReels />} />
          <Route path='/bookmarks' element={<NavMore />} />
          <Route path='/marketplace' element={<Marketplace />} />
          <Route path='/watch/' element={<Watch />}>
            <Route path=":home" element={<WatchHome />} />
            <Route path="live:live" element={<WatchLive />} />
            <Route path="shows:shows" element={<WatchShows />} />
            <Route path="saved:saved" element={<WatchSaved />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
