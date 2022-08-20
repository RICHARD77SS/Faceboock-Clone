import Styled from 'styled-components';

export const PostSt = Styled.div`
  width: 100%;
  height: 500px;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const PostHeaderSt = Styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
`
export const ImageSt = Styled.div`
  width: 500px;
  height: 500px;
`
export const PostFooterSt = Styled(PostHeaderSt)`
  flex-direction: column;
`