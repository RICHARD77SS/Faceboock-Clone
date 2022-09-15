import Styled from 'styled-components';

export const VideoItem = Styled.div`
  display: flex;
  align-items: start;
  margin: .5rem 0;
  button{
    width: 30px;
    height: 30px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    :hover {
      background: #ddd;
    }
  }
`
export const Image = Styled.div`
  width: 150px;
  height: 80px;
  img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`
export const Duration = Styled.div`
  color: #fff;
  position: absolute;
  transform: translate(80px, -25px);
`
export const Infos = Styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0 .5rem;
  h4 {
    font-size: 1rem;
    margin: .2rem 0;
  }
  span {
    font-size: .9rem;
    margin: .2rem 0;
  }
  p{
    font-size: .8rem;
    margin: .2rem 0;
  }
`