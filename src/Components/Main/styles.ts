import Styled from 'styled-components'

export const MainSt = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 4rem;
  justify-content:center;
  @media (max-width: 1100px){
    justify-content: flex-start;
  }
`