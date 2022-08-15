
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
  width: 25%;
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
`
export const ModalRightSt = Styled.div`
  width: 75%;
  height: 100%;
  background: ${Props => Props.theme.colors.secundary};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
  .btn-config {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 35px;
    background: #ccc;
    font-size: 1.2rem;
    transform: translatex(10rem);
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-right: 1rem;
  }
  p {
    font-weight: 700;
  }
` 
