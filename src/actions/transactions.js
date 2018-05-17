import config from '../config/config'

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

// ---

export function transactionsFetchData() {
  return (dispatch) => {
    dispatch(transactionsIsLoading(true));
    fetch(config.transactionsURL + "?from=2011-11-11&to=2022-11-11")
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
      .then((response) => dispatch(transactionRemoveSuccess(id)))
      .catch(() => dispatch(transactionRemoveErrored(true)));
  };
}