export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = ({ postId, body }) => ({
  type: CREATE_COMMENT,
  payload: { postId, body }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = ({ postId, commentId }) => ({
  type: DELETE_COMMENT,
  payload: { postId, commentId }
});
