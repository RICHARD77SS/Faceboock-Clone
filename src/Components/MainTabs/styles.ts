import Styled from 'styled-components'

export const MainTabsSt = Styled.div`
  width: 500px;
  height: auto;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.background};
  .tab {
    width: 150px;
    font-weight: 700;
    font-size: .7rem;
    :hover {
      background:${Props => Props.theme.colors.secundary};
    }
  }
`