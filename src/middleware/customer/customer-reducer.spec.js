import * as reducer from './customer-reducer';
import * as actions from './actions/types';

describe('Customer Reducers', () => {
  it('should transition to Adding state after requesting an Add Customer', () => {
    const stateAfter = {
      firstName: '',
      lastName: '',
      hobbies: [],
      isAdding: true,
      isAdded: false,
      error: null,
    };
    expect(
        reducer.customerReducer(reducer.initialState, {
          type: actions.ADD_CUSTOMER_REQUESTED,
        })
    ).toEqual(stateAfter);
  });
  
});