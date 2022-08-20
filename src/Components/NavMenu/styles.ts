import Styled from 'styled-components';

export const NavMenuSt = Styled.ul`
  width: 43%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .red {
    fill: #fff000;
    color: #ff0000;
  }
  .blue {
    fill: #00ffff;
  }
  .btn-game{
    width: 100px;
    @media (max-width: 1100px) {
      display: none;
    }
  }
  @media (max-width: 700px){
    justify-content: flex-start;
    padding-left: 1.5rem;
  }

`
export const ListSt = Styled.li`
  width: 100px;
  min-width: 60px;
  height: 50px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background: ${Props => Props.theme.colors.secundary};
  }
  @media (max-width: 700px){
    display: none;
  }
`