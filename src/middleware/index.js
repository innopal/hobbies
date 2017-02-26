import { customerReducer as customer } from './customer/customer-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  customer,
});

export default rootReducer;
