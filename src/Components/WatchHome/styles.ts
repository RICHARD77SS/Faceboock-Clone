import Styled from 'styled-components';

export const WatchPostSt = Styled.div`
  width: 60%;
  height: auto;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  margin: 1rem auto;
  .topnav{
    display: none;
    @media (max-width: 910px){
    display: flex;
    }
  }
  @media (max-width: 910px){
    width: 100%;
  }
`

