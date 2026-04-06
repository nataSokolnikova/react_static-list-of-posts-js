import './App.scss';

// import postsFromServer from './api/posts.json';
// import commentsFromServer from './api/comments.json';
// import usersFromServer from './api/users.json';

import { PostList } from './components/PostList/PostList';

export const App = () => {
  const posts = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Post title ${i + 1}`,
    body: `This is the body of post ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    user: {
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
    },
  }));

  const comments = posts.flatMap(post => [
    {
      id: post.id * 2 - 1,
      postId: post.id,
      name: `Commenter A for post ${post.id}`,
      email: `commenterA${post.id}@example.com`,
      body: `This is comment A for post ${post.id}`,
    },
    {
      id: post.id * 2,
      postId: post.id,
      name: `Commenter B for post ${post.id}`,
      email: `commenterB${post.id}@example.com`,
      body: `This is comment B for post ${post.id}`,
    },
  ]);

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} comments={comments} />
    </section>
  );
};
