import Styled from 'styled-components';

export const StorySt = Styled.div`
  width: 120px;
  height: 200px;
  margin: .5rem;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.1);
  background: url('https://img.freepik.com/fotos-gratis/mulher-alegre-feliz-se-sentindo-animada-por-vencer-gritando-e-comemorando-a-vitoria-com-os-bracos-erguidos-torcendo-com-entusiasmo-pelo-sucesso-e-triunfo-desfrutando-da-vitoria-no-estudio_482257-46602.jpg?w=740&t=st=1660427508~exp=1660428108~hmac=c1be4e3cab978e87868475f0461bdebe2e071fbd5bacb733f403b7d5f328edd4') center no-repeat;
  background-size: cover;
  .bt-add {
    background: ${Props => Props.theme.colors.background};
    border: none;
    padding: 1rem;
    border-radius: 0 0 10px 10px;
    height: 50px;
  }
  .div-ico {
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 25px;
    background: #216FDB;
    border-radius: 30px;
    border: 4px solid #fff;
    font-size: 1.5rem;
    color: #fff;
    transform: translatey(-2.3rem);
    p{
      color: #000;
      z-index: 10;
    }
  }
  :hover {
    filter: brightness(90%);
  }
`
