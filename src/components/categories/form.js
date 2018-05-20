import React from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { Alert } from 'react-bootstrap';

const CategoriesForm = ({ states, handleChange, data }) => {
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
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          id="name"
          value={states.name}
          onChange={handleChange('name')}
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

export default CategoriesForm
