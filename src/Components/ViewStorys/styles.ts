
import Styled from 'styled-components';

export const ModalSt = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
`
export const ModalLeftSt = Styled.div`
  min-width: 350px;
  height: 100%;
  background: ${Props => Props.theme.colors.background};
  display: flex;
  flex-direction: column;
  .btn-close {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background: #555;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-right: .5rem;
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
  .link {
    text-decoration: none;
    color: ${Props => Props.theme.colors.text};
  }
  .make {
    margin: 1.5rem 0;
    cursor: pointer;
  }
  h4 {
    margin-left: 1rem;
    color: #000;
  }
  .hr {
    margin-bottom: 1rem;
  }
`
export const ModalRightSt = Styled.div`
  width: 75%;
  height: 100%;
  background: #000;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .block-right {
    height: 100%;
  }
`
export const CircleSt = Styled.div`
  min-width: 60px;
  height: 60px;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 2.5rem;
  color: ${Props => Props.theme.colors.primary};
  background: ${Props => Props.theme.colors.secundary};
`
export const FlexSt = Styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 1rem;
  margin-bottom: 2px;
  border-radius: 10px;
  h2{
    font-weight: 700;
  }
  .button {
    color: ${Props => Props.theme.colors.primary};
    font-size: .9rem;
    margin-top: -.5rem;
  }
  .btn-config {
    margin-left: 1rem;
  }
  .circle-user {
    border: 3px solid ${Props => Props.theme.colors.primary};
    box-shadow: inset 0 0 0 4px #eee;
    img{
      width: 90%;
      height: 90%;
      border-radius: 50%;
    }
  }
`
export const ModalAddStoryTopNavSt = Styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  img {
    border-radius: 40px;
  }
`
export const BlockSt = Styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  h2 {
    margin: 1rem 0 0 1rem;
    color: #000;
  }
  h4 {
    margin-left: 1rem;
    color: #000;
  }
  h5{
    font-size: 1rem;
    color: #222;
  }

  p {
    font-size: .8rem;
    margin: .2rem 0;
  }

`
export const ContentSt = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
