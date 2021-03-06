import React, { Component } from 'react';
import CategoriesListContainer from '../../components/categories/list';

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.data.fetchData(this.props.data.date);
  }

  componentWillReceiveProps(props) {
    if (this.props.data.date !== props.data.date) {
      this.props.data.fetchData(props.data.date);
    }
  }

  removeDisabled(removing, removingId, id) {
    return !! + (removing && removingId === id);
  } 

  render() {
    return (
      <CategoriesListContainer
        data={this.props.data}
        removeDisabled={this.removeDisabled} />
    );
  }
}

export default CategoriesList