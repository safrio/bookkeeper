import config from '../config/config'
import moment from 'moment'
import axios from 'axios'

// Fetching

export function transactionsHasErrored() {
  return {
    type: 'TRANSACTIONS_HAS_ERRORED',
    transactionsIsLoading: false,
    transactionsHasErrored: true
  };
}

export function transactionsIsLoading() {
  return {
    type: 'TRANSACTIONS_IS_LOADING',
    transactionsIsLoading: true
  };
}

export function transactionsFetchDataSuccess(transactions) {
  return {
    type: 'TRANSACTIONS_FETCH_DATA_SUCCESS',
    transactionsIsLoading: false,
    transactionsHasErrored: false,
    transactions
  };
}

// Fetching one

export function transactionHasErrored() {
  return {
    type: 'TRANSACTION_HAS_ERRORED',
    transactionLoadingSuccess: false,
    transactionHasErrored: true
  };
}

export function transactionIsLoading() {
  return {
    type: 'TRANSACTION_IS_LOADING',
    transactionLoadingSuccess: false,
    transactionHasErrored: false,
    transactionIsLoading: true
  };
}

export function transactionFetchDataSuccess(transaction) {
  return {
    type: 'TRANSACTION_FETCH_DATA_SUCCESS',
    transactionHasErrored: false,
    transactionLoadingSuccess: true,
    transaction
  };
}

// Removing

export function transactionIsRemoving(id) {
  return {
    type: 'TRANSACTION_IS_REMOVING',
    transactionIsRemoving: true,
    transactionRemovingId: id
  };
}

export function transactionRemoveSuccess(id) {
  return {
    type: 'TRANSACTION_REMOVE_SUCCESS',
    transactionIsRemoving: false,
    transactionRemovingSuccess: true,
    transactionRemoveErrored: false,
    id
  };
}

export function transactionRemoveErrored() {
  return {
    type: 'TRANSACTION_REMOVE_ERROR',
    transactionIsRemoving: false,
    transactionRemovingSuccess: false,
    transactionRemoveErrored: true
  };
}

// Adding

export function transactionIsAdding() {
  return {
    type: 'TRANSACTION_IS_ADDING',
    transactionIsAdding: true
  };
}

export function transactionAddingSuccess() {
  return {
    type: 'TRANSACTION_ADDING_SUCCESS',
    transactionIsAdding: false,
    transactionAddingSuccess: true
  };
}

export function transactionAddingErrored() {
  return {
    type: 'TRANSACTION_ADDING_ERROR',
    transactionIsAdding: false,
    transactionAddingErrored: true
  };
}

// Editing

export function transactionIsEditing() {
  return {
    type: 'TRANSACTION_IS_EDITING',
    transactionIsEditing: true
  };
}

export function transactionEditingSuccess() {
  return {
    type: 'TRANSACTION_EDITING_SUCCESS',
    transactionIsEditing: false,
    transactionEditingSuccess: true
  };
}

export function transactionEditingErrored() {
  return {
    type: 'TRANSACTION_EDITING_ERROR',
    transactionIsEditing: false,
    transactionEditingErrored: true
  };
}

// ---

export function transactionsFetchData(date) {
  return (dispatch) => {
    dispatch(transactionsIsLoading());
    axios.get(config.transactionsURL + "?date=" + moment(date).format('DD-MM-YYYY'))
      .then((transactions) => dispatch(transactionsFetchDataSuccess(transactions.data)))
      .catch(() => dispatch(transactionsHasErrored()));
  };
}

export function transactionFetchData(id) {
  return (dispatch) => {
    dispatch(transactionIsLoading());
    axios.get(config.transactionsURL + '/' + id)
      .then((transaction) => dispatch(transactionFetchDataSuccess(transaction.data)))
      .catch(() => dispatch(transactionHasErrored()));
  };
}

export function transactionsRemove(id) {
  return (dispatch) => {
    dispatch(transactionIsRemoving(id));
    axios.delete(config.transactionsURL + '/' + id)
      .then(() => dispatch(transactionRemoveSuccess(id)))
      .catch(() => dispatch(transactionRemoveErrored()));
  };
}

export function transactionsAdd(data) {
  return (dispatch) => {
    dispatch(transactionIsAdding());
    axios.post(config.transactionsURL, 
      JSON.stringify({
        "category_id": data.category,
        "direction": data.direction,
        "published_at": moment(data.date).format("DD-MM-YYYY") + ' ' + data.time,
        "sum": data.amount,
      }),
      { headers: { 'Content-Type': 'application/json' } }
    )
      .then((response) => dispatch(transactionAddingSuccess()))
      .catch(() => dispatch(transactionAddingErrored()));
  };
}

export function transactionsEdit(id, data) {
  return (dispatch) => {
    dispatch(transactionIsEditing());
    axios.patch(config.transactionsURL + '/' + id, 
      JSON.stringify({
        "category_id": data.category,
        "direction": data.direction,
        "published_at": moment(data.date).format("DD-MM-YYYY") + ' ' + data.time,
        "sum": data.amount,
      }),
      { headers: { 'Content-Type': 'application/json' } }
    )
      .then((response) => dispatch(transactionEditingSuccess()))
      .catch(() => dispatch(transactionEditingErrored()));
  };
}