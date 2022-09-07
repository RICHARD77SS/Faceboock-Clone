import Styled from 'styled-components';

export const NavMenuSt = Styled.ul`
  width: 45%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 1rem;
  .navlink.list-more {
      display: none;
    }
  .btn-game{
    width: 120px;
    @media (max-width: 1100px) {
      display: none;
    }
  }
  @media (max-width: 1100px) {
    width: 40%;
    transform: translatex(-2rem);
    .navlink.list-more {
      display: flex;
    }
  }
  @media (max-width: 700px){
    justify-content: flex-start;
    padding-left: 1.5rem;
  }
  .navlink {
    fill: #444;
  }
  .navlink .icon {
    display: none;
  }
  .navlink.active .svg-1{
    display: none;
  }
  .navlink.active .icon {
    display: block;
    font-size: 1.9rem;
    color: ${Props => Props.theme.colors.primary};
    fill: ${Props => Props.theme.colors.primary};
  }
  .navlink.active .bar-bottom {
    display: block;
    width: 120px;
    height: 2px;
    background: ${Props => Props.theme.colors.primary};
    @media(max-width: 1100px){
    width: 100px;
    display: flex;
  }
    @media(max-width: 900px){
    width: 70px;
  }
  @media (max-width: 700px){
    display: none;
  }
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
    width: 120px;
    min-width: 60px;
    height: 50px;
    border-radius: 10px;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  :hover {
    background: ${Props => Props.theme.colors.secundary};
  }
  @media(max-width: 1100px){
    width: 100px;
    display: flex;
  }
  @media(max-width: 768px){
    width: 70px;
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
    width: 100px;
  }
  @media(max-width: 900px){
    width: 70px;
  }
  @media (max-width: 700px){
    display: none;
  }
`