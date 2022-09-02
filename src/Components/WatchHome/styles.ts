import Styled from 'styled-components';

export const WatchPostSt = Styled.div`
  width: 80%;
  height: auto;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${Props => Props.theme.colors.background};
`

export const PostTopSt = Styled.div`
  width: 100%;
  height: 80px;
  padding: 1rem;
  display: flex;
  align-items: start;
  flex-direction: column;
`
export const Flex1St = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: start;
  justify-content: flex-start;
  img{
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
  .btn-config {
    min-width: 20px;
    height: 20px;
    border-radius: 30px;
    background: ${Props => Props.theme.colors.hover};
  }
`
export const Block1St = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  padding-left: 1rem;
`
export const DivSt = Styled.div`
  height: 20px;
  font-size: .8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .bi {
    margin-left: .5rem;
  }
`
export const PostContentSt = Styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
`
export const PostBottomSt = Styled.div`
  width: 100%;
  height: 50px;
  padding: 1rem;
  display: flex;
  align-items: start;

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

