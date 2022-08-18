import Styled from 'styled-components';

export const MakePubSt = Styled.div`
  width: 500px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  
  background: ${Props => Props.theme.colors.background};
  border-radius: 10px;
  .hr {
    margin-left: 4rem;
  }
  z-index: 100;
`

export const Flex1St = Styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-bottom: .5px solid rgba(0,0,0,0.2);
  img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    margin: 0 1rem;
  }
  .input {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    border: none;
    background: ${Props => Props.theme.colors.secundary};
  }
  
`
export const Flex2St = Styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: .5rem;
  .btn {
    width: 33%;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
    p{
      font-size: .8rem;
    }
  }
  .btn.icoa{
    color: #F3425F;
  }
  .btn.icob{
    color: #45BD62;
  }
  .btn.icoc{
    color: #F7B928;
  }
  p{
    margin: .5rem;
    color: #606770;
  }
`

export const ModalConteinerSt = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(200,200,200,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ModalPostSt = Styled.div`
  width: 500px;
  height: 420px;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .btn-publ {
    width: 95%;
    height: 60px;
    margin: 1rem; 
    border-radius: 5px;
    background: #ccc;
    :hover {
    background: ${Props => Props.theme.colors.hover};
  }
  }
  .input-text {
      width: 100%;
      height: 250px;
      padding: 1rem;
      font-size: 1.5rem;
      border: none;
      :focus{
        outline: none !important;
        border: none;
      }
  }
`
export const ModlSt = Styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-around;
  img{
    margin-top: 1rem;
  }
  .btn {
    background: 
  }
  .btn-close{
    width: 40px;
    height: 40px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5rem;
    font-size: 1.3rem;
    background: ${Props => Props.theme.colors.secundary};
    :hover {
    filter: brightness(.7);
  }
  }
  h3{
    margin-left: 10.5rem;
  }
  .btn-col{
    margin-right: 24.5rem;
    margin-bottom: 2rem;
  :hover {
    filter: brightness(.7);
  }
}
  .btn-emo {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    border-radius: 40px;
    color: ${Props => Props.theme.colors.text};
    margin-right: 1.5rem;
    margin-bottom: 1rem;
  :hover {
    background: ${Props =>Props.theme.colors.hover};
  }
}

`
export const ModlBlockSt = Styled.div`
  width: 500px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-top: 1rem;
  .btn-mod {
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ccc;
    padding: .2rem;
    border-radius: 5px;
  }
`
export const AdicionarSt = Styled.div`
  width: 480px;
  height: 100px;
  display:flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.4);
  p{
    margin-right: 2rem;
    font-weight: 500;
  }
  .btn{
    width: 40px;
    height: 40px;
    display: flex;
    font-size: 1.5rem;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
  .btn.a{
    color: #41B35D;
  }
  .btn.b{
    color: #1877F2;
  }
  .btn.c{
    color: #F7B928;
  }
  .btn.d{
    color: #F5533D;
  }
  .btn.e{
    color: #39AFD5;
  }
  .btn.f{
    color: #606770;
  }
  `