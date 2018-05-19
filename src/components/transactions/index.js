import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  transactionsFetchData,
  transactionsRemove,
  transactionsAdd
} from '../../actions/transactions';

import { Route, Switch } from 'react-router-dom';

import TransactionsList from './list';
import TransactionsAdd from './add';

class Transactions extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <ul>
        <Switch>
          <Route exact path='/'
            render={() => <TransactionsList data={this.props} />} />
          <Route exact path='/transactions/add'
            render={() => <TransactionsAdd data={this.props} />} />
        </Switch>
      </ul>
    );
  }
}

Transactions.propTypes = {
  fetchData: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  transactions: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  addingSuccess: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions.transactions,
    hasErrored: state.transactions.transactionsHasErrored,
    isLoading: state.transactions.transactionsIsLoading,
    addingSuccess: state.transactions.transactionAddingSuccess,
    date: state.transactions.date,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (date) => dispatch(transactionsFetchData(date)),
    remove: (id) => dispatch(transactionsRemove(id)),
    add: (data) => dispatch(transactionsAdd(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);