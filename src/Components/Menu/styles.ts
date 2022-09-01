import Styled from 'styled-components';

export const MenuSt = Styled.div`
  width: auto;
  height: auto;
  .btn-menu {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    font-weight: 700;
    cursor: pointer;
    color: #000;
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
  .bd {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: fixed;
    z-index: 101;
  }
`
export const MenuContentSt = Styled.div`
  width: 600px;
  height: 550px;
  background: ${Props => Props.theme.colors.secundary};
  position: absolute;
  z-index: 999;
  top: 4rem;
  right: 1rem;
  border-radius: 10px;
  padding: 1rem;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.28);
  -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.28);
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.28);
`
export const MenuFlexSt = Styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const MenuBlockSt = Styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-top: 1rem;
`
export const TopBarSt = Styled.ul`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${Props => Props.theme.colors.secundary};
  border-radius: 10px;
  h2{
    font-size: 1.5rem;
    width: fit-content;
  }
`

export const UlSt = Styled.ul`
  width: 70%;
  height: 90%;
  display: flex;
  align-items: start;
  border-radius: 10px;
  padding-bottom: 6rem;
  flex-direction: column;
  justify-content: left;
  overflow-y: scroll;
  background: ${Props => Props.theme.colors.background};
  ::-webkit-scrollbar {
    width: 10px;
  }
  .input-search {
    width: 90%;
    height: 40px !important;
    border-radius: 20px;
    margin-top: 1rem;
    margin-left: 1rem;
    padding: .5rem;
    border: none;
    background: ${Props => Props.theme.colors.secundary};
    :focus {
      border: none;
      outline: none;
    }
  }
  h3{
    margin: 1rem;
  }
  .list-ent {
    background: ${Props => Props.theme.colors.background};
    width: 100%;
    border-top: 0.5px solid rgba(0,0,0,0.4);
  }
`
export const ListSt = Styled.li`
  width: 98%;
  height: 70px;
  display: flex;
  align-items: start;
  padding: .5rem;
  margin: .5rem;
  font-size: .9rem;
  font-weight: 600;
  cursor: pointer;
  color: ${Props => Props.theme.colors.text};
  background: ${Props => Props.theme.colors.background};
  &:hover {
    background: ${Props => Props.theme.colors.hover};
    border-radius: 10px;
  }

`
export const ListBlock = Styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: start;
  text-align: left;
  flex-direction: column;
  p{
    font-size: .8rem;
    font-weight: 400;
    margin: 0;
  }
`
export const ImageConteiner = Styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: .5rem;

`