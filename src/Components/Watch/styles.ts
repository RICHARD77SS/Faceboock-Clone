import Styled from 'styled-components';

export const WatchSt = Styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 3rem;
  display: flex;
  align-items: start;
  justify-content: flex-start;
  background: ${Props => Props.theme.colors.secundary};
  h1 {
    font-size: 1.5rem;
    color: #000;
    margin-right: 7rem;
    margin-left: .5rem; 
  }
  .btn-config {
    width: 35px;
    height: 35px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    margin-left: 9rem;
    background: ${Props => Props.theme.colors.hover};
  }
`

export const WatchLeftSt = Styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: .5rem;
  background: ${Props => Props.theme.colors.background};
  input {
    width: 95%;
    height: 38px;
    border-radius: 20px;
    background: ${Props => Props.theme.colors.secundary};
    border: none;
    margin-bottom: 1rem;
  }
  button{
    width: 390px;
    height: 52px;
    border-radius: 10px;
    padding: .5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.5rem;
    :hover {
      background: ${Props => Props.theme.colors.secundary};
    }
    p{
    margin-left: 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: ${Props => Props.theme.colors.text};
  }
  }
  .navlink {
    text-decoration: none;
  }
  .navlink.active .link-1 {
    background: ${Props => Props.theme.colors.primary};
  }
  .navlink.active button{
    background: ${Props => Props.theme.colors.secundary}
  }
  .navlink.active .link-2 {
    background: #F0284A;
  }
  .navlink.active .link-3 {
    background: #2ABBA7;
  }
  .navlink.active .link-4 {
    background: #F7B928;
  }
  
`

export const Flex1St = Styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const DivIconSt = Styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Props => Props.theme.colors.hover}; 
  .icon {
    color: #fff;
    fill: #fff;
  }
`

export const WatchRightSt = Styled.div`
  width: 70%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

`