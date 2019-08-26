export const getAllPosts = state => state.posts.posts.map((post, id) => ({
  ...post,
  id
}));

export const getPost = (state, id) => getAllPosts(state)[id];
