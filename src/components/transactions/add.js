import React, { Component } from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { Alert } from 'react-bootstrap';

class TransactionsAdd extends Component {
  constructor(props, context){
    super(props, context);
  	console.log('add mounted', props)

    this.state = {
      direction: 2,
      category: 3,
      amount: 0,
      addingSuccess: false,
    }
  }

  componentWillReceiveProps(props) {
    this.setState({ addingSuccess: props.data.addingSuccess })
  }

  handleChange = prop => event => {
    this.setState({
      [prop]: event.target.value
    });
  };

  handleSelectChange = event => {
    this.setState({ direction: event.target.value });
  };

  render() {
    return(
      <form autoComplete="off">

        {this.state.addingSuccess &&
          <Alert bsStyle="success">
            Good job!
          </Alert>
        }

        <FormControl fullWidth>
          <InputLabel htmlFor="direction">Direction</InputLabel>
          <Select
            value={this.state.direction}
            onChange={this.handleSelectChange}
            inputProps={{
              name: 'direction',
              id: 'direction',
            }}
          >
            <MenuItem value={2} key={2}>Credit</MenuItem>
            <MenuItem value={1} key={1}>Debet</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="category">Category</InputLabel>
          <Select
            value={this.state.category}
            onChange={this.handleChange('category')}
            inputProps={{
              name: 'category',
              id: 'category',
            }}
          >
            <MenuItem value={3}>cat3</MenuItem>
            <MenuItem value={4}>cat4</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="amount">Amount</InputLabel>
          <Input
            id="amount"
            value={this.state.amount}
            onChange={this.handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <Button variant="raised" onClick={() => this.props.data.add(this.state)}>
          Add
        </Button>
      </form>
    );
  }
};

export default TransactionsAdd
