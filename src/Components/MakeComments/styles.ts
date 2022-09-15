import Styled from 'styled-components';


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
export const MakeComment = Styled.div`
  width: 36%;
  max-width: 440px;
  height: 50px;
  position: absolute;
  display: flex;
  align-items:center;
  top:37.5rem;
  background: ${Props => Props.theme.colors.background};
  img {
    width: 35px;
    height: 35px;
    border-radius: 35px;
    margin-right: .3rem;
  }
  input {
    width: 90%;
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
  transform: translateX(19rem);
`
