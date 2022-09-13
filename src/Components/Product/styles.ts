import Styled from 'styled-components';

export const Product = Styled.div`
  width: 19%;
  max-width: 280px;
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
    cursor: pointer;
  }
  span{
    color: #000;
    cursor: pointer;
  }
  p{
    font-size: .8rem;
    margin: .4rem 0;
    cursor: pointer;
  }
`