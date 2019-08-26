import { createStore } from 'redux';
import { ADD_DRINK, addDrink, REMOVE_DRINK, removeDrink } from './actions/lunchActions';

const initialState = {
  drinks: [],
  chips: 0,
  sandwiches: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drinks: [...state.drinks, action.payload] };
    case REMOVE_DRINK: 
      return { ...state, drinks: state.drinks.filter(d => d !== action.payload) };
    case 'ADD_CHIPS':
      return { ...state, chips: state.chips + 1 };
    case 'REMOVE_CHIPS': 
      return { ...state, chips: state.chips - 1 };
    case 'ADD_SANDWICH':
      return { ...state, sandwiches: state.sandwiches + 1 };
    case 'REMOVE_SANDWICH': 
      return { ...state, sandwiches: state.sandwiches - 1 };
    default: 
      return state;
  }
}

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
