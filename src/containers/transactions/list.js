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

  return (
  	<div>
      <Button color="inherit"
	    	classes={{ root: classes.button }}
	    	component={Link}
	    	to={'/transactions/add'}>Add</Button>
		  <MuiThemeProvider>
			  <Table>
			    <TableHeader>
			      <TableRow>
			        <TableHeaderColumn>Amount</TableHeaderColumn>
			        <TableHeaderColumn>Time</TableHeaderColumn>
			        <TableHeaderColumn></TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    <TableBody>

		      {transactions.map((item) => (
			      <TableRow key={item.id}>
			        <TableRowColumn>{item.sum}</TableRowColumn>
			        <TableRowColumn>{moment(item.published_at).format('HH:mm')}</TableRowColumn>
			        <TableRowColumn>
		            <Button color="inherit"
			          	classes={{ root: classes.button }}
			          	component={Link}
			          	to={'/transactions/' + item.id + '/edit'}>Edit</Button>
		            <Button color="inherit"
			          	classes={{ root: classes.button }}
			          	onClick={() => remove(item.id)}>Remove</Button>
			        </TableRowColumn>
			      </TableRow>
		      ))}
			    </TableBody>
			  </Table>
		  </MuiThemeProvider>
	  </div>
  );
}

TransactionsListContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransactionsListContainer);
