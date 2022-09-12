import Styled from 'styled-components'

export const MainTabsSt = Styled.div`
  width: 100%;
  min-width: 500px;
  height: auto;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.background};

  .tab {
    width: 31.5%;
    flex: 1;
    font-weight: 700;
    font-size: .8rem;
    margin:.2rem;
    border-radius: 10px;
    :hover {
      background:${Props => Props.theme.colors.secundary};
    }
  }
  @media (max-width: 520px) {
    width: 470px;
  }
`