import React, { Component } from 'react';
import moment from 'moment';
import TransactionForm from '../../containers/transactions/form';

class TransactionsEdit extends Component {
  constructor(props){
    super(props);

    this.state = {
      action: 'edit',
      direction: 1,
      category: 3,
      amount: 0,
      editingSuccess: false,
      time: moment().format('HH:mm'),
      date: this.props.data.date,
    }
  }

  componentDidMount() {
    this.props.data.fetchOne(this.props.data.match.params.id);
  }

  componentWillReceiveProps(props) {
    console.log(props)
    this.setState({
      amount: props.data.transaction.sum,
      direction: props.data.transaction.direction === 'credit' ? 1 : 0,
      category: props.data.transaction.category_id,
      time: moment(props.data.transaction.published_at, "YYYY-MM-DD\THH:mm:ss").format('HH:mm'),
      date: props.data.date,
      editingSuccess: props.data.editingSuccess,
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
