import Styled from 'styled-components';

export const PatrocSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1rem;
  h4 {
    margin: 1rem .5rem;
  }
`
export const PromoSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: .5rem;
  border-radius: 10px;
  :hover {
    background: ${Props => Props.theme.colors.hover};
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }
`
export const BlockSt = Styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items: start;
  flex-direction: column;
  h5 {
    font-weight: 700;
    font-size: .9rem;
    color: #000;
  }
  p {
    font-size: .8rem;
  }
`



