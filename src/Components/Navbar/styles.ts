import Styled from 'styled-components';

export const NavbarSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding: 0 .8rem;
  justify-content: space-between;
  background: ${Props => Props.theme.colors.background}
  `