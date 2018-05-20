import React from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { Alert } from 'react-bootstrap';

const TransactionForm = ({ states, handleChange, data }) => {
  const disabled = states.adding || states.editing;

  return(
    <form autoComplete="off" style={{ margin: '50px 70px 0 30px' }}>

      {states.action === 'add' && states.addingSuccess &&
        <Alert bsStyle="success">
          Good job!
        </Alert>
      }

      {states.action === 'add' && states.addingError &&
        <Alert bsStyle="danger">
          Error!
        </Alert>
      }

      {states.action === 'edit' && states.editingSuccess &&
        <Alert bsStyle="success">
          Done!
        </Alert>
      }

      {states.action === 'edit' && states.editingError &&
        <Alert bsStyle="danger">
          Saving error!
        </Alert>
      }

      <FormControl fullWidth style={{ marginBottom: '10px' }}>
        <InputLabel htmlFor="direction">Direction</InputLabel>
        <Select
          value={states.direction}
          onChange={handleChange('direction')}
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
          value={states.category}
          onChange={handleChange('category')}
          inputProps={{
            name: 'category',
            id: 'category',
          }}
        >
          {data.categories.map((cat) => (
          <MenuItem value={cat.id} key={cat.id}>{cat.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth style={{ marginBottom: '10px' }}>
        <InputLabel htmlFor="amount">Amount</InputLabel>
        <Input
          id="amount"
          type="number"
          value={states.amount}
          onChange={handleChange('amount')}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
      <FormControl fullWidth style={{ marginBottom: '10px' }}>
        <InputLabel htmlFor="time">Time</InputLabel>
        <Input
          id="time"
          type="time"
          value={states.time}
          onChange={handleChange('time')}
        />
      </FormControl>
      <Button
        variant="raised"
        color="inherit"
        disabled={disabled}
        onClick={() => {
          states.action === 'add'
            ? data.add(states)
            : data.edit(data.match.params.id, states)
        }}>
        {states.action === 'add'
          ? <span>Add</span>
          : <span>Edit</span>}
      </Button>
    </form>
  );
};

export default TransactionForm
