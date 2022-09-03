import Styled from 'styled-components';

export const WatchLiveSt = Styled.div`
  width: 95%;
  height: 100%;
`

export const LiveViewSt = Styled.div`
  width: 100%;
  height: 500px;
  border-radius: 5px;
  margin-top: 2rem;
  background: ${Props => Props.theme.colors.background};
`
export const LiveTopSt = Styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem;
  transform: translatey(3rem);
  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .live {
    background: #f00;
    animation-name: live;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    padding: .3rem;
    color: #fff;
    border-radius: 5px;
  }
  @keyframes live{
    from {background-color: #f00;}
    to {background-color: #800;}
  }
  .views {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-left: .5rem;
  }
  .btn-options {
    color: #fff;
    font-size: 1.5rem;
  }
`
export const LiveContentSt = Styled.div`
  width: 100%;
  height: 530px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  transform: translatey(-3rem);
`
export const LiveBottomSt = Styled.div`
  width: 20%;
  height: 90px;
  padding-left: 1.2rem;
  position: absolute;
  display: flex;
  align-items: center;
  transform: translatey(-9.5rem);
  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
`

export const BlockSt = Styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  a {
    color: #f4f4f4;
    text-decoration: none;
    font-size: 1.2rem;
    margin-left: 1rem;
    :hover {
      text-decoration: underline;
    }
  }
  a:last-child{
    font-size: .9rem;
  }
`
export const LiveViewBottomSt = Styled.div`
  width: 100%;
  height: 50px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transform: translatey(-3rem);
  background: ${Props => Props.theme.colors.background};
  .btn {
    display: flex;
    align-items: center;
    color: ${Props => Props.theme.colors.text};
    font-size: 1.2rem;
    margin-right: 1rem;
    p {
      margin-left: .4rem;
      font-size: .9rem;
    }

  }
`
export const PostCommentSt = Styled.div`
  width: 100%;
  padding-bottom: 1rem;
  background: ${Props => Props.theme.colors.background};
  transform: translatey(-3rem);
  .input{
    width: 88%;
    height: 30px;
    border-radius: 20px;
    border: none;
    background: ${Props => Props.theme.colors.secundary};
    :focus{
      border: none;
      outline: none;
    }
  }
`
export const InputsSt = Styled.div`
  width: auto;
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
    border-radius: 40px;
    margin: 0 .5rem;
  }
`
export const InsertsSt = Styled.div`
  width: auto;
  display: flex;
  align-items: center;
  position: absolute;
  right: 5rem;
  .btn-ico{
    width: 25px;
    height: 25px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
  .ico {
    font-size: 1rem;
  }
`