import Styled from 'styled-components';


export const Post = Styled.div`
  display: flex;
  margin: 1rem 0;
  img {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 0 .5rem;
  }
`
export const BlockMess = Styled.div`
  
`
export const Mess = Styled.div`
  width: 240px;
  height: auto;
  background: #F0F2F5;
  padding: .5rem;
  border-radius: 15px;
  h4 {
    font-size: .9rem;
  }
  p {
    font-size: .9rem;
  }
`
export const MessInteractions = Styled.div`
  display: flex;
  p{
    margin-left: .8rem;
    font-size: .8rem;
    font-weight: 600;
    :hover {
      text-decoration: underline;
    }
    :last-child {
      font-weight: 500;
    }
  }
`