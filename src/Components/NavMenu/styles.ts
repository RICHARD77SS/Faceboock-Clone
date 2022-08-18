import Styled from 'styled-components';

export const NavMenuSt = Styled.ul`
  width: 43%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .btn-game{
    width: 100px;
    @media (max-width: 1100px) {
      display: none;
    }
  }
`
export const ListSt = Styled.li`
  min-width: 100px;
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
  
`