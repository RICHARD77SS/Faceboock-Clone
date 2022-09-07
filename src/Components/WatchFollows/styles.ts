import Styled from 'styled-components';

export const ContainerSt = Styled.div`
  width: auto;
  height: auto;
  .button-close {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    background: ${Props => Props.theme.colors.secundary};
    filter: brightness(.9);
    margin-left: 32%;
  }
`
export const FollowsContainerSt = Styled.div`
  width: 550px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  background: ${Props => Props.theme.colors.background};
  position: fixed;
  z-index: 100;
  top: 4rem;
  right: 9.5rem;
  box-shadow: 0 0 4px 0 rgba(0,0,0,0.4);
`
export const FollowsTopSt = Styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.4);
  h3 {
    font-size: 1.2rem;
    margin-left: 40%;
  }
  
`
export const FollowsSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: .5rem;
  p {
    font-size: .95rem;
    font-weight: 600;
    color: ${Props => Props.theme.colors.text};
  }
  .user {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    padding: .5rem;
    display: flex;
    align-items: center;
    :hover {
      background: ${Props => Props.theme.colors.secundary};
      filter: brightness(.9);
    }
    img{
      width: 40px;
      height: 40px;
      border-radius: 40px;
      margin-right: .5rem;
    }
    span {
      font-size: .8rem;
      color: ${Props => Props.theme.colors.primary};
    }
  }

`
export const FlexSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .manange {
    width: 90px;
    height: 35px;
    border-radius: 5px;
    font-size: 1rem;
    color: ${Props => Props.theme.colors.primary};
    :hover {
      background: ${Props => Props.theme.colors.secundary};
    }
  }
  p {
    color: #000;
    font-weight: 600;
  }
`
export const BlockSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: start;
  flex-direction: column;
`
export const IconDiv = Styled.div`
  min-width: 40px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background: #50BDE0;
  margin-right: .5rem;
  color: #fff;
`
