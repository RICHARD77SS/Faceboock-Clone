import Styled from 'styled-components';

export const NewVideosSt = Styled.div`
  width: 100%;
  min-width: 380px;
  min-height: 135px;
  text-align: left;
  background: ${Props => Props.theme.colors.background};
  border-radius: 5px;
  padding: .5rem;
  margin-top: 1rem;
  h3 {
    font-size: 1.3rem;
    color: #000;
  }
  @media (max-width: 910px){
    width: 90%;
  }
  .btn {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: ${Props => Props.theme.colors.secundary};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.4);
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
  .btn.next{
    right: 4%;
  }
  .btn.prev{
    transform: translatex(-2rem);
    z-index: 9;
  }
`
export const FlexVideosSt = Styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x:  scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
  display: none;
}

::-webkit-scrollbar-track {
  display: none;
}
::-webkit-scrollbar-thumb {
  display: none;
}
  .video-link {
    width: 50%;
    min-width: 380px;
    min-height: 75px;
    border-radius: 5px;
    padding: .5rem;
    display: flex;
    align-items: center;
    justify-content: Flex-start;
    margin-right: 1rem;
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
    img {
      width: 60px;
      height: 60px;
      border-radius: 60px;
    }
  }
  .video-link:hover .btn-option {
    display: flex;
  }
  .btn-option {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    display: none;
    align-items:center;
    justify-content: center;
    position: relative;
    transform: translatex(40%);
    :hover {
      background: #eee;
    }
    :focus {
      display: flex;
      background: #eee;
    }
  }
`
export const BlockSt = Styled.div`
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  padding-left: 1rem;
  p {
    font-size: 1rem; 
    margin-bottom: .5rem;
  }
  span {
    color: ${Props => Props.theme.colors.primary};
  }
  .bullet {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${Props => Props.theme.colors.primary};
    margin-right: .5rem; 
  }
  .flex {
    display: flex;
    align-items: center;
  }
`