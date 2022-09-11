import Styled from 'styled-components';

export const MarketConfigSt = Styled.div`
  width: 350px;
  height: 200px;
  border-radius: 5px;
  padding: .5rem;
  display: flex;
  flex-direction: column;
  background: ${Props => Props.theme.colors.background};
  z-index: 100;
  position: absolute;
  left: 5px;
  top: 3rem;
  box-shadow: 0 0 4px 0 rgba(0,0,0,0.4);
  .hr {
    margin: .2rem;
  }
  h4 {
    margin: .2rem;
  }
  p {
    font-size: .8rem;
    margin: .2rem;
  }
  .button {
    width: 100%;
    height: 60px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    :hover {
      background: ${Props => Props.theme.colors.secundary};
    }
    p{
      font-size: .9rem;
    }
  }
`

export const IconDiv = Styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: ${Props => Props.theme.colors.secundary};
  display: flex;
  align-items: center;
  justify-content: center;
`