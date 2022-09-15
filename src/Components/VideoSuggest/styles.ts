import Styled from 'styled-components';

export const Video = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  margin: .5rem 0;
  img {
    width: 220px;
    height: 120px;
    border-radius: 5px;
  }
`
export const Infos = Styled.div`
  padding-left: .5rem;
  h4{
    font-size: .9rem;
    margin: 0 .4rem;
  }
`
export const User = Styled.div`
  display:flex;
  align-items:center;
  img{
    width: 25px;
    height: 25px;
    border-radius: 25px;
  }
  p{
    font-size: .8rem;
  }
`