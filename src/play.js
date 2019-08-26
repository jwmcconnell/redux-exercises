import { createStore } from 'redux';
import { createPost, deletePost } from './actions/postActions';
import { createComment, deleteComment } from './actions/commentActions';
import reducer from './reducers';


const store = createStore(reducer);
const unsubscribe = store.subscribe(() => {
  // will print every time state changes
  console.log(JSON.stringify(store.getState()));
});

store.dispatch(createPost({ title: 'test title', body:'test body' }));
store.dispatch(createPost({ title: 'title', body:'body' }));

store.dispatch(createComment({ postId: 0, body: 'comment body' }));
store.dispatch(createComment({ postId: 0, body: 'other comment body' }));
store.dispatch(createComment({ postId: 1, body: 'other post comment body' }));

store.dispatch(deleteComment({ postId: 0, commentId: 1 }));
store.dispatch(deleteComment({ postId: 0, commentId: 0 }));
store.dispatch(deleteComment({ postId: 1, commentId: 0 }));

store.dispatch(deletePost(1));

unsubscribe();
