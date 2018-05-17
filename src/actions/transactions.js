import config from '../config/config'

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

export function transactionsFetchData() {
  return (dispatch) => {
    dispatch(transactionsIsLoading(true));
    fetch(config.fetch_transactions_url + "?from=2011-11-11&to=2022-11-11")
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
