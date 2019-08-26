import { ADD_DRINK, REMOVE_DRINK } from '../actions/lunchActions';

const initialState = {
  drinks: [],
  chips: 0,
  sandwiches: 0
};

export default function reducer(state = initialState, action) {
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
