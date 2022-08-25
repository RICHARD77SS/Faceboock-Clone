import Styled from 'styled-components';

export const BatepapoSt = Styled.div`
  width: 350px;
  height: 600px;
  display: flex;
  border-radius: 5px;
  background: ${Props => Props.theme.colors.background};
  flex-direction: column;
  align-items: center;
  justify-content: start;
  position: absolute;
  top: 4rem;
  right: 1rem;
  input {
    width: 90%;
    height: 35px;
    border-radius: 20px;
    background: ${Props => Props.theme.colors.secundary};
    border: none;
  }
`
export const BatepapoTopSt = Styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  h2 {
    margin-right: 1rem;
    color: #111;
  }
`
export const BatepapoUsersSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: .5rem;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
  .bs {
    color: #aaa;
    position: absolute;
    right: 1rem;
  }
`
export const BlockSt = Styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-left: .5rem;
  margin-right:  8rem;
`
export const DivSt = Styled.div`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const DivIcoSt = Styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin: .3rem;
  :hover {
    background: ${Props => Props.theme.colors.hover};
  }
`
