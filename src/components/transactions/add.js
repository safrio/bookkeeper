import React, { Component } from 'react';
import moment from 'moment';
import TransactionForm from '../../containers/transactions/form';

class TransactionsAdd extends Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      action: 'add',
      direction: 1,
      category: 3,
      amount: 0,
      addingSuccess: false,
      addingError: false,
      adding: false,
      time: moment().format('HH:mm'),
      date: this.props.data.date,
    }
  }

  componentWillReceiveProps(props) {
    this.setState({ 
      date: props.data.date,
      addingSuccess: props.data.addingSuccess,
      addingError: props.data.addingError,
      adding: props.data.adding,
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

export default TransactionsAdd
