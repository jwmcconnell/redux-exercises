import { createStore } from 'redux';

const initialState = {
  drinks: 0,
  chips: 0,
  sandwiches: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drinks: state.drinks + 1 };
    case 'REMOVE_DRINK': 
      return { ...state, drinks: state.drinks - 1 };
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

store.dispatch({
  type: 'ADD_DRINK'
});

store.dispatch({
  type: 'REMOVE_DRINK'
});

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
