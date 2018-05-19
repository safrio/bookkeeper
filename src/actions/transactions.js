import config from '../config/config'
import moment from 'moment'

// Fetching

export function transactionsHasErrored(bool) {
  return {
    type: 'TRANSACTIONS_HAS_ERRORED',
    transactionsHasErrored: bool
  };
}

export function transactionsIsLoading(bool) {
  return {
    type: 'TRANSACTIONS_IS_LOADING',
    transactionsIsLoading: bool
  };
}

export function transactionsFetchDataSuccess(transactions) {
  return {
    type: 'TRANSACTIONS_FETCH_DATA_SUCCESS',
    transactions
  };
}

// Removing

export function transactionIsRemoving(bool) {
  return {
    type: 'TRANSACTION_IS_REMOVING',
    transactionIsRemoving: bool
  };
}

export function transactionRemoveSuccess(id) {
  return {
    type: 'TRANSACTION_REMOVE_SUCCESS',
    id
  };
}

export function transactionRemoveErrored(bool) {
  return {
    type: 'TRANSACTION_REMOVE_ERROR',
    transactionRemoveErrored: bool
  };
}

// Removing

export function transactionIsAdding(bool) {
  return {
    type: 'TRANSACTION_IS_ADDING',
    transactionIsAdding: bool
  };
}

export function transactionAddingSuccess(bool) {
  return {
    type: 'TRANSACTION_ADDING_SUCCESS',
    transactionAddingSuccess: bool
  };
}

export function transactionAddingErrored(bool) {
  return {
    type: 'TRANSACTION_ADDING_ERROR',
    transactionAddingErrored: bool
  };
}

// ---

export function transactionsFetchData(date) {
  return (dispatch) => {
    dispatch(transactionsIsLoading(true));
    fetch(config.transactionsURL + "?date=" + moment(date).format('DD-MM-YYYY'))
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(transactionsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((transactions) => dispatch(transactionsFetchDataSuccess(transactions)))
      .catch(() => dispatch(transactionsHasErrored(true)));
  };
}

export function transactionsRemove(id) {
  return (dispatch) => {
    dispatch(transactionIsRemoving(true));
    fetch(config.transactionsURL + '/' + id, { method: 'delete' })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(transactionIsRemoving(false));

        return response;
      })
      .then((response) => response.json())
      .then((response) => dispatch(transactionRemoveSuccess(true)))
      .catch(() => dispatch(transactionRemoveErrored(true)));
  };
}

export function transactionsAdd(data) {
  return (dispatch) => {
    dispatch(transactionIsAdding(true));
    fetch(config.transactionsURL, {
    	method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "category_id": 5,
        "direction": 1,
        "published_at": '2018-05-17',
        "sum": 3,
      })
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(transactionIsAdding(false));

        return response;
      })
      .then((response) => response.json())
      .then((response) => dispatch(transactionAddingSuccess(true)))
      .catch(() => dispatch(transactionAddingErrored(true)));
  };
}