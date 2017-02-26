import * as actions from './creators';

describe('Customer Actions', () => {
  it('should create an action to request an Add', () => {
    const expectedAction = {
      type: 'ADD_CUSTOMER_REQUESTED',
    };
    expect(actions.customerAddRequested()).toEqual(expectedAction);
  });

  it('should create an action when a customer is added successfully', () => {
    const customer = {
        firstName: 'John',
        lastName: 'Smith',
    };
    const expectedAction = {
      type: 'ADD_CUSTOMER_SUCCEEDED',
      customer,
    };
    expect(actions.customerAdded(customer)).toEqual(expectedAction);
  });
});