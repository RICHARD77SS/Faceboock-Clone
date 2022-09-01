import Styled from 'styled-components';

export const NavRightSt = Styled.div`
  min-width: 200px;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 .5rem;
  margin-left: 3.8rem;
  margin-right: -1rem;
  justify-content: space-around;
  .bd {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: fixed;
    z-index: 101;
  }
  .btn-nav.menu {
    @media (max-width: 1100px) {
      display: none;
    }
  }
  .btn-nav.main-criar {
    display: none;
    @media (max-width: 1100px) {
      display: flex;
      font-size: 1.8rem;
    }
  }
  .btn-criar {
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-nav {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    list-style-type: none;
    background: ${Props => Props.theme.colors.secundary};
  :hover {
    background:  ${Props => Props.theme.colors.hover};
    }
    img{
      width: 100%;
      height: 100%;
      border-radius: 50px;
    }
  }
`
export const ListSt = Styled.li`
  
  .image {
    min-width: 40px;
    min-height: 40px;
    border-radius: 50px;
  }
`