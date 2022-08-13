import Styled from 'styled-components';

export const StorysSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  background: ${Props => Props.theme.colors.background};
`
export const StorySt = Styled.div`
  width: 120px;
  height: 200px;
  margin: .5rem;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.1);
  .bt-add {
    background: ${Props => Props.theme.colors.background};
    border: none;
    padding: 1rem;
    border-radius: 0 0 10px 10px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
  }
  .div-ico {
    position: absolute;
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
    transform: translatey(-2.5rem);
  }
  :hover {
    filter: brightness(90%);
  }
`

