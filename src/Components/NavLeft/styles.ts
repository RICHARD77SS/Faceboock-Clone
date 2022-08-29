import Styled from 'styled-components';

export const NavLeftSt = Styled.ul`
  width: 20%;
  height: 60px;
  display: flex;
  align-items: center;

`
export const ListSt = Styled.li`
  width: 30px;
  height: auto;
  list-style-type: none;
  .svgSearch{
    position: absolute;
    transform: translateX(24px);
    margin-top: -8px;
    z-index: 100;
  }
  
  .input-search {
    width: 250px;
    height: 40px;
    border: none;
    margin-left: 1.2rem;
    font-size: .9rem;
    position: absolute;
    border-radius: 20px;
    transform: translateY(-20px);
    background: ${Props => Props.theme.colors.secundary}; 
    z-index: 10;
    @media (max-width: 1260px){
      width: 40px;
      :hover {
        width: 240px;
      }
      :focus {
        border: none;
        width: 240px;
        outline: none;
      }
    }
    @media (max-width: 768px) {
      :hover {
        width: 40px;
      }
      :focus {
        border: none;
        width: 240px;
        outline: none;
      }
    }
  }
  .input-search:focus {
    border: none;
    outline: none;
  }
  
`