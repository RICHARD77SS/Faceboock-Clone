import Styled from 'styled-components';

export const ConfigBgSt = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  background: ${Props => Props.theme.colors.background};
  z-index: 999;
`

export const ConfigSt = Styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
export const ConfigTopSt = Styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ConfigCenterSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ConfigFlexSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const IconDivSt = Styled.div`
  width: 90px;
  height: 90px;
  border-radius: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Props => Props.theme.colors.primary};
`
export const BlockDivSt = Styled.div`
  width: auto;
  height: 90px;
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const ConfigBottomSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`