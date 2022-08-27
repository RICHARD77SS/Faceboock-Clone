import Styled from 'styled-components';

export const ContaModalSt = Styled.div`
  width: 350px;
  height: 500px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: .5rem;
  position: fixed;
  top: 3.5rem;
  right: 1rem;
  box-shadow: 0 0 5px 1px rgba(0,0,0,0.2);
  background: ${Props => Props.theme.colors.background};
  z-index: 110;
  .btn-flex {
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 5px;
    font-size: 1rem;
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
  .icon {
    position: absolute;
    right: 1rem;
    font-size: 1.2rem;
  }
  .btn-viw {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      border-radius: 5px;
      padding: 1rem;
      margin-top: .2rem;
      :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }

`
export const ContasBoxSt = Styled.div`
  width: 330px;
  height: 110px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  padding: .1rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 5px 1px rgba(0,0,0,0.2);
  .img {
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
  h3 {
    margin-left: 1rem;
  }
  .hr {
    width: 90%;
    
    border: .5px solid rgba(0,0,0,0.1);
  }
`
export const BoxFlexSt = Styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: .5px solid rgba(0,0,0,0.3);
  
`
export const DivIconSt = Styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin-right: .5rem;
`
export const ContaModaFooterlSt = Styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
