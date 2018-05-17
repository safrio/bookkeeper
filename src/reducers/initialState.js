import moment from 'moment';

export default {
	currentData: moment().format("DD-MM-YYYY"),

  transactions: [],
  transactionsIsLoading: false,
  transactionsHasErrored: false,
}
