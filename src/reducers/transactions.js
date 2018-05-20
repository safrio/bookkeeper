import initialState from './initialState'

export default function transactions(state = initialState, action) {
  switch(action.type) {
    case 'DATE_HAS_CHANGED':
      return { ...state, date: action.date }

    // Fetching all
    case 'TRANSACTIONS_HAS_ERRORED':
      return {
        ...state,
        transactionsIsLoading: action.transactionsIsLoading,
        transactionsHasErrored: action.transactionsHasErrored
      }
    case 'TRANSACTIONS_IS_LOADING':
      return {
        ...state,
        transactionsIsLoading: action.transactionsIsLoading
      }
    case 'TRANSACTIONS_FETCH_DATA_SUCCESS':
      return {
        ...state,
        transactionsIsLoading: action.transactionsIsLoading,
        transactions: action.transactions
      }

    // Fetching one
    case 'TRANSACTION_HAS_ERRORED':
      return {
        ...state,
        transactionLoadingSuccess: action.transactionLoadingSuccess,
        transactionHasErrored: action.transactionHasErrored
      }
    case 'TRANSACTION_IS_LOADING':
      return {
        ...state,
        transactionLoadingSuccess: action.transactionLoadingSuccess,
        transactionHasErrored: action.transactionHasErrored,
        transactionIsLoading: action.transactionIsLoading
      }
    case 'TRANSACTION_FETCH_DATA_SUCCESS':
      return {
        ...state,
        transactionHasErrored: action.transactionHasErrored,
        transactionLoadingSuccess: action.transactionLoadingSuccess,
        transaction: action.transaction
      }

    // Adding
    case 'TRANSACTION_IS_ADDING':
      return {
        ...state,
        transactionIsAdding: action.transactionIsAdding
      }
    case 'TRANSACTION_ADDING_SUCCESS':
      return {
        ...state,
        transactionIsAdding: action.transactionIsAdding,
        transactionAddingSuccess: action.transactionAddingSuccess,
      }
    case 'TRANSACTION_ADDING_ERROR':
      return {
        ...state,
        transactionIsAdding: action.transactionIsAdding,
        transactionAddingError: action.transactionAddingErrored,
      }

    // Editing
    case 'TRANSACTION_IS_EDITING':
      return {
        ...state,
        transactionIsEditing: action.transactionIsEditing
      }
    case 'TRANSACTION_EDITING_SUCCESS':
      return { 
        ...state,
        transactionIsEditing: action.transactionIsEditing,
        transactionEditingSuccess: action.transactionEditingSuccess
      }
    case 'TRANSACTION_EDITING_ERROR':
      return {
        ...state,
        transactionIsEditing: action.transactionIsEditing,
        transactionEditingError: action.transactionEditingErrored,
      }

    // Removing
    case 'TRANSACTION_IS_REMOVING':
      return {
        ...state,
        transactionIsRemoving: action.transactionIsRemoving,
        transactionRemovingId: action.transactionRemovingId
      }
    case 'TRANSACTION_REMOVE_ERROR':
      return { 
        ...state,
        transactionIsRemoving: action.transactionIsRemoving,
        transactionRemoveError: action.transactionRemoveErrored,
        transactionRemovingSuccess: action.transactionRemovingSuccess,
      }
    case 'TRANSACTION_REMOVE_SUCCESS':
      return {
        ...state,
        transactionIsRemoving: action.transactionIsRemoving,
        transactionRemovingSuccess: action.transactionRemovingSuccess,
        transactionRemoveError: action.transactionRemoveErrored,
        transactions: state.transactions.filter((data) => data.id !== action.id)
      }

    default:
      return state
  }
}
