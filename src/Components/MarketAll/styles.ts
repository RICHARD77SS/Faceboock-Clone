import Styled from 'styled-components';

export const ContainerSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const ContentSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: .5rem;
`
export const HeaderSt = Styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ListProductsSt = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: .6rem;
`
export const Product = Styled.div`
  width: 19%;
  max-width: 300px;
  min-width: 240px;
  height: 50%;
  display: flex;
  align-items: start;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;

  img {
    width: 100%;
    max-width: 300px;
    min-width: 200px;
    max-height: 280px;
    border-radius: 5px;
  }
  h4 {
    margin: .4rem 0;
    color: #000;
  }
  span{
    color: #000;
  }
  p{
    font-size: .8rem;
    margin: .4rem 0;
  }
`