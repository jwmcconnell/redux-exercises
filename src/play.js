import { createStore } from 'redux';
import { createPost, deletePost } from './actions/postActions';
import reducer from './reducers/postReducer';


const store = createStore(reducer);
const unsubscribe = store.subscribe(() => {
  // will print every time state changes
  console.log(store.getState());
});

store.dispatch(createPost({ title: 'test title', body:'test body' }));
store.dispatch(createPost({ title: 'title', body:'body' }));

store.dispatch(deletePost(1));

unsubscribe();
