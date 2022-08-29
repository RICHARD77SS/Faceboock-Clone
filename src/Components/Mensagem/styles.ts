import Styled from 'styled-components';

export const MensagemSt = Styled.div`
  width: 325px;
  height: 430px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 5px;
  background: ${Props => Props.theme.colors.background};
  bottom: 0;
  right: 4rem;
  z-index: 100;
  box-shadow: 0 0 4px .5px rgba(0,0,0,0.1);
  .btn-icon {
    width: 25px;
    height: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    margin: .2rem;
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
  .svg {
    fill: #aaa;
  }
  .btn-ico {
    width: 25px;
    height: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
`
export const MensagemTopSt = Styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 2px .5px rgba(0,0,0,0.1);
  padding: .5rem;
  h4 {
    font-size: .9rem;
    font-weight: 600;
    color: ${Props => Props.theme.colors.text};
    margin-right: .5rem;
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin-right: .5rem;
  }
  .btn-user {
    width: 160px;
    height: 45px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
`
export const MensagemCenterSt = Styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 25px;
    height: 25px;
    border-radius: 25px;
    margin-right: 1rem;
  }
`
export const MensagemBottomSt = Styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: .5rem;
  padding-bottom: 1.5rem;
  .input {
    width: 120px;
    height: 30px;
    border-radius: 20px;
    border: none;
    background: ${Props => Props.theme.colors.secundary};
    :focus {
      border: none;
      outline: none;
    }
  }
  .btn-icon.inputs {
    width: 50px;
    height: 30px;
    background: ${Props => Props.theme.colors.secundary};
    margin-left: -1rem;
    border-radius: 0 20px 20px 0;
  }
`
