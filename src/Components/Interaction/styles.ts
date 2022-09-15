import Styled from 'styled-components';

export const InteractionsSt = Styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: .5rem 0;
  p {
    margin: 0 .2rem;
    font-size: 1rem;
  }
  img {
    width: 20px;
    height: 20px;
    border-radius: 20px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem .2rem;
    font-size: 1.2rem;
    border-radius: 5px;
    :hover {
      background: #ccc;
    }
  }
`