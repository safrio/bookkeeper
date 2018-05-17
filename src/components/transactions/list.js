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
    if (this.props.data.transactions.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.data.transactions.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <ul>
        {this.props.data.transactions.map((item) => (
          <li key={item.id}>
            {item.sum}
            {item.direction}
            <Link to={'/transactions/' + item.id + '/edit'}>Edit</Link>
            <div
              onClick={() => this.props.data.remove(item.id)}>Remove</div>
          </li>
        ))}
      </ul>
    );
  }
}

export default TransactionsList