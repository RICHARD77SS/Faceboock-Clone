import Styled from 'styled-components';

export const CriarSt = Styled.ul`
  width: 400px;
  height: auto;
  display: flex;
  border-radius: 10px;
  margin-left: 1rem;
  align-items: start;
  flex-direction: column;
  justify-content: flex-start;
  padding: .5rem;
  background: ${Props => Props.theme.colors.background};
  z-index: 999;
  position: absolute;
  top: 3.5rem;
  left: 60%;
  h3{
    padding: 1rem .5rem;
  }
  .hr {
    margin: .5rem;
  }
  .ico{
    width: 40px;
    height: 40px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${Props => Props.theme.colors.secundary};
    font-size: 1.4rem;
    margin: 0 .5rem;
  }
  .button {
    width: 100%;
    height: 60px;
    border-radius: 10px;
    display: flex;
    align-items: start;
    justify-content: flex-start;
    font-size: .9rem;
    font-weight: 700;
    color: ${Props => Props.theme.colors.text}
    margin: .5rem 0;
    padding: .5rem;
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
  .block {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    text-align: left;
    margin-left: .5rem;
  }
  p{
    font-size: .8rem;
    font-weight: 500;
    color:#888;
  }
`
