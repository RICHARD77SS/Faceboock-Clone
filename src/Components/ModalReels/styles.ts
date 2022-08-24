import Styled from 'styled-components';


export const ModalReelsSt = Styled.div`
width: 100%;
height: 100%;
display: flex;
position: absolute;
top: 0;
left: 0;
z-index: 999;
`
export const ReelsNavLeftSt = Styled.div`
width: 35%;
height: 100%;
display: flex;
align-items: start;
padding: 1rem;
background: #555;
`
export const ReelsNavCenterSt = Styled.div`
min-width: 400px;
height: 100%;
display: flex;
align-items: center;
padding: 1rem;
background: #555;
`
export const ReelsTopSt = Styled.div`
width: 380px;
height: 50px;
display: flex;
align-items: center;
padding: 1rem;
top: 2rem;
font-size: .8rem;
color: #fff;
position: absolute;
  img{
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
  h5 {
    font-size: 1rem;
    cursor: pointer;
  }
  span{
    :hover {
      text-decoration: underline;
    }
  }
  .flex {
    display: flex;
    align-items: center;

  }
  
`
export const ReelsContentSt = Styled.div`
min-width: 380px;
height: 650px;
display: flex;
align-items: center;
padding: 1rem 0;
background: #333;
border-radius: 10px;
.img-reels {
    width: 380px;
    height: 500px;
    object-fit: cover;
  }
`
export const ReelsBottomSt = Styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
padding: 1rem;
`
export const ReelsBlockSt = Styled.div`
width: auto;
height: 50px;
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
padding: 1rem;
margin-right: 3rem;
`
export const ReelsRightSt = Styled.div`
width: 100px;
height: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
padding: 1rem;
color: #fff;
font-size: .8rem;
position: absolute;
top: 40%;
left: 65%;
`
export const ReelsNavRightSt = Styled.div`
width: 35%;
height: 100%;
display: flex;
align-items: start;
background: #555;
`
export const DivIconSt = Styled.div`
width: fit-content;
height: auto;
display: flex;
align-items: start;
margin-left: 7rem;
`
export const DivIco = Styled.div`
min-width: 35px;
min-height: 35px;
border-radius: 35px;
background: #444;
color: #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 1rem;
`
export const DivIcob = Styled.div`
  width: 60px;
height: 60px;
border-radius: 40px;
background: #666;
color: #fff;
display: flex;
font-size: 2rem;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 1rem;
`