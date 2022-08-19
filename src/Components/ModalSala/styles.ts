import Styled from 'styled-components';

export const ModalSalaSt = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255,255,255,0.6);
  z-index: 999;
`
export const ModalSalaContentSt = Styled.div`
  width: 500px;
  height: 350px;
  padding: 1rem;
  background: ${Props => Props.theme.colors.background};
  box-shadow: 0 0 3px 1px rgba(0,0,0,0.4);
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
  padding-top: 1rem;
  color: #000;
`
export const SalaBottomSt = Styled.div`
  width: 100%;
  height: auto;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  p{
    font-size: .8rem;
    
  }
  .btn-criar {
    width: 100%;
    height: 35px;
    border-radius: 5px;
    background: #1A6ED8;
    font-size: 1rem;
    color: #fff;
    margin-top: .4rem;
    cursor: pointer;
    :hover {
      filter: brightness(.8);
    }
  }
`
export const SalaFlexSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: .4rem;
  cursor: pointer;
  :hover {
    background: ${Props => Props.theme.colors.hover};
    transition: all .3s;
  }
  .bg {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    font-size: 1.3rem;
    color: #eee000;
    margin: 0 .3rem;
  }
  .bg.clock{
    color: #000;
  }
  .left-ico {
    font-size: 1.6rem;
    margin-left: 15rem;
    color: ${Props => Props.theme.colors.text};
  }
  .left-ico.top{
    margin-left: 15.6rem;
  }
`
export const SalaBlockSt = Styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: .4rem;
  p{
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
  font-size: 2rem;
  margin-right: 6.5rem; 
  color: #C850C0;
`
