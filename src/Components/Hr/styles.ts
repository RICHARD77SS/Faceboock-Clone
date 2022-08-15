import Styled from 'styled-components';
interface PropsHr {
  width?: string;
}
export const HrSt = Styled.span<PropsHr>`
  width: ${Props => Props.width};
  height:.5px;
  margin-right: 4rem;
  background: ${Props => Props.theme.colors.text};
  opacity: 0.3;
`


