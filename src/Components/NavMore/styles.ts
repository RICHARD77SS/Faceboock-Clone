import Styled from 'styled-components';


export const NavMoreContentSt = Styled.div`
  min-width: 100%;
  height: auto;
  top: 3.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${Props => Props.theme.colors.secundary};
  flex-direction: column;
  position: fixed;
  display: flex;
  z-index: 999;
  overflow-y: scroll;
`
export const UlSt = Styled.ul`
  width: 350px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: left;
  .accordion{
    background: ${Props => Props.theme.colors.secundary};
    border: none;
    box-shadow: none;
    padding: 0;
  }
  .accordion-summary {
    margin: 0;
    margin-left: -2rem;
    padding: 0;
    padding-right: 12rem;
    padding-left: 1rem;
  }
  .exicon{
    background: ${Props => Props.theme.colors.hover};
    border-radius: 20px;
    opacity: 0.7;
    position: absolute;
    margin-left: -6rem;
    transform: translatey(-.8rem);
  }
  .typ {
    margin-left: 2.5rem;
    font-size: .9rem;
    font-weight: 700;
    color: ${Props => Props.theme.colors.text};
  }
  .accordion-details {
    padding: 0;
    margin-bottom: 4rem;
  }
  .accordion-summary {
    border-radius: 10px;
  }
  .accordion-summary.Mui-expanded {
    padding-left: 1rem;
    width: 275px;
    border-radius: 10px;
    position: absolute;
    transform: translatey(850px);
  }
  .accordion-summary:hover{
      background: ${Props => Props.theme.colors.hover};
    }
  .accordion.Mui-expanded {
    margin-left: -3.5rem;
  }
  .Mui-expanded {
    margin: 0;
  }
  
`
export const AtalhosSt = Styled.div`
  width: 100%;
  height: auto;
  padding: 1.5rem;
  .seus-atalhos {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${Props => Props.theme.colors.text};
    opacity: .8;
  }
`
export const ListSt = Styled.li`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0 .5rem;
  font-size: .9rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  color: ${Props => Props.theme.colors.text};
  &:hover {
    background: ${Props => Props.theme.colors.hover};
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin: 0 .5rem;
  }
  
`