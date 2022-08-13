import Styled from 'styled-components';

export const GpChatSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
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
  .div-ico {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${Props => Props.theme.colors.hover};
  }
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
`