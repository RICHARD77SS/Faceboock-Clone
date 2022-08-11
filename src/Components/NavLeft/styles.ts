import Styled from 'styled-components';

export const NavLeftSt = Styled.ul`
  width: 20%;
  height: 60px;
  display: flex;
  align-items: center;

`
export const ListSt = Styled.li`
  width: 10%;
  height: auto;
  list-style-type: none;
  .svgSearch{
    position: absolute;
    transform: translateX(-240px);
    margin-top: 12px;
    z-index: 100;
  }
  .input-search {
    width: 240px;
    height: 40px;
    border: none;
    margin-left: 1.2rem;
    font-size: .9rem;
    position: absolute;
    border-radius: 20px;
    transform: translateY(-20px);
    background: ${Props => Props.theme.colors.secundary}; 
    z-index: 10;
  }
  .input-search:focus {
    border: none;
  }
`