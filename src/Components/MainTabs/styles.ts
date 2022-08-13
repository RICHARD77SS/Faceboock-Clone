import Styled from 'styled-components'

export const MainTabsSt = Styled.div`
  width: 500px;
  height: auto;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.background};
  .tab {
    width: 155px;
    font-weight: 700;
    font-size: .8rem;
    margin:.4rem;
    border-radius: 10px;
    :hover {
      background:${Props => Props.theme.colors.secundary};
    }
  }
`