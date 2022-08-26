import Styled from 'styled-components';


export const NotificationSt = Styled.div`
  width: 350px;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0 0 4px 1px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  position: absolute;
  padding: .5rem;
  top: 3.5rem;
  right: 1.5rem;
  z-index: 999;
  background: ${Props => Props.theme.colors.background};
  .bc {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`
export const BlockSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  font-size: .8rem;
  margin-left: 1rem;
  span {
    color: ${Props => Props.theme.colors.primary};
  }
  p{
    font-size: .9rem;
  }
`
export const FlexSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: start;
  margin: .2rem;
  padding: 0 .5rem; 
  h2{
    color: #000;
  }
  .more {
    width: 20px;
    height: 20px;
    border-radius: 20px;
    position: absolute;
    right: 1rem;
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
  .view {
    width: 70px;
    height: 30px;
    border-radius: 5px;
    position: absolute;
    font-size: .9rem;
    right: .5rem;
    color: ${Props => Props.theme.colors.primary};
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
  .tudo {
    width: 60px;
    height: 35px;
    margin-right: .5rem;
    margin-bottom: .5rem;
    font-size: .9rem;
    font-weight: 700;
    border-radius: 20px;
    background: #ddeeff;
    color: ${Props => Props.theme.colors.primary};
    :hover {
      filter: brightness(.9);
    }
  }
  .notl {
    width: 80px;
    height: 35px;
    border-radius: 20px;
    margin-bottom: .5rem;
    font-size: .9rem;
    font-weight: 700;
    color: ${Props => Props.theme.colors.text};
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
`
export const Notificationu = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding: .5rem;
  padding-bottom: 1rem;
  border-radius: 10px;
  justify-content: start;
  :hover {
    background: ${Props => Props.theme.colors.hover};
  }
  :hover .option{
    opacity: 1;
  }
  .option:focus {
    opacity: 1;
  }
  .option {
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 3rem;
    margin-top: .2rem;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background: ${Props => Props.theme.colors.secundary};
    box-shadow: 0 0 4px 1px rgba(0,0,0,0.2);
    :hover {
      filter: brightness(.9);
    }
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 60px;
  }
  .tbp {
    color: ${Props => Props.theme.colors.primary};
    fill: ${Props => Props.theme.colors.primary};
    margin-top: .2rem;
  }
`
export const BollSt = Styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: #0FA7Fa;
  color: #fff;
  font-size: .8rem;
  left: 3.2rem;
  top: 10.2rem;
`
export const OptionsNotificationSt = Styled.div`
  width: 250px;
  height: 180px;
  border-radius: 5px;
  padding: .3rem;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  background: ${Props => Props.theme.colors.background};
  position: absolute;
  right: 1rem;
  top: 16rem;
  box-shadow: 0 0 4px 1px rgba(0,0,0,0.2);
  .btn-opt {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    font-size: .9rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
    .ico {
      margin: .5rem;
      font-size: 1.2rem;
    }
  }
`