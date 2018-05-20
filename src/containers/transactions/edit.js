import React, { Component } from 'react';
import moment from 'moment';
import TransactionForm from '../../components/transactions/form';

class TransactionsEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      action: 'edit',
      direction: 1,
      category: 3,
      amount: 0,
      editingSuccess: false,
      editingError: false,
      editing: false,
      time: moment().format('HH:mm'),
      date: this.props.data.date,
    }
  }

  componentDidMount() {
    this.props.data.fetchOne(this.props.data.match.params.id);
    this.props.data.categoriesFetchData();
  }

  componentWillReceiveProps(props) {
    this.setState({
      amount: props.data.transaction.sum,
      direction: props.data.transaction.direction === 'credit' ? 1 : 0,
      category: props.data.transaction.category_id,
      time: moment(props.data.transaction.published_at, "YYYY-MM-DDTHH:mm:ss").format('HH:mm'),
      date: props.data.date,
      editingSuccess: props.data.editingSuccess,
      editingError: props.data.editingError,
      editing: props.data.editing,
    });
  }

  handleChange = prop => event => {
    this.setState({
      [prop]: event.target.value
    });
  };

  render() {
    return(
      <TransactionForm
        data={this.props.data}
        states={this.state}
        handleChange={this.handleChange} />
    );
  }
};

export default TransactionsEdit
