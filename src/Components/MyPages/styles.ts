import Styled from 'styled-components';

export const MyPagesSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: .5rem;
  border-top: .5px solid rgba(0,0,0,0.2);
  border-bottom: .5px solid rgba(0,0,0,0.2);
  .bt-promo {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    border: none;
    border-radius: 10px;
    background: ${Props => Props.theme.colors.secundary};
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
    .ico {
      color: ${Props => Props.theme.colors.text};
    }
    .ico.b{
      margin: 0.15rem;
    }
    p {
      margin: 0 1rem;
      font-weight: 600;
      color: ${Props => Props.theme.colors.text};
    }
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin-left: -.9rem;
    margin-right: .5rem;
  }
  h5 {
    font-size: .9rem;
    color: ${Props => Props.theme.colors.text};
  }
  
`
export const Header = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  h4 {
    font-size: 1rem;
    margin-right: 2rem
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
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
`