import { combineReducers } from 'redux';

import { transactions, transactionsHasErrored, transactionsIsLoading } from './transactions';

export default combineReducers({
  transactions,
  transactionsHasErrored,
  transactionsIsLoading
});