import * as Actions from './types';

export const customerAddRequested = () => ({
  type: Actions.ADD_CUSTOMER_REQUESTED,
});

export const customerAdded = (customer) => ({
  type: Actions.ADD_CUSTOMER_SUCCEEDED,
  customer,
});

export const failedToAddCustomer = (error) => ({
  type: Actions.ADD_CUSTOMER_FAILED,
  error
});

export const requestAddHobby = (hobby) => ({
  type: Actions.ADD_HOBBY_REQUESTED,
  index: 0, // Always adds to top.
  hobby
});

export const requestAddCustomer = (customer) => dispatch => {
  dispatch(customerAddRequested());
  setTimeout(() => dispatch(customerAdded(customer)), 2000);
}
