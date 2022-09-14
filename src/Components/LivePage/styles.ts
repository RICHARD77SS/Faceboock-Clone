import Styled from 'styled-components';


export const Wrapper = Styled.div`
  width:100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: start;
  justify-content: flex-end;
`
export const Live = Styled.div`
  height: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`
export const LiveHeader = Styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  position: absolute;
  button {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    display:flex;
    align-items:center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
  }
`
export const LiveIn = Styled.div`

`
export const VideoContainer = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;

`
export const Video = Styled.video`
  width: 100%;
  height: auto;

`
export const Footer = Styled.footer`
  width: 40%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 10%;
`
export const Reactions = Styled.div`
  width: 40px;
  height: 40px;
  
  img {
    width: 100%;
    height: 100%;
  }
`
export const Sidebar = Styled.div`
  min-width: 370px;
  max-width: 370px;
  height: 100vh;
  background: ${Props => Props.theme.colors.background};
`
export const Navbar = Styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: .5px solid rgba(0,0,0,0.2);
`
export const SideHeader = Styled.header`
  width: 100%;
  height: 170px;
  padding: 1rem;
  .follow-live {
    width: 100%;
    height: 35px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    background: ${Props => Props.theme.colors.primary};
    color: #fff;
    p {
      margin: 0 .4rem;
    }
  }
`
export const UserInfos = Styled.div`
  width: 100%;
  display: flex;
  img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    border: 3px solid blue;
    margin-right: .5rem;
  }
  button {
    min-width: 40px;
    height: 40px;
    border-radius: 40px;
    display: flex;
    align-items:center;
    justify-content: center;
    background: #ccc;
    margin-left: .4rem;
  }
`
export const Block = Styled.div`
  width: auto;
  display:flex;
  flex-direction: column;

  p{
    font-size: .9rem;
  }
  a {
    text-decoration: none;
    color: #000;
    font-weight: 600;
    :hover {
      text-decoration: underline;
    }
  }
  span {
    font-size: .8rem;
    display: flex;
    align-items: center;
    margin-top: .5rem;
    p {
      font-size: .9rem;
      margin-right: .4rem;
    }
  }
`
export const Interactions = Styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: .5rem 0;
  p {
    margin: 0 .2rem;
    font-size: .85rem;
  }
`
export const Icon = Styled.div`
  width: 20px;
  height: 20px;
  
  img {
    width: 100%;
    height: 100%;
  }
`
export const TabContainer = Styled.div`
  width: 100%;
  height: auto;
`
export const TabButtons = Styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2rem;
  overflow-x: scroll;
  border-bottom: .5px solid rgba(0,0,0,0.2);
  ::-webkit-scrollbar {
    display: none;
  }
  .btn {
    position: absolute;
    background: #fff;
    box-shadow: 0 0 4px rgba(0,0,0,0.3);
  }
  .btn.next {
    right: 0;
  }
  .btn.prev {
    right: 320px;
  }
  button {
    max-height: 40px;
    padding: .5rem;
    border-radius: 20px;
    display: flex;
    background: #ccc;
    font-size: 1rem;
    margin: .2rem;
  }
  .tab-button.active {
    background: #E7F3FF;
    color: ${Props => Props.theme.colors.primary};
  }
`
export const TabContent = Styled.div`
  width: auto;
  height: 100vh;
  
  .content {
    display: none;
  }
  .content.active {
    display: flex;
  }

  div::-webkit-scrollbar {
  width: 12px;
}

  div::-webkit-scrollbar-track {
    background: #fff;
}

  div::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 20px;
    border: 1px solid rgba(241, 241, 241, 0.72);
}

`
