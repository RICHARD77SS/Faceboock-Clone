import Styled from 'styled-components';

export const NavMenuSt = Styled.ul`
  width: 43%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ListSt = Styled.li`
  width: 90px;
  height: 60px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  :hover {
    background: ${Props => Props.theme.colors.secundary};
  }
`