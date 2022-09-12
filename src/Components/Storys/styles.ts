import Styled from 'styled-components';

export const StorysSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  background: ${Props => Props.theme.colors.background};
  ::-webkit-scrollbar {
  display: none;
}

::-webkit-scrollbar-track {
  display: none;
}
::-webkit-scrollbar-thumb {
  display: none;
}
  .btn {
    position:absolute;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: ${Props => Props.theme.colors.secundary};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.4);
    z-index: 100;
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
  .btn.next{
    right: 32.5%;
    @media (max-width: 1600px){
      right: 30%;
    }
    @media (max-width: 1100px){
      right: 34%;
    }
    @media (max-width: 900px){
      right: 11%;
    }
  }
  .btn.prev{
    transform: translatex(-.9rem);
  }
`