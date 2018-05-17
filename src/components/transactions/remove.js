import React, { Component } from 'react';

class TransactionsRemove extends Component {
  constructor(props, context){
  	console.log('remove mounted')
    super(props, context);
  }

  componentWillReceiveProps(nextProps) {
    console.log('edit', nextProps)
    this.setState({
      open: true,
      direction: 2,
    });
  }
};

export default TransactionsRemove
