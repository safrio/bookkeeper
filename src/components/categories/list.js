import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import moment from 'moment';
import { Alert } from 'react-bootstrap';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const styles = theme => ({
  button: {
    margin: "0 30px 0 0",
  },
  flex: {
    flex: 1,
  },
});

const CategoriesListContainer = (props) => {
	const {
		categories, remove, removingError, 
		removingSuccess, isLoading, hasErrored } = props.data;
	const { classes, removeDisabled } = props;

	const table = (
	  <MuiThemeProvider>
		  <Table>
		    <TableHeader displaySelectAll={false}>
		      <TableRow>
		        <TableHeaderColumn>Name</TableHeaderColumn>
		        <TableHeaderColumn></TableHeaderColumn>
		      </TableRow>
		    </TableHeader>
		    <TableBody displayRowCheckbox={false}>
		      {categories.map((item) => (
			      <TableRow
			      	key={item.id}>
			        <TableRowColumn>{item.name}</TableRowColumn>
			        <TableRowColumn>
		            <Button 
		            	variant="raised" 
		            	color="inherit"
			          	classes={{ root: classes.button }}
			          	component={Link}
			          	to={'/categories/' + item.id}>Edit</Button>
		            <Button
		            	variant="raised" 
		            	color="inherit"
	            		disabled={removeDisabled(props.data.removing, props.data.removingId, item.id)}
			          	classes={{ root: classes.button }}
			          	onClick={() => remove(item.id)}>Remove</Button>
			        </TableRowColumn>
			      </TableRow>
		      ))}
		    </TableBody>
		  </Table>
	  </MuiThemeProvider>
	);

  return (
  	<div style={{ margin: "30px 50px 0 0" }}>
      <Button
      	variant="raised" 
      	color="inherit"
	    	classes={{ root: classes.button }}
	    	component={Link}
	    	to={'/categories/add'}>Add</Button>

	      {removingError &&
	        <Alert bsStyle="danger" style={{ margin: "30px 0" }}>
	          Removing error!
	        </Alert>
	      }

	      {removingSuccess &&
	        <Alert bsStyle="success" style={{ margin: "30px 0" }}>
	          Done!
	        </Alert>
	      }

	      {isLoading &&
	        <Alert bsStyle="warning" style={{ margin: "30px 0" }}>
	          Loading...
	        </Alert>
	      }

	      {hasErrored &&
	        <Alert bsStyle="danger" style={{ margin: "30px 0" }}>
	          Loading error!
	        </Alert>
	      }

	    	{categories.length === 0
	    		? <p style={{ margin: "30px 0" }}>Categories list is empty</p>
	    		: table
	    	}
	  </div>
  );
}

CategoriesListContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoriesListContainer);
