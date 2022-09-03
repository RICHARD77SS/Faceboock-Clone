import Styled from 'styled-components';

export const NewVideosSt = Styled.div`
  width: 80%;
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
`
export const FlexVideosSt = Styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .video-link {
    width: 48%;
    height: 70px;
    border-radius: 5px;
    padding: .5rem;
    display: flex;
    align-items: center;
    justify-content: Flex-start;
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
    position: absolute;
    margin-left: 30%;
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