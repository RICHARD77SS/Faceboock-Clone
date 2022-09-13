import Styled from 'styled-components';

export const MoreLivesSt = Styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  margin-top: 6.5rem;
  margin-left: auto;
  margin-right: auto;
`
export const Block1St = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  border-radius: 5px;
  padding: .5rem;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  background: ${Props => Props.theme.colors.background};
  h3 {
    margin-top: 1rem;
    margin-left: 1rem;
  }
  .btn-more {
    width: 100%;
    height: 35px;
    border-radius: 5px;
    background: #E7F3FF;
    color: ${Props => Props.theme.colors.primary};
  }
`


export const LiveListSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  gap: .5rem;
  padding: .5rem;
`