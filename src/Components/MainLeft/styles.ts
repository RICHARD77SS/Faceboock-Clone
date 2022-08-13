import Styled from 'styled-components';

export const MainLeftSt = Styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .hr {
    width: 70%;
    height:.5px;
    margin-right: 4rem;
    background: ${Props => Props.theme.colors.text};
    opacity: 0.3;
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
export const UlSt = Styled.ul`
  width: 100%;
  height: 100%;
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
  }
  .accordion-details {
    padding: 0;
    margin-bottom: 4rem;
  }
  .accordion-summary.Mui-expanded {
    padding-left: 1rem;
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
