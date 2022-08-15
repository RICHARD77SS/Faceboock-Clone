import React from 'react';

import { StorySt, UserImageSt, UsernameSt } from './styles';


const FriendStory = () => {
  
  return (
    <StorySt>
      <img src="https://img.freepik.com/fotos-gratis/retrato-de-jovem-bonito-alegre-menina-sorridente_176420-9389.jpg?w=740&t=st=1660568072~exp=1660568672~hmac=ed98e0134dd3eaea1eabc3edfd16b23ec4a33fd36099b1ac6e3f1881f9809bc8" alt="Story-background" />
      <UserImageSt>
        <img src="https://img.freepik.com/vetores-gratis/linda-garota-com-sinal-de-paz-dos-desenhos-animados-do-vetor-icone-ilustracao-pessoas-moda-icone-conceito-isolado-premium-vector-estilo-flat-cartoon_138676-3977.jpg?w=740&t=st=1660567896~exp=1660568496~hmac=7cc06a31d140e5e7ae87b7abba4d7a83215c4b0a86594ccb86a58e663ba0949c" alt="" />
      </UserImageSt>
      <UsernameSt>
        <p>Username</p>
      </UsernameSt>
    </StorySt>
      
  )
}

export default FriendStory;