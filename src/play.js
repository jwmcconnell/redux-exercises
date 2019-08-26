import { createStore } from 'redux';
import { addDrink, removeDrink } from './actions/lunchActions';
import reducer from './reducers/lunchReducer';


const store = createStore(reducer);
const unsubscribe = store.subscribe(() => {
  // will print every time state changes
  console.log(store.getState());
});

store.dispatch(addDrink('water'));
store.dispatch(addDrink('coffee'));

store.dispatch(removeDrink('water'));

store.dispatch({
  type: 'ADD_CHIPS'
});

store.dispatch({
  type: 'REMOVE_CHIPS'
});

store.dispatch({
  type: 'ADD_SANDWICH'
});

store.dispatch({
  type: 'REMOVE_SANDWICH'
});

unsubscribe();
