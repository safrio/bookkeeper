import React, { Component } from 'react';
import TransactionsListContainer from '../../components/transactions/list';

class TransactionsList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.data.fetchData(this.props.data.date);
    this.props.data.categoriesFetchData();
  }

  componentWillReceiveProps(props) {
    if (this.props.data.date !== props.data.date) {
      this.props.data.fetchData(props.data.date);
    }
  }

  removeDisabled(removing, removingId, id) {
    return !! + (removing && removingId === id);
  } 

  categoryName(categories, id) {
    const cat = categories.find(c => c.id === id);
    return cat ? cat.name : '';
  }

  render() {
    return (
      <TransactionsListContainer
        data={this.props.data}
        removeDisabled={this.removeDisabled}
        categoryName={this.categoryName} />
    );
  }
}

export default TransactionsList