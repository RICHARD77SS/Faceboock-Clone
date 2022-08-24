import Styled from 'styled-components';

export const ConfigBgSt = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(255,255,255,0.3);
  z-index: 999;
`

export const ConfigSt = Styled.div`
  width: 550px;
  height: 510px;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  padding: .5rem 0;
  box-shadow: 0 0 4px 1px rgba(0,0,0,0.2);
  background: ${Props => Props.theme.colors.background};
`
export const ConfigTopSt = Styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: .5px solid rgba(0,0,0,0.2);
`
export const ConfigCenterSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: .5rem;
  h4 {
    margin-top: .5rem;
    margin-left: .5rem;
  }
  p {
    font-size: .8rem;
    margin-bottom: 1rem;
    margin-left: .5rem;
  } 
`
export const ConfigFlexSt = Styled.div`
  width: 100%;
  height: auto;
  padding: .5rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    background: ${Props => Props.theme.colors.hover};
  }
  input[type=radio]{
    -ms-transform: scale(1.5); /* IE 9 */
    -webkit-transform: scale(1.5); /* Chrome, Safari, Opera */
    transform: scale(1.5);
  }
`
export const IconDivSt = Styled.div`
  min-width: 60px;
  height: 60px;
  border-radius: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: #000;
  background: ${Props => Props.theme.colors.secundary};
`
export const BlockDivSt = Styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  align-items: start;
  justify-content: center;
  padding-left: 1rem;
  h4{
    margin: 0;
  }
  p{
    margin: 0;
  }
`
export const BottomTextSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 1rem;
  border-bottom: .5px solid rgba(0,0,0,0.2);
  border-top: .5px solid rgba(0,0,0,0.2);
`
  export const ConfigBottomSt = Styled.div`
    width: 100%;
    height: 60px;
    margin-top: 1rem; 
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .btn {
      width: 120px;
      height: 40px;
      font-size: 1.2rem;
      font-weight: 700;
      border-radius: 5px;
    }
    .btn.cancelar {
      color: ${Props => Props.theme.colors.primary};
      :hover {
        background: ${Props => Props.theme.colors.hover};
      }
    }
    .btn.salvar {
      background: ${Props => Props.theme.colors.primary};
      color: #fff;
      margin: 1rem;
      :hover {
        filter: brightness(0.9);
      }
    }
  `