import Styled from 'styled-components';

export const NavMenuSt = Styled.ul`
  width: 45%;
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
  @media (max-width: 1100px) {
    width: 40%;
    transform: translatex(-2rem);
  }
  @media (max-width: 700px){
    justify-content: flex-start;
    padding-left: 1.5rem;
  }

`
export const NavMoreSt = Styled.div`
  width: 100px;
  min-width: 50px;
  height: 50px;
  border-radius: 10px;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 700;
  .btn-more {
    width: 100px;
    min-width: 60px;
    height: 50px;
    border-radius: 10px;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :hover {
    background: ${Props => Props.theme.colors.secundary};
  }
  @media(max-width: 1100px){
    width: 80px;
    display: flex;
  }
  @media(max-width: 768px){
    width: 50px
  }
  @media(max-width: 700px){
    transform: translatex(3rem);
  }

`
export const ListSt = Styled.li`
  width: 120px;
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
  @media (max-width: 1100px) {
    width: 80px;
  }
  @media(max-width: 768px){
    width: 50px
  }
  @media (max-width: 700px){
    display: none;
  }
`