import Styled from 'styled-components';

export const ContatosSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`
export const FlexSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding: 1rem;
  h4 {
    font-size: 1.1rem;
    margin-right: 3rem
  }
  .bt-more {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    margin: 0 .5rem;
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
    .ico {
      color: ${Props => Props.theme.colors.text};
    }
  }
`
export const ContatoUsersSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .bt-user {
    width: 100%;
    height: auto;
    padding: .5rem;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: none;
    background: ${Props => Props.theme.colors.secundary};
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
    h4 {
      font-size: .9rem;
      font-weight: 600;
      color: ${Props => Props.theme.colors.text};
    }
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin-right: 1rem;
  }
`