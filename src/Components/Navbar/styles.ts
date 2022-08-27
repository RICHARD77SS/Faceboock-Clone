import Styled from 'styled-components';

export const NavbarSt = Styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 0 .8rem;
  justify-content: space-between;
  background: ${Props => Props.theme.colors.background}
  `