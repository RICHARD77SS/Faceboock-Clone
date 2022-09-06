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
  
`
export const ContainerSt = Styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  :hover .card-modal {
    transition: .5s;
    display: flex;
  }
  
`
export const CardModalSt = Styled.div`
  width: 400px;
  height: auto;
  border-radius: 5px;
  display: none;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  padding: 1rem;
  padding-top: .5rem;
  background: ${Props => Props.theme.colors.background};
  .flex {
    width: auto;
    height: auto;
    display: flex;
    p {
      margin-right: .5rem;
      margin-bottom: .2rem;
      font-size: .8rem;
    }
  }
  button{
    width: 100%;
    height: 30px;
    border-radius: 5px;
    margin-top: .5rem;
    background: ${Props => Props.theme.colors.secundary};
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
`