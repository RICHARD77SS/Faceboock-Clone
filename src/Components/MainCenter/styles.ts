import Styled from 'styled-components';

export const MainCenterSt = Styled.div`
  width: 680px;
  min-width: 500px
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-left: -2rem;
  @media (max-width: 1440px){
    width: 45%;
  }
  @media (max-width: 1100px){
    margin-left: 15%;
    width: 65%;
    margin-left: 3%;
  }
  @media (max-width: 900px){
    width: 80%;
    margin: 0 auto;
  }
`