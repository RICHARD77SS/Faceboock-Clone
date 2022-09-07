import Styled from 'styled-components';

export const WatchTopNavSt = Styled.div`
  width: 100%;
  height: 57px;
  padding: .5rem;
  display: none;
  align-items: center;
  background: #fff;
  transform: translatey(-.5rem);
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.2);
  h3 {
    font-size: 1.5rem;
    color: #000;
    margin: 0 1rem;
  }
  .navlink {
    width: auto;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding: 0 .5rem;
    text-decoration: none;
    color: #000;
    font-size: .9rem;
    margin: 0 5px;
    background: ${Props => Props.theme.colors.secundary};
    filter: brightness(.9);
    :hover {
      background: ${Props => Props.theme.colors.hover};
    }
  }
  .navlink.active {
    color: ${Props => Props.theme.colors.primary};
  }
  .search {
    width: 37px;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    font-size: 1rem;
    margin: 0 5px;
    background: ${Props => Props.theme.colors.secundary};
    filter: brightness(.9);
    position: absolute;
    right: 0;
  }
  .more {
    width: 37px;
    height: 37px;
    display: none;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    font-size: 1rem;
    margin: 0 5px;
    background: ${Props => Props.theme.colors.secundary};
    filter: brightness(.9);
  }
  @media (max-width: 910px){
    display: flex;
  }
  @media (max-width: 732px){
    .more {
      display: flex;
    }
    .navlink.follow {
      display: none;
    }
  }
  @media (max-width: 690px) {
    .navlink.save {
      display: none;
    }
  }
  @media (max-width: 580px) {
    .navlink.explore {
      display: none;
    }
  }
`

export const MoreWrapper = Styled.div`
  width: 200px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  position: absolute;
  top: 3.5rem;
  right: 2rem;
  border-radius: 5px;
  background: ${Props => Props.theme.colors.background};
  .programs {
    display: none;
  }
  .follow {
      display: none;
    }
  .save {
    display: none;
  }
  .explore {
      display: none;
    }
  @media (max-width: 732px){
    .more {
      display: flex;
    }
    .follow {
      display: block;
      font-size: 1rem;
      text-decoration: none;
      color: #000;
      padding: .5rem;
      :hover {
        background: ${Props => Props.theme.colors.secundary};
      }
    }
  }
  @media (max-width: 690px) {
    .save {
      display: block;
      font-size: 1rem;
      text-decoration: none;
      color: #000;
      padding: .5rem;
      :hover {
      background: ${Props => Props.theme.colors.secundary};
      }
    }
  }
  @media (max-width: 580px) {
    .explore {
      display: block;
      font-size: 1rem;
      text-decoration: none;
      color: #000;
      padding: .5rem;
      :hover {
      background: ${Props => Props.theme.colors.secundary};
      }
    }
  }
`