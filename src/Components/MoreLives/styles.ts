import Styled from 'styled-components';

export const MoreLivesSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  margin-top: 6.5rem;
`
export const Block1St = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  background: ${Props => Props.theme.colors.background};
  h3 {
    margin-top: 1rem;
    margin-left: 1rem;
  }
`
export const BlockSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 1rem;
`

export const ContainerLivesSt = Styled.div`
  width: 100%;
  height: 500px;
  max-height: 500px;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-around;
`

export const CardLiveSt = Styled.div`
  width: 32%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: .3rem;
`
export const LiveConteinerSt = Styled.div`
  width: 100%;
  min-height: 90px;
  height: 70%;
  max-height: 150px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`

export const LiveTopSt = Styled.div`
  width: auto;
  height: 40px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem;
  overflow: hidden;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .live {
    background: #f00;
    animation-name: live;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    padding: .3rem;
    color: #fff;
    border-radius: 5px;
  }
  @keyframes live{
    from {background-color: #f00;}
    to {background-color: #800;}
  }
  .views {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-left: .5rem;
  }
  .btn-options {
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
`
export const FlexSt = Styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content:  center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
`
export const AvaliationSt = Styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content:  center;
  
`









