import Styled from 'styled-components';

export const MainRightSt = Styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .hr {
    width: 85%;
    margin-top: 1rem;
    height:.5px;
    background: ${Props => Props.theme.colors.text};
    opacity: 0.3;
  }
`
export const GruposSt = Styled.div`
  width: 250px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.background};
`
export const GrupoDescSt = Styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  img{
    width: 25px;
    height: 25px;
  }
  .close-button {
    border: none;
    border-radius: 20px;
    width: 30px; 
    height: 30px; 
    background: ${Props => Props.theme.colors.background};
    :hover {
      background: ${Props => Props.theme.colors.secundary};
    }
  }
  .gp-desc {
    font-size: .9rem;
  }
`
export const GrupoImgSt = Styled.div`
  width: 210px;
  height: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  background: ${Props => Props.theme.colors.secundary};
`
export const GrupoTitleSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  .gp-name {
    font-weight: 700;
    font-size: .9rem;
  }
  .gp-info {
    font-size: .8rem;
  }
  .gp-button {
    width: 100%;
    height: 40px;
    border: none;
    font-weight: 700;
    font-size: .9rem;
    border-radius: 10px;
    margin: 1rem 0;
    color: ${Props => Props.theme.colors.text};
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
`
export const PatrocinioSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
