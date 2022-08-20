import Styled from 'styled-components';

export const NavRightSt = Styled.ul`
  width: 220px;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 .5rem;
  margin-left: 3.8rem;
  justify-content: space-around;
  .main-menu {
    @media (max-width: 1100px) {
      display: none;
    }
  }
  .main-criar {
    display: none;
    @media (max-width: 1100px) {
      display: flex;
      
    }
  }
  .btn-criar {
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const ListSt = Styled.li`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  list-style-type: none;
  background: ${Props => Props.theme.colors.secundary};
  cursor: pointer;
  :hover {
  background:  ${Props => Props.theme.colors.hover};
  }
  .image {
    min-width: 40px;
    min-height: 40px;
    border-radius: 50px;
  }
`