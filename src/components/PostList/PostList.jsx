import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList = ({ posts, comments }) => {
  const postsWithComments = posts.map(post => ({
    ...post,
    comments: comments.filter(c => c.postId === post.id),
  }));

  return (
    <div className="PostList">
      {postsWithComments.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
