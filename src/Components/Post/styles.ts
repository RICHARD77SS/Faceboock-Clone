import Styled from 'styled-components';

export const PostSt = Styled.div`
  width: 500px;
  height: auto;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${Props => Props.theme.colors.background};
`
export const PostHeaderSt = Styled.div`
  width: 100%;
  height: auto;
  padding: .5rem;
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
  .btn-more {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  :hover{
      background: ${Props => Props.theme.colors.hover};
    }
  }
`
export const ImageSt = Styled.div`
  width: 500px;
  height: 500px;
  background: ${Props => Props.theme.colors.hover};
`
export const PostFooterSt = Styled(PostHeaderSt)`
  flex-direction: column;
  .hr {
    margin-left: 4rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`
export const FlexSt = Styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  p{
    margin-left: .5rem;
  }
  .btn {
    width: 140px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 1rem;
    :hover{
      background: ${Props => Props.theme.colors.hover};
    }
  }
  .btn2 {
    width: 50px;
    height: 30px;
    display: flex;
    padding: .5rem;
    border-radius: 5px;
    align-items: center;
    :hover{
      background: ${Props => Props.theme.colors.hover};
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
  .icons-reaction {
    margin-right: 9rem;
  }
`
export const BlockSt = Styled.div`
  width: auto;
  height: auto;
  margin-left: .5rem;
  margin-right: 16rem;
  p{
    font-size: .8rem;
  }
  
` 
export const Icon = Styled(FlexSt)`
  width: 20px;
  height: 20px;
  font-size: .7rem;
  justify-content: center;
  border-radius: 30px;
  background: #0470E5;
  color: #fff;
  border: 1px solid #fff;
`
export const Iconb = Styled(Icon)`
  background: #F03655;
  color: #fff;
`