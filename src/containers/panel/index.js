import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker';

const styles = theme => ({
  button: {
    margin: "0 30px 0 0",
  },
  flex: {
    flex: 1,
  },
});

const PanelComponent = (props) => {
  const { classes, data } = props;
  
  return (
    <div>
      <AppBar position="static" color="default" position="sticky">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            The bookkeeper
          </Typography>          
          <Button color="inherit"
          	classes={{ root: classes.button }}
          	component={Link}
          	to="/">Home</Button>
          <Button color="inherit"
          	classes={{ root: classes.button }}
          	component={Link}
          	to="/categories/">Categories</Button>
				  <MuiThemeProvider>
				    <DatePicker
              hintText="Date"
              textFieldStyle={{ width: '85px' }}
              mode="landscape"
              value={data.date}
              onChange={(event, date) => { console.log(date, props.data.changeDate(date)) }} />
				  </MuiThemeProvider>
        </Toolbar>
      </AppBar>
    </div>
  );
}

PanelComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PanelComponent);
