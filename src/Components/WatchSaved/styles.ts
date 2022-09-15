import Styled from 'styled-components';

export const WatchSavedSt = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .topnav {
    transform: translatey(.5rem);
    box-shadow: none;
    display: none;
    @media (max-width: 910px){
    display: flex;
    }
  }
  
`

export const SavedTopSt = Styled.div`
  width: 100%;
  min-height: 110px;
  padding-left: 3rem;
  background: ${Props => Props.theme.colors.background};
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  h3 {
    color: #000;
    margin-top: .5rem;
    font-size: 1.5rem;
  }
`

export const SavedCenterSt = Styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 2rem;
`
export const SavedContentSt = Styled.div`
  width: 94%;
  height: 190px;
  padding: .5rem;
  border-radius: 5px;
  margin: .5rem;
  background: ${Props => Props.theme.colors.background};
  display: flex;
  align-items: start;
`

export const VideoSt = Styled.div`
  width: 300px;
  height: 160px;
  border-radius: 5px;
  margin-left: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000; 
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  h5 {
    position: absolute;
    color: #fff;
    transform: translate(5rem, 4rem); 
  }
`
export const BlockSt = Styled.div`
  width: auto;
  height: auto;
  padding: .5rem;
  display: flex;
  align-items: start;
  text-align: left;
  flex-direction: column;
  h4 {
    color: #000;
    :nth-child(2) {
        margin-top: .5rem;

    }
  }
  p {
    font-size: .8rem;
  }
  .pl {
    margin: 0;
  }
`
export const FlexSt = Styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: .5rem;
  img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
  a {
    font-size: .8rem;
    text-decoration: none;
    margin-left: .5rem;
    color: ${Props => Props.theme.colors.text};
    :hover {
      text-decoration: underline;
    }
  }
  p {
    margin-left: .5rem;
  }
  :last-child{
    flex-wrap: wrap;
    
  }
`
export const MiniIconDiv = Styled.div`
  width: 18px;
  height: 18px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .8rem;
  color: #fff;
  background: ${Props => Props.theme.colors.primary};
  :nth-child(2) {
    background: #E92347;
  }
`
export const ConfigConteiner = Styled.div`
  width: 30px;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  .btn-option {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    font-size: 1.5rem;
    :hover {
      background: ${Props => Props.theme.colors.secundary};
    }
  }
`