import initialState from './initialState'

export function transactionsHasErrored(state = initialState.transactionsHasErrored, action) {
    switch (action.type) {
        case 'TRANSACTIONS_HAS_ERRORED':
            return action.transactionsHasErrored;
        default:
            return state;
    }
}

export function transactionsIsLoading(state = initialState.transactionsIsLoading, action) {
    switch (action.type) {
        case 'TRANSACTIONS_IS_LOADING':
            return action.transactionsIsLoading;
        default:
            return state;
    }
}

export function transactions(state = initialState.transactions, action) {
    switch (action.type) {
        case 'TRANSACTIONS_FETCH_DATA_SUCCESS':
            return action.transactions;
        default:
            return state;
    }
}