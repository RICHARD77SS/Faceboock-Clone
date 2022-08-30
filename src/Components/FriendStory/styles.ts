import Styled from 'styled-components';

interface Props{
  storyImage?: string;
}

export const StorySt = Styled.div<Props>`
  width: 120px;
  height: 200px;
  margin: .5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.1);
  background: url(${Props => Props.storyImage}) center no-repeat;
  background-size: cover;
  :hover {
    filter: brightness(90%);
  }
`
export const UserImageSt = Styled.div`
  position: relative;
  width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -65px;
  background: #216FDB;
  border-radius: 30px;
  border: 4px solid ${Props => Props.theme.colors.primary};
  font-size: 1.5rem;
  color: #fff;
  transform: translatey(.5rem);
  img {
    width: 100%;
    height: 100%;
    border-radius: 40px;
  }
`
export const UsernameSt = Styled.div`
  position: relative;
  margin-top: 130px;
  text-shadow: 0 0 4px #000;
  width: auto;
  height: auto;
  color: #fff;
  border-radius: 10px;
`
