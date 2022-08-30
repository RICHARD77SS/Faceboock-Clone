import Styled from 'styled-components';

export const StorysSt = Styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: scroll;
  overflow-y: hidden;
  background: ${Props => Props.theme.colors.background};
`