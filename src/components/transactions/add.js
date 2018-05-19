import React, { Component } from 'react';
import moment from 'moment';
import TransactionForm from '../../containers/transactions/form';

class TransactionsAdd extends Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      direction: 1,
      category: 3,
      amount: 0,
      addingSuccess: false,
      time: moment().format('HH:mm'),
      date: this.props.data.date,
    }
  }

  componentWillReceiveProps(props) {
    this.setState({ date: props.data.date })
    this.setState({ addingSuccess: props.data.addingSuccess })
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
