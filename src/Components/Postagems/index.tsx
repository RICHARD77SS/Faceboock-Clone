import React from 'react';

import { PostagemsSt } from './styles';
import PostsInfos from './PostsInfos.json';

import Post from '../Post';

const Postagems = () => {
  return (
    <PostagemsSt>
      {PostsInfos.map((Info) => {
        return (
          <>
            <Post perfilImage={Info.perfilImg}
              perfilImageAlt={Info.perfilImgAlt}
              perfilName={Info.perfilName}
              postData={Info.postData}
              postTime={Info.postTime}
              postImage={Info.postImg}
              postImageAlt={Info.postImgAlt}
              postLikes={Info.postLikes}
              postComments={Info.postComments}
              postShares={Info.postShares}
            />
          </>
        )
      })}
    </PostagemsSt>
  )
}

export default Postagems