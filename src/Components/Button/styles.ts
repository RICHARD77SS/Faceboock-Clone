import Styled from 'styled-components';

interface Props {
  color?: string;
  background?: string;

  width?: string;
  height?: string;

  margin?: string;
  padding?: string;

  border?: string;
  radius?: string;
}
export const ButtonSt = Styled.button<Props>`
  width: ${Props => Props.width};
  height: ${Props => Props.height};

  padding: ${Props => Props.padding};
  margin: ${Props => Props.color};

  color: ${Props => Props.color};
  background: ${Props => Props.background};

  border: ${Props => Props.border};
  border-radius: ${Props => Props.radius};
  `