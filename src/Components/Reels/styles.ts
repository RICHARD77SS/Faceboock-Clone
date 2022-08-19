import Styled from 'styled-components';

export const ReelsSt = Styled.div`
  width: 120px;
  height: 200px;
  margin: .5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.1);
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
  :hover {
    filter: brightness(90%);
  }
`
export const UsernameSt = Styled.div`
  position: absolute;
  margin-top: 180px;
  width: auto;
  height: auto;
  color: #fff;
  border-radius: 10px;
`
