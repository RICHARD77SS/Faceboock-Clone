import Styled from 'styled-components';

export const Div = Styled.div`
  .bd {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: fixed;
    z-index: 100;
  }
`
export const SalasSt = Styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .5rem;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.2);
  margin: 0 .3rem;
  h3 {
    font-weight: 600;
    color: ${Props => Props.theme.colors.text};
  }
  p {
    color: ${Props => Props.theme.colors.text};
  }
  .btn-criar {
    width: 100%;
    height: 35px;
    margin-top: 2rem;
    border-radius: 5px;
    box-shadow: 0px 0px 3px 1px rgba(0,0,200,0.2);
    color: rgba(0,0,255,0.7);
    font-size: 1rem;
    font-weight: 600;
  }
`
export const IconSt = Styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  border: .5px solid rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center; 
  font-size: 1.5rem;
  margin-right: 2.5rem; 
  color: #C850C0;
`
export const InfoSt = Styled.div`
  width: 200px;
  height: 90px;
  display: flex;
  align-items: start;
  justify-content: flex-end;
  padding-right: 1rem;
  .info{
    color: #bbb;
  }
`