import * as Actions from './actions/types';

const initialState = {
  firstName: '',
  lastName: '',
  hobbies: [],
  isAdding: false,
  isAdded: false,
  error: null,
};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_CUSTOMER_REQUESTED:
      return {...state, isAdding: true, isAdded: false};
    case Actions.ADD_HOBBY_REQUESTED:
      return {...state, hobbies: [
        ...state.hobbies.slice(0, action.index),
        action.hobby,
        ...state.hobbies.slice(action.index)
      ]};
    case Actions.ADD_CUSTOMER_SUCCEEDED:
      return {...state, ...action.customer, isAdding: false, isAdded: true };
    case Actions.ADD_CUSTOMER_FAILED:
      return {...state, ...action.customer};
    default:
      return state;
  }
};
