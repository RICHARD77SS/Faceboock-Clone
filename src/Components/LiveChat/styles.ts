import Styled from 'styled-components';


export const Container = Styled.div`
  height: 100vh;
`
export const LiveChatSt = Styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  button {
    color: ${Props => Props.theme.colors.primary};
    font-size: .9rem;
    font-weight: 700;
    :hover {
      background: #ddd;
      border-radius: 5px;
      padding: .3px;
    }
  }
  
`
export const Comments = Styled.div`
  width: 100%;
  max-height: 90%;
  
  display: flex;
  align-items: start;
  flex-direction: column;
  overflow-y: scroll;
  padding-bottom: 3rem;
`
export const Post = Styled.div`
  display: flex;
  margin: 1rem 0;
  img {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 0 .5rem;
  }
`
export const BlockMess = Styled.div`
  
`
export const Mess = Styled.div`
  width: 240px;
  height: auto;
  background: #F0F2F5;
  padding: .5rem;
  border-radius: 15px;
  h4 {
    font-size: .9rem;
  }
  p {
    font-size: .9rem;
  }
`
export const MessInteractions = Styled.div`
  display: flex;
  p{
    margin-left: .8rem;
    font-size: .8rem;
    font-weight: 600;
    :hover {
      text-decoration: underline;
    }
    :last-child {
      font-weight: 500;
    }
  }
`
export const ChatFooter = Styled.footer`
  width: 340px;
  height: 120px;
  background: ${Props => Props.theme.colors.background};
  position: absolute;
  bottom: 0;
  padding: .5rem 0;
`
export const HelpOwner = Styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const FixedMess = Styled.div`
  height: 35px; 
  border-right: .5px solid rgba(0,0,0,0.2);
  display: flex;
  align-items: end;
  padding: 0 .5rem;
  .img {
    width: 35px;
    height: 35px;
    border-radius: 35px;
    filter: brightness(.4);
    z-index: 5;
  }
  .pin {
    z-index: 10;
    color: #fff;
    position: absolute;
    transform: translate(10px, -10px);
  }
`
export const Icon = Styled.div`
  display: flex;
  align-items: end;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.4);
  font-size: .8rem;
  transform: translatex(-5px);
  z-index: 10;
  img {
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border:1px solid #fff;
  }
  .love {
    z-index:11;
  }
  .like {
    transform: translatex(-5px);
  }
  p{
    transform: translatex(-5px);
  }
`
export const Support = Styled.div`
  width: 250px;
  height: 35px;
  display: flex;
  align-items: center;
  background: #F0F2F5;
  margin: 0 .5rem;
  border-radius: 20px;
  img {
    width: 35px;
    height: 35px;
    border-radius: 35px;
  }
`
export const BlockSup = Styled.div`
  width: ;
`
export const ProgressBar = Styled.div`
  width: 90%;
  height: 4px;
  background: #ccc;
`
export const IconDiv = Styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.4);
  margin: .2rem;
`
export const CommentArea = Styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  margin: .5rem;

  img {
    width: 35px;
    height: 35px;
    border-radius: 40px;
  }
  input {
    width: 210px;
    height: 35px;
    border-radius: 20px;
    margin: .5rem;
    border: none;
    background: #F0F2F5;
    font-size: 1rem;
    :focus {
      border: none;
      outline: none;

    }
  }
`
export const InputReactions = Styled.div`

  position: absolute;
  right: 4.5rem;
  font-size: 1rem;
  svg {
    margin: .2rem;
  }
`
