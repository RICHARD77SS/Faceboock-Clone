import Styled from 'styled-components';

export const MainLeftSt = Styled.div`
  width: 25%;
  max-width: 350px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  left: 0;
  @media (max-width: 1100px) {
    display: none;
  }
  ul::-webkit-scrollbar {
    width: 12px;
  }

  ul::-webkit-scrollbar-track {
    background:  ${Props => Props.theme.colors.secundary};
  }

  ul::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 20px;
    border: 1px solid rgba(241, 241, 241, 0.72);
  }
  @media (max-width: 900px) {
    display: none;
  }
`
export const Ul = Styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: left;
  overflow-y: scroll; 
  overflow-x: hidden;
  padding-bottom: 4rem;
  .viewMore{
    width: 100%;
    border-radius: 10px;
    min-height: 45px;
    display: flex;
    align-items: center;

    font-size: 1rem;
    padding: 0 1rem;
    &:hover {
    background: ${Props => Props.theme.colors.hover};
    }
    p{
      margin-left: 1rem;
    }
  }
`
export const List = Styled.li`
  width: 100%;
  min-height: 45px;
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
export const AtalhosSt = Styled.div`
  width: 100%;
  height: auto;
  padding: 1.5rem;
  border-top: .5px solid rgba(0,0,0,0.2);
  .seus-atalhos {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${Props => Props.theme.colors.text};
    opacity: .8;
  }
`