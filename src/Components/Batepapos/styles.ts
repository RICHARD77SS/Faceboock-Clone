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
  padding: .5rem;
  top: 4rem;
  right: 1rem;
  input {
    width: 95%;
    height: 35px;
    border-radius: 20px;
    background: ${Props => Props.theme.colors.secundary};
    border: none;
    margin-bottom: .5rem;
  }
`
export const BatepapoTopSt = Styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: .5rem;
  h2 {
    margin-right: 1.6rem;
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
  border-radius: 10px;
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
  .ai {
    color: #888;
    position: absolute;
    right: 1rem;
  }
  :hover {
    background: ${Props => Props.theme.colors.hover};
  }
`
export const BlockSt = Styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-left: .5rem;
  margin-right:  
  text-align: left;
  p{
    font-size: .8rem;
  }
  .bl {
    color: ${Props => Props.theme.colors.primary}
  }
`
export const DivSt = Styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ddd;
  font-size: 2rem;
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
