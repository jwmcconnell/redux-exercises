import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

const initialState = {
  comments: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return { ...state, comments: { 
        ...state.comments, 
        [action.payload.postId]: [
          ...(state.comments[action.payload.postId] || []), 
          action.payload.body 
        ]
      } };
    case DELETE_COMMENT: 
      return { ...state, comments: {
        ...state.comments,
        [action.payload.postId]: [
          ...state.comments[action.payload.postId].slice(0, action.payload.commentId),
          ...state.comments[action.payload.postId].slice(action.payload.commentId + 1)
        ]
      } };
    default: 
      return state;
  }
}
