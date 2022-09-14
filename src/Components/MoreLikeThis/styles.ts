import Styled from 'styled-components';

export const Container = Styled.div`
  width: auto;
  height: 100vh;
  
  .content {
    display: none;
  }
  .content.active {
    display: flex;
  }
  div::-webkit-scrollbar {
    width: 12px;
  }

  div::-webkit-scrollbar-track {
    background: #fff;
  }

  div::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 20px;
    border: 1px solid rgba(241, 241, 241, 0.72);
  }

`
export const MoreLikeThisSt = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const VideoItem = Styled.div`
`
export const Image = Styled.div`
`
export const Duration = Styled.div`
`
export const Infos = Styled.div`
`