import Styled from 'styled-components';

export const MainLeftSt = Styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
`
export const UlSt = Styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
export const ListSt = Styled.li`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0 .5rem;
  font-size: .9rem;
  font-weight: 600;
  color: ${Props => Props.theme.colors.text};
  img {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin: 0 .5rem;
  }
`