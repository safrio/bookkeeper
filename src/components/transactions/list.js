import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TransactionsListContainer from '../../containers/transactions/list';

class TransactionsList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.data.fetchData(this.props.data.date);
  }

  componentWillReceiveProps(props) {
    if (this.props.data.date != props.data.date) {
      this.props.data.fetchData(props.data.date);
    }
  }

  render() {
    if (this.props.data.transactions.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.data.transactions.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <TransactionsListContainer data={this.props.data} />
    );
  }
}

export default TransactionsList