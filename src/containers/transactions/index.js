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
import {
  categoriesFetchData,
} from '../../actions/categories';

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
  oneHasErrored: PropTypes.bool.isRequired,
  oneLoadingSuccess: PropTypes.bool.isRequired,
  oneIsLoading: PropTypes.bool.isRequired,
  remove: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  transactions: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
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

const mapStateToProps = ({ transactions, categories }) => {
  return {
    transaction: transactions.transaction,
    transactions: transactions.transactions,
    hasErrored: transactions.transactionsHasErrored,
    isLoading: transactions.transactionsIsLoading,
    oneHasErrored: transactions.transactionHasErrored,
    oneLoadingSuccess: transactions.transactionLoadingSuccess,
    oneIsLoading: transactions.transactionIsLoading,
    addingError: transactions.transactionAddingError,
    addingSuccess: transactions.transactionAddingSuccess,
    adding: transactions.transactionIsAdding,
    editingError: transactions.transactionEditingError,
    editingSuccess: transactions.transactionEditingSuccess,
    editing: transactions.transactionIsEditing,
    removingError: transactions.transactionRemoveError,
    removingSuccess: transactions.transactionRemovingSuccess,
    removing: transactions.transactionIsRemoving,
    removingId: transactions.transactionRemovingId,
    date: transactions.date,
    categories: categories.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOne: (id) => dispatch(transactionFetchData(id)),
    fetchData: (date) => dispatch(transactionsFetchData(date)),
    remove: (id) => dispatch(transactionsRemove(id)),
    add: (data) => dispatch(transactionsAdd(data)),
    edit: (id, data) => dispatch(transactionsEdit(id, data)),
    categoriesFetchData: () => dispatch(categoriesFetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);