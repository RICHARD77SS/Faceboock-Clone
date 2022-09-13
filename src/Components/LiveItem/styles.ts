import Styled from 'styled-components';

export const CardLiveSt = Styled.div`
  min-width: 200px;
  max-width: 300px;
  height: auto;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  :hover .btn-options {
    display: flex;
  }
`
export const LiveConteinerSt = Styled.div`
  width: 100%;
  height: auto
  max-height: 150px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    max-height: 150px;
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
    background: rgba(0,0,0,0.5);
    margin-left: .5rem;
    padding: .3rem;
    border-radius: 5px;
  }
  .btn-options {
    border-radius: 20px;
    display: none;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    margin-left: 5rem;
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
  fill: #fff;
  
`
export const BlockSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 1rem;
  h4 {
    font-weight: 500;
    :hover {
      text-decoration: underline;
    }
  }
  p{
    font-size: .8rem;
    :hover {
      text-decoration: underline;
    }
  }
`