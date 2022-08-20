import Styled from 'styled-components';

export const CriarSt = Styled.ul`
  width: 40%;
  height: 90%;
  display: flex;
  border-radius: 10px;
  margin-left: 1rem;
  align-items: start;
  flex-direction: column;
  justify-content: flex-start;
  padding: .5rem;
  background: ${Props => Props.theme.colors.background};

  h3{
    padding: 1rem .5rem;
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
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: .9rem;
    font-weight: 700;
    color: ${Props => Props.theme.colors.text}
    margin: .2rem;
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
`
