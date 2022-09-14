import Styled from 'styled-components';


export const OverView = Styled.div`
  width: 100%;
  height: 68%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-color: #fff;
  scrollbar-width: thin;
  padding-bottom: 6rem;
  background: ${Props => Props.theme.colors.secundary};
`
export const Header = Styled.header`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background: ${Props => Props.theme.colors.background};
  h3 {
    color:#000;
  }
  p {
    font-size: .9rem;
  }
`
export const Interactionsb = Styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: .5rem 0;
  border-bottom: .5px solid rgba(0,0,0,0.2);
  p {
    margin: 0 .2rem;
    font-size: 1rem;
  }
  img {
    width: 20px;
    height: 20px;
    border-radius: 20px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem .2rem;
    font-size: 1.2rem;
    border-radius: 5px;
    :hover {
      background: #ccc;
    }
  }
`
export const GroupInfos = Styled.div`
  width: 95%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0,0,0,0.3);
  margin-top: 1rem;
  background: ${Props => Props.theme.colors.background};
  img {
    width: 100%;
    height: 150px;
    border-radius: 10px 10px 0 0;
  }
  h3 {
    margin: .5rem 1rem;
  }
  p {
    margin: 0 1rem;
  }
  button {
    background: #ccc;
    width: 95%;
    height: 40px;
    border-radius: 5px;
    margin: .5rem;

  }
`
export const Subscriber = Styled.div`
  width: 95%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0,0,0,0.3);
  margin-top: 1rem;
  background: ${Props => Props.theme.colors.background};
  img {
    width: 100%;
    height: 150px;
    border-radius: 10px 10px 0 0;
  }
  h3 {
    margin: .5rem 1rem;
  }
  p {
    margin: 0 1rem;
  }
  button {
    background: #ccc;
    width: 95%;
    height: 40px;
    border-radius: 5px;
    margin: .5rem;

  }
`