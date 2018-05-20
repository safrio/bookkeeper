import config from '../config/config'
import moment from 'moment'
import axios from 'axios'

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

// Fetching one

export function transactionHasErrored(bool) {
  return {
    type: 'TRANSACTION_HAS_ERRORED',
    transactionHasErrored: bool
  };
}

export function transactionIsLoading(bool) {
  return {
    type: 'TRANSACTION_IS_LOADING',
    transactionIsLoading: bool
  };
}

export function transactionFetchDataSuccess(transaction) {
  return {
    type: 'TRANSACTION_FETCH_DATA_SUCCESS',
    transaction
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

// Adding

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

// Editing

export function transactionIsEditing(bool) {
  return {
    type: 'TRANSACTION_IS_EDITING',
    transactionIsEditing: bool
  };
}

export function transactionEditingSuccess(bool) {
  return {
    type: 'TRANSACTION_EDITING_SUCCESS',
    transactionEditingSuccess: bool
  };
}

export function transactionEditingErrored(bool) {
  return {
    type: 'TRANSACTION_EDITING_ERROR',
    transactionEditingErrored: bool
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

export function transactionFetchData(id) {
  return (dispatch) => {
    // dispatch(transactionIsLoading(true));
    axios.get(config.transactionsURL + '/' + id)
      // .then((response) => {
      //   if (!response.ok) {
      //     throw Error(response.statusText);
      //   }

      //   dispatch(transactionIsLoading(false));

      //   return response;
      // })
      // .then((response) => response.json())
      .then((transaction) => dispatch(transactionFetchDataSuccess(transaction.data)))
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

export function transactionsAdd(data) {
  return (dispatch) => {
    dispatch(transactionIsAdding(true));
    fetch(config.transactionsURL, {
    	method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "category_id": data.category,
        "direction": data.direction,
        "published_at": moment(data.date).format("DD-MM-YYYY") + ' ' + data.time,
        "sum": data.amount,
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

export function transactionsEdit(id, data) {
  return (dispatch) => {
    dispatch(transactionIsEditing(true));
    axios.patch(config.transactionsURL + '/' + id, 
      JSON.stringify({
        "category_id": data.category,
        "direction": data.direction,
        "published_at": moment(data.date).format("DD-MM-YYYY") + ' ' + data.time,
        "sum": data.amount,
      }),
      { headers: { 'Content-Type': 'application/json' } }
    )
      .then((response) => dispatch(transactionEditingSuccess(true)))
      .catch(() => dispatch(transactionEditingErrored(true)));
  };
}