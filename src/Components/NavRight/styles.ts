import Styled from 'styled-components';

export const NavRightSt = Styled.ul`
  width: 16%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 .5rem;
  margin-left: 3.8rem;
  justify-content: space-around;
`
export const ListSt = Styled.li`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  list-style-type: none;
  background: ${Props => Props.theme.colors.secundary};
  .image {
    min-width: 40px;
    min-height: 40px;
    border-radius: 50px;
  }
`