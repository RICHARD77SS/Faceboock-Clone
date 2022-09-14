import Styled from 'styled-components';

export const TabButtons = Styled.ul`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2rem;
  overflow-x: scroll;
  border-bottom: .5px solid rgba(0,0,0,0.2);
  li {
    list-style-type: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .btn {
    position: absolute;
    background: #fff;
    box-shadow: 0 0 4px rgba(0,0,0,0.3);
  }
  .btn.next {
    right: 0;
  }
  .btn.prev {
    right: 320px;
  }
  button {
    max-height: 40px;
    padding: .5rem;
    border-radius: 20px;
    display: flex;
    background: #ccc;
    font-size: 1rem;
    margin: .2rem;
  }
  .tab-button.active {
    background: #E7F3FF;
    color: ${Props => Props.theme.colors.primary};
  }
`
export const TabContainer = Styled.div`
  width: 100%;
  height: auto;
`