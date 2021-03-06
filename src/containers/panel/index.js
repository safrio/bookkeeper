import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PanelComponent from '../../components/panel/';
import { dateHasChanged } from '../../actions/panel';

class Panel extends Component {
  render() {
    return (
      <PanelComponent data={this.props} />
    );
  }
}

Panel.propTypes = {
  changeDate: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  date: state.transactions.date,
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeDate: (date) => dispatch(dateHasChanged(date)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
