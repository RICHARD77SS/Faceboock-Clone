import Styled from 'styled-components';

export const ModalSalaSt = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  background: rgba(255,255,255,0.6);
  z-index: 120;
`
export const ModalSalaContentSt = Styled.div`
  width: 500px;
  height: 220px;
  border-radius: 5px;
  padding: 1rem;
  background: ${Props => Props.theme.colors.background};
  box-shadow: 0 0 3px 1px rgba(0,0,0,0.4);
  position: fixed;
  z-index: 120;
`
export const ModalSt = Styled.div`
  width: 100%;
  height: 100%;
`
export const SalaTopSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: start;
  justify-content: flex-end;
  .btn {
    width: 35px;
    height: 35px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    font-size: 1.3rem;
    color: #666;
    margin: 0 .3rem;
    cursor: pointer;
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
`
export const SalaCenterSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #000;
`
export const SalaBottomSt = Styled(SalaCenterSt)`
  p{
    font-size: .8rem;
    
  }
  .btn-criar {
    width: 100%;
    height: 60px;
    border-radius: 5px;
    font-size: 1rem;
    margin-top: 1.5rem;
    padding: 1rem .5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    :hover {
      background: ${Props => Props.theme.colors.secundary}
    }
    .ico {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #bbb;
      font-size: 2rem;
    }
  }
`
export const SalaBlockSt = Styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: start;  
  margin-left: .4rem;
  h4 {
    font-size: 1rem;
  }
  p{
    font-size: .9rem;
    color: ${Props => Props.theme.colors.text};
  }
`
export const IconSt = Styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border: .5px solid rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center; 
  font-size: .5rem;
  transform: translatex(-12rem);
  img {
    width: 100%;
    height: 100%;
    border-radius: 50px;
  }
`
