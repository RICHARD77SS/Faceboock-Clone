import Styled from 'styled-components';

export const MarketplaceSt = Styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

`
export const MarketLeftSt = Styled.div`
  width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
  background: ${Props => Props.theme.colors.background};
  .navlink {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-height: 45px;
    border-radius: 5px;
    text-decoration: none;
    color: #000;
    :hover{
      background: ${Props => Props.theme.colors.hover};
    }
  }

`
export const Navbar = Styled.nav`
  width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .5rem;
  margin-top: 6rem;
  background: ${Props => Props.theme.colors.background};
  overflow-y: scroll;
  .arrowright {
    margin-left: 12rem;
  }
  .arrowright.b {
    margin-left: 12.7rem;
  }
  ::-webkit-scrollbar {
    width: 12px;
}
  .addClass {
    width: 100%;
    min-height: 38px;
    border-radius: 5px;
    font-size: .9rem;
    font-weight: 700;
    background: #E7F3FF;
    color: ${Props => Props.theme.colors.primary};
  }

`
export const Header = Styled.header`
  width: 335px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${Props => Props.theme.colors.background};
  position: absolute;
  top: 3.5rem;
  left: 0;
  margin: .5rem;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.4);
  h3{
    margin: .5rem;
    font-size: 1.5rem;
    color: #000;
  }
  .btn-config {
    width: 35px;
    height: 35px;
    border-radius: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${Props => Props.theme.colors.secundary};
    font-size: 1.2rem;
    margin-left: 8.5rem;
  }
  .input {
    width: 97%;
    height: 35px;
    border-radius: 20px;
    border: none;
    background: ${Props => Props.theme.colors.secundary};
    margin-bottom: 1rem;
    :focus {
      border: none;
      outline: none;
    }
  }
`
export const MarketFlexSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`
export const Filtros = Styled.div`
  width: 100%;
  min-height: 85px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  border-top: .5px solid rgba(0,0,0,0.2);
  border-bottom: .5px solid rgba(0,0,0,0.2);
  margin-top: .5rem;
  margin-bottom: .5rem;
  h4 {
    margin-top: .5rem;
    margin-left: .5rem;
  }
  button{
    width: 100%;
    height: 30px;
    border-radius: 5px;
    margin-bottom: -.5rem;
    text-align: left;
    padding-left: .5rem;
    color: ${Props => Props.theme.colors.primary};
    font-size: .9rem;
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
`
export const IconDivSt = Styled.div`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Props => Props.theme.colors.secundary};
  font-size: 1rem;
  margin: 0 .5rem;
`
export const MarketRightSt = Styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
`


