import React, { Component } from 'react';
import moment from 'moment';

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

  handleSelectChange = event => {
    this.setState({ direction: event.target.value });
  };

  render() {
    return(
      <form autoComplete="off" style={{ margin: '50px 70px 0 30px' }}>

        {this.state.addingSuccess &&
          <Alert bsStyle="success">
            Good job!
          </Alert>
        }

        <FormControl fullWidth style={{ marginBottom: '10px' }}>
          <InputLabel htmlFor="direction">Direction</InputLabel>
          <Select
            value={this.state.direction}
            onChange={this.handleSelectChange}
            inputProps={{
              name: 'direction',
              id: 'direction',
            }}
          >
            <MenuItem value={1}>Credit</MenuItem>
            <MenuItem value={0}>Debit</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth style={{ marginBottom: '10px' }}>
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
        <FormControl fullWidth style={{ marginBottom: '10px' }}>
          <InputLabel htmlFor="amount">Amount</InputLabel>
          <Input
            id="amount"
            type="number"
            value={this.state.amount}
            onChange={this.handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <FormControl fullWidth style={{ marginBottom: '10px' }}>
          <InputLabel htmlFor="time">Time</InputLabel>
          <Input
            id="time"
            type="time"
            value={this.state.time}
            onChange={this.handleChange('time')}
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
