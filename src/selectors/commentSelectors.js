export const getComments = (state, postId) => state.comments.comments[postId] || [];
