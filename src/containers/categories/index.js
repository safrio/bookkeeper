import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  categoryFetchData,
  categoriesFetchData,
  categoriesRemove,
  categoriesAdd,
  categoriesEdit,
} from '../../actions/categories';

import { Route, Switch } from 'react-router-dom';

import CategoriesList from './list';
import CategoriesAdd from './add';
import CategoriesEdit from './edit';

class Categories extends Component {
  render() {
    return (
      <ul>
        <Switch>
          <Route exact path='/categories'
            render={() => <CategoriesList data={this.props} />} />
          <Route exact path='/categories/add'
            render={() => <CategoriesAdd data={this.props} />} />
          <Route path='/categories/:id'
            render={() => <CategoriesEdit data={this.props} />} />
        </Switch>
      </ul>
    );
  }
}

Categories.propTypes = {
  fetchOne: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  addingSuccess: PropTypes.bool.isRequired,
  addingError: PropTypes.bool.isRequired,
  adding: PropTypes.bool.isRequired,
  editingSuccess: PropTypes.bool.isRequired,
  editingError: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired,
  removingError: PropTypes.bool.isRequired,
  removingSuccess: PropTypes.bool.isRequired,
  removing: PropTypes.bool.isRequired,
  removingId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    category: state.categories.category,
    categories: state.categories.categories,
    hasErrored: state.categories.categoriesHasErrored,
    isLoading: state.categories.categoriesIsLoading,
    addingError: state.categories.categoryAddingError,
    addingSuccess: state.categories.categoryAddingSuccess,
    adding: state.categories.categoryIsAdding,
    editingError: state.categories.categoryEditingError,
    editingSuccess: state.categories.categoryEditingSuccess,
    editing: state.categories.categoryIsEditing,
    removingError: state.categories.categoryRemoveError,
    removingSuccess: state.categories.categoryRemovingSuccess,
    removing: state.categories.categoryIsRemoving,
    removingId: state.categories.categoryRemovingId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOne: (id) => dispatch(categoryFetchData(id)),
    fetchData: () => dispatch(categoriesFetchData()),
    remove: (id) => dispatch(categoriesRemove(id)),
    add: (data) => dispatch(categoriesAdd(data)),
    edit: (id, data) => dispatch(categoriesEdit(id, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);