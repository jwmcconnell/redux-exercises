export const ADD_DRINK = 'ADD_DRINK';
export const addDrink = (drink) => ({
  type: ADD_DRINK,
  payload: drink
});

export const REMOVE_DRINK = 'REMOVE_DRINK';
export const removeDrink = (drink) => ({
  type: REMOVE_DRINK,
  payload: drink
});
