import Styled from 'styled-components';

export const MakeStorySt = Styled.div`
  width: 250px;
  height: 400px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: .5rem;
  background: rgb(166,142,255);
  background: -moz-linear-gradient(172deg, rgba(166,142,255,1) 0%, rgba(225,84,252,1) 50%, rgba(157,142,255,1) 100%);
  background: -webkit-linear-gradient(172deg, rgba(166,142,255,1) 0%, rgba(225,84,252,1) 50%, rgba(157,142,255,1) 100%);
  background: linear-gradient(172deg, rgba(166,142,255,1) 0%, rgba(225,84,252,1) 50%, rgba(157,142,255,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#a68eff",endColorstr="#9d8eff",GradientType=1);
  .icon{
    width: 40px;
    height: 40px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.2);
    background: ${Props => Props.theme.colors.background};
    font-size: 1.5rem;
  }
  p{
    color: #fff;
    font-weight: 600;
  }
  :hover {
    filter: brightness(90%);
  }
`