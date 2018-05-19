import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <div>
        <Link to={'/transactions/add'}>Add</Link>
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
      </div>
    );
  }
}

export default TransactionsList