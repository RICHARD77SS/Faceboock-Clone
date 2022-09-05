import Styled from 'styled-components';


export const ShowCardSt = Styled.div`
  width: 200px;
  height: 200px;
  margin: .1rem;
  background-size: cover;
  overflow: hidden;
  position: relative;
  float: left;
  cursor: pointer;
  :hover .child {
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
  .child {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
  }
  :hover .card-modal{
    display: flex;
  }
`
export const CardModalSt = Styled.div`
  width: 300px;
  height: auto;
  border-radius: 5px;
  display: none;
  background: ${Props => Props.theme.colors.background};

`