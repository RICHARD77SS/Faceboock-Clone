import Styled from 'styled-components';

export const MainCenterSt = Styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1100px){
    margin-left: 15%;
  }
  @media (max-width: 900px){
    margin-left: 25%;
  }
`