import Styled from 'styled-components';

export const PostSt = Styled.div`
  width: 100%;
  height: auto;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;
  background: ${Props => Props.theme.colors.background};
  @media (max-width: 520px) {
    width: 470px;
  }
`
export const PostHeaderSt = Styled.div`
  width: 100%;
  height: auto;
  padding: .5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
  @media (max-width: 520px) {
    width: 470px;
  }
  img {
    width: 100%;
    height: 100%;
  }
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
  .like {
    margin-right: 1.5rem;
  }
  
`

export const BlockSt = Styled.div`
  width: auto;
  height: auto;
  margin-left: .5rem;
  .flex-p {
    display: flex;
    align-items: center;
    font-size: .8rem;
  }
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
export const PostCommentSt = Styled.div`
  width: 500px;
  padding-bottom: 1rem;

  .input{
    width: 88%;
    height: 30px;
    border-radius: 20px;
    border: none;
    background: ${Props => Props.theme.colors.secundary};
    :focus{
      border: none;
      outline: none;
    }
  }
`
export const InputsSt = Styled.div`
  width: auto;
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
    border-radius: 40px;
    margin: 0 .5rem;
  }
`
export const InsertsSt = Styled.div`
  width: auto;
  display: flex;
  align-items: center;
  position: absolute;
  margin-left: 22rem;
  .btn-ico{
    width: 25px;
    height: 25px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
  .ico {
    font-size: 1rem;
  }
`