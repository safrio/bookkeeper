import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  transactionFetchData,
  transactionsFetchData,
  transactionsRemove,
  transactionsAdd,
  transactionsEdit,
} from '../../actions/transactions';

import { Route, Switch } from 'react-router-dom';

import TransactionsList from './list';
import TransactionsAdd from './add';
import TransactionsEdit from './edit';

class Transactions extends Component {
  render() {
    return (
      <ul>
        <Switch>
          <Route exact path='/'
            render={() => <TransactionsList data={this.props} />} />
          <Route exact path='/transactions/add'
            render={() => <TransactionsAdd data={this.props} />} />
          <Route path='/transactions/:id'
            render={() => <TransactionsEdit data={this.props} />} />
        </Switch>
      </ul>
    );
  }
}

Transactions.propTypes = {
  fetchOne: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  transactions: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  addingSuccess: PropTypes.bool.isRequired,
  addingError: PropTypes.bool.isRequired,
  adding: PropTypes.bool.isRequired,
  editingSuccess: PropTypes.bool.isRequired,
  editingError: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired,
  removingError: PropTypes.bool.isRequired,
  removingSuccess: PropTypes.bool.isRequired,
  removing: PropTypes.bool.isRequired,
  removingId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    transaction: state.transactions.transaction,
    transactions: state.transactions.transactions,
    hasErrored: state.transactions.transactionsHasErrored,
    isLoading: state.transactions.transactionsIsLoading,
    addingError: state.transactions.transactionAddingError,
    addingSuccess: state.transactions.transactionAddingSuccess,
    adding: state.transactions.transactionIsAdding,
    editingError: state.transactions.transactionEditingError,
    editingSuccess: state.transactions.transactionEditingSuccess,
    editing: state.transactions.transactionIsEditing,
    removingError: state.transactions.transactionRemoveError,
    removingSuccess: state.transactions.transactionRemovingSuccess,
    removing: state.transactions.transactionIsRemoving,
    removingId: state.transactions.transactionRemovingId,
    date: state.transactions.date,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOne: (id) => dispatch(transactionFetchData(id)),
    fetchData: (date) => dispatch(transactionsFetchData(date)),
    remove: (id) => dispatch(transactionsRemove(id)),
    add: (data) => dispatch(transactionsAdd(data)),
    edit: (id, data) => dispatch(transactionsEdit(id, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);