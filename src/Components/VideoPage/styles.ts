import Styled from 'styled-components'

export const Wrapper = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .topnav {
    position: fixed;
    top: 4.25rem;
    z-index: 10;
  }
`
export const Header = Styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items:center;
  position: fixed;
  z-index: 10;
  background: ${Props => Props.theme.colors.background};
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1);
`
export const Left = Styled.div`
  display: flex;
  align-items:center;
  button {
    width: 40px;
    height: 40px;
    border-radius:40px;
    display: flex;
    align-items:center;
    justify-content: center;
    background: #aaa;
    margin: 0 .5rem;
    margin-bottom: .1rem;
    color:#fff;
    font-size: 1.5rem;
  }
`
export const Right = Styled.div`
  height: 60px;
  display: flex;
  background: #000;

`
export const ContentPage = Styled.div`
  width: 100%;
  max-width: 1340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7.4rem;
`
export const VideoContent = Styled.div`
  width: 100%;
  height: 535px;
  display: flex;
`
export const VideoContainer = Styled.div`
  width: 65%;
  height: 100%;
`
export const Player = Styled.div`
  width: 100%;
  height: 81.2%;
`
export const Video = Styled.video`
  width: 100%;
  height: 100%;
  
`
export const VideoFooter = Styled.footer`
  width: 100%;
  padding: 0 .5rem;
  background: ${Props => Props.theme.colors.background};
`
export const FooterTop = Styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1);
  h2 {
    color: #000;
  }
  button {
    width: 50px;
    height: 35px;
    border-radius:5px;
    font-size: 1.2rem;
    background: #ddd;
    display: flex;
    align-items:center;
    justify-content: center;
    :hover {
      background: #ccc;
    }
  }
`
export const FooterBottom = Styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: .5rem;
`
export const InteractionData = Styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  img {
    width: 16px;
    height: 16px;
    margin: 0 .3rem;
  }
  p {
    font-size: .8rem;
    margin-right: .5rem;
    :hover {
      text-decoration: underline;
    }
  }
  span {
    font-size: .8rem;
  }
`
export const SideVideo = Styled.div`
  width: 35%;
  min-width: 450px
  height: 100%;
  padding: 1rem;
  background: ${Props => Props.theme.colors.background};
`
export const SideTop = Styled.div`
  width: 100%;
`
export const OwnerInfos = Styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding-bottom: 1rem;
  
  button {
    display:flex;
    align-items: center;
    justify-content:center;
    width: 90px;
    height: 40px;
    border-radius: 5px;
    color: #fff;
    font-size: 1rem;
    background: ${Props => Props.theme.colors.primary};
    :last-child {
      width: 40px;
      border-radius: 40px;
      background: #ddd;
      color: #000;
      font-size: 1.2rem;
      margin-left: .5rem;
    }
  }
`
export const UserContainer = Styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    margin-right: .2rem;
  }
`
export const ButtonContainer = Styled.div`
  display: flex;
  align-items: center;
`
export const Block = Styled.div`
  h4 {
    font-size: .9rem;
  }
  .p {
    display: flex;
    align-items: center;
    margin: .2rem 0;
    p{
      font-size: .8rem;
      margin-right: .5rem;
    }
  }
`
export const TopTab = Styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.2);
  padding-bottom: 1rem;
  button{
    height: 35px;
    border-radius: 20px;
    display: flex;
    align-items:center;
    font-size: 1rem;
    padding: 0 1rem;
    margin: 0 .2rem;
    background: #E7F3FF;
    color: ${Props => Props.theme.colors.primary};
    :last-child {
      background: #ddd;
      color:#000;
    }
  }

`
export const CommentsContainer = Styled.div`
  width: 100%;
`
export const Comments = Styled.div`
  width: 100%;
  height: 340px;
  overflow-y: scroll;
`
export const CommentsFooter = Styled.footer`
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: start;
`
export const MakeComment = Styled.div`
  width: 440px;
  height: 50px;
  position: absolute;
  display: flex;
  align-items:center;
  top:37.5rem;
  background:${Props => Props.theme.colors.background};
  img {
    width: 35px;
    height: 35px;
    border-radius: 35px;
    margin-right: .3rem;
  }
  input {
    width: 380px;
    height: 35px;
    border-radius: 20px;
    background: ${Props => Props.theme.colors.secundary};
    border: none;
    :focus{
      border:none;
      outline: none;
    }
  }
`
export const InputReactions = Styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  right: 2rem;
`

export const Main = Styled.div`
  width: 100%;
  display: flex;
`
export const MainContent = Styled.div`
  width: 65%;
`
export const SideMain = Styled.div`
  width: 35%;
  min-width: 470px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: .5rem;
  padding-left: 3rem;
`
export const More = Styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  padding: .5rem 0;
  .link {
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    border-radius: 10px;
    padding: 1rem;
    background: #F0284A;
    text-decoration: none;
    color: #fff;
    :first-child {
      background: #1877F2;
    }
    :last-child {
      background: #2ABBA7;
    }
    p{
      
      color:#fff;
      font-weight: 600;
    }
  }
`
export const Suggests = Styled.div`
  width: 100%;
  border-top: .5px solid rgba(0,0,0,0.3);
`
export const VideoSuggest = Styled.div`

`
export const Infos = Styled.div`

`
export const User = Styled.div`

`


export const DivIcon = Styled.div`
  width: 25px;
  height: 24px;
  border-radius: 30px;
  display: flex;
  align-items:center;
  justify-content: center;
  :hover {
    background: #ddd;
  }
`