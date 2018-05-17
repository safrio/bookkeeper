import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import { transactionsFetchData } from '../../actions/transactions';

class TransactionsList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.data.fetchData();
  }

  componentWillMount() {
    const props = this.props;
    console.log('transactions-list props:', props)
  }

  render() {
    if (this.props.data.transactionsHasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.data.transactionsIsLoading) {
      return <p>Loading…</p>;
    }

    return (
      <ul>
        {this.props.data.transactions.map((item) => (
          <li key={item.id}>
            {item.sum}
            {item.direction}
            <Link to={'/transactions/' + item.id + '/edit'}>Edit</Link>
            <Link to={'/transactions/' + item.id + '/remove'}>Remove</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default TransactionsList