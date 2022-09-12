import Styled from 'styled-components';


export const NavMoreContentSt = Styled.div`
  min-width: 100%;
  height: auto;
  top: 3.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${Props => Props.theme.colors.secundary};
  flex-direction: column;
  position: fixed;
  display: flex;
  z-index: 999;
  overflow-y: scroll;
`
export const Ul = Styled.ul`
  width: 350px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: left;
  .viewMore{
    width: 100%;
    border-radius: 10px;
    min-height: 45px;
    display: flex;
    align-items: center;

    font-size: 1rem;
    padding: 0 1rem;
    &:hover {
    background: ${Props => Props.theme.colors.hover};
    }
    p{
      margin-left: 1rem;
    }
  }

`
export const AtalhosSt = Styled.div`
  width: 100%;
  height: auto;
  padding: 1.5rem;
  .seus-atalhos {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${Props => Props.theme.colors.text};
    opacity: .8;
  }
`
export const List = Styled.li`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0 .5rem;
  font-size: .9rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  color: ${Props => Props.theme.colors.text};
  &:hover {
    background: ${Props => Props.theme.colors.hover};
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin: 0 .5rem;
  }
  
`