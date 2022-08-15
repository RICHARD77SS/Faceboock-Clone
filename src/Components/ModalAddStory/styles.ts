import Styled from 'styled-components';

export const ModalSt = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  background: #ff0000;
  padding: 1rem;
  z-index: 999;
`
export const ModalLeftSt = Styled.div`
  width: 25%;
  height: 100%;
  background: #0000ff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`
export const ModalRightSt = Styled.div`
  width: 75%;
  height: 100%;
  background: #00ff00;
  padding: 1rem;
`
