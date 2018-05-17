import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { transactionsFetchData } from '../../actions/transactions';

import { Route, Switch } from 'react-router-dom';

import TransactionsList from './list';

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
        </Switch>
      </ul>
    );
  }
}

Transactions.propTypes = {
  fetchData: PropTypes.func.isRequired,
  transactions: PropTypes.array.isRequired,
  transactionsHasErrored: PropTypes.bool.isRequired,
  transactionsIsLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state, p) => {
  return {
    transactions: state.transactions,
    transactionsHasErrored: state.transactionsHasErrored,
    transactionsIsLoading: state.transactionsIsLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(transactionsFetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);