import Styled from 'styled-components';

export const NavbarSt = Styled.div`
  width: 100%;
  height: 56px;
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 0 .8rem;
  justify-content: space-between;
  background: ${Props => Props.theme.colors.background};
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1);
  `