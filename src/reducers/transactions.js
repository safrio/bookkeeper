import initialState from './initialState'

export default function transactions(state = initialState, action) {
  switch(action.type) {
    case 'TRANSACTIONS_HAS_ERRORED':
      return { ...state, hasErrored: action.transactionsHasErrored }
    case 'TRANSACTIONS_IS_LOADING':
      return { ...state, isLoading: action.transactionsIsLoading }
    case 'TRANSACTIONS_FETCH_DATA_SUCCESS':
      return { ...state, transactions: action.transactions }
    case 'TRANSACTION_ADDING_SUCCESS':
      return { ...state, transactionAddingSuccess: action.transactionAddingSuccess }
    case 'TRANSACTION_REMOVE_SUCCESS':
      return {
        ...state,
        transactions: state.transactions.filter((data) => data.id !== action.id)
      }
    default:
      return state
  }
}
