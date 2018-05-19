import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import moment from 'moment';

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

const TransactionsListContainer = (props) => {
	const { transactions, remove } = props.data
	const { classes } = props;

	let sum = 0;
	transactions.map((item) => 
		sum += (item.direction === 'credit' ? -item.sum : item.sum)
	);

	const table = (
	  <MuiThemeProvider>
		  <Table>
		    <TableHeader displaySelectAll={false}>
		      <TableRow>
		        <TableHeaderColumn>Time</TableHeaderColumn>
		        <TableHeaderColumn>Amount</TableHeaderColumn>
		        <TableHeaderColumn></TableHeaderColumn>
		      </TableRow>
		    </TableHeader>
		    <TableBody displayRowCheckbox={false}>
		      {transactions.map((item) => (
			      <TableRow
			      	key={item.id}
			      	style={{ backgroundColor: item.direction == 'credit' ? 'rgba(255, 0, 0, 0.08)' : 'rgba(0, 255, 0, 0.08)' }}>
			        <TableRowColumn>{moment(item.published_at, "YYYY-MM-DD\THH:mm:ss").format('HH:mm')}</TableRowColumn>
			        <TableRowColumn>{item.sum}</TableRowColumn>
			        <TableRowColumn>
		            <Button 
		            	variant="raised" 
		            	color="inherit"
			          	classes={{ root: classes.button }}
			          	component={Link}
			          	to={'/transactions/' + item.id + '/edit'}>Edit</Button>
		            <Button
		            	variant="raised" 
		            	color="inherit"
			          	classes={{ root: classes.button }}
			          	onClick={() => remove(item.id)}>Remove</Button>
			        </TableRowColumn>
			      </TableRow>
		      ))}
			      <TableRow>
			        <TableRowColumn>TOTAL:</TableRowColumn>
			        <TableRowColumn>{sum}</TableRowColumn>
			        <TableRowColumn></TableRowColumn>
			      </TableRow>
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
	    	to={'/transactions/add'}>Add</Button>
	    	{transactions.length === 0
	    		? <p style={{ margin: "30px 0" }}>Transactions list is empty</p>
	    		: table
	    	}
	  </div>
  );
}

TransactionsListContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransactionsListContainer);
