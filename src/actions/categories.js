import config from '../config/config'
import axios from 'axios'

// Fetching

export function categoriesHasErrored() {
  return {
    type: 'CATEGORIES_HAS_ERRORED',
    categoriesIsLoading: false,
    categoriesHasErrored: true
  };
}

export function categoriesIsLoading() {
  return {
    type: 'CATEGORIES_IS_LOADING',
    categoriesIsLoading: true
  };
}

export function categoriesFetchDataSuccess(categories) {
  return {
    type: 'CATEGORIES_FETCH_DATA_SUCCESS',
    categoriesIsLoading: false,
    categoriesHasErrored: false,
    categories
  };
}

// Fetching one

export function categoryHasErrored() {
  return {
    type: 'CATEGORY_HAS_ERRORED',
    categoryHasErrored: true
  };
}

export function categoryIsLoading() {
  return {
    type: 'CATEGORY_IS_LOADING',
    categoryIsLoading: true
  };
}

export function categoryFetchDataSuccess(category) {
  return {
    type: 'CATEGORY_FETCH_DATA_SUCCESS',
    category
  };
}

// Removing

export function categoryIsRemoving(id) {
  return {
    type: 'CATEGORY_IS_REMOVING',
    categoryIsRemoving: true,
    categoryRemovingId: id
  };
}

export function categoryRemoveSuccess(id) {
  return {
    type: 'CATEGORY_REMOVE_SUCCESS',
    categoryIsRemoving: false,
    categoryRemovingSuccess: true,
    categoryRemoveErrored: false,
    id
  };
}

export function categoryRemoveErrored() {
  return {
    type: 'CATEGORY_REMOVE_ERROR',
    categoryIsRemoving: false,
    categoryRemovingSuccess: false,
    categoryRemoveErrored: true
  };
}

// Adding

export function categoryIsAdding() {
  return {
    type: 'CATEGORY_IS_ADDING',
    categoryIsAdding: true
  };
}

export function categoryAddingSuccess() {
  return {
    type: 'CATEGORY_ADDING_SUCCESS',
    categoryIsAdding: false,
    categoryAddingSuccess: true
  };
}

export function categoryAddingErrored() {
  return {
    type: 'CATEGORY_ADDING_ERROR',
    categoryIsAdding: false,
    categoryAddingErrored: true
  };
}

// Editing

export function categoryIsEditing() {
  return {
    type: 'CATEGORY_IS_EDITING',
    categoryIsEditing: true
  };
}

export function categoryEditingSuccess() {
  return {
    type: 'CATEGORY_EDITING_SUCCESS',
    categoryIsEditing: false,
    categoryEditingSuccess: true
  };
}

export function categoryEditingErrored() {
  return {
    type: 'CATEGORY_EDITING_ERROR',
    categoryIsEditing: false,
    categoryEditingErrored: true
  };
}

// ---

export function categoriesFetchData(date) {
  return (dispatch) => {
    dispatch(categoriesIsLoading());
    axios.get(config.categoriesURL)
      .then((categories) => dispatch(categoriesFetchDataSuccess(categories.data)))
      .catch(() => dispatch(categoriesHasErrored()));
  };
}

export function categoryFetchData(id) {
  return (dispatch) => {
    dispatch(categoryIsLoading());
    axios.get(config.categoriesURL + '/' + id)
      .then((category) => dispatch(categoryFetchDataSuccess(category.data)))
      .catch(() => dispatch(categoryHasErrored()));
  };
}

export function categoriesRemove(id) {
  return (dispatch) => {
    dispatch(categoryIsRemoving(id));
    axios.delete(config.categoriesURL + '/' + id)
      .then(() => dispatch(categoryRemoveSuccess(id)))
      .catch(() => dispatch(categoryRemoveErrored()));
  };
}

export function categoriesAdd(data) {
  return (dispatch) => {
    dispatch(categoryIsAdding());
    axios.post(config.categoriesURL, 
      JSON.stringify({
        "category_id": data.category,
        "name": data.name,
      }),
      { headers: { 'Content-Type': 'application/json' } }
    )
      .then((response) => dispatch(categoryAddingSuccess()))
      .catch(() => dispatch(categoryAddingErrored()));
  };
}

export function categoriesEdit(id, data) {
  return (dispatch) => {
    dispatch(categoryIsEditing());
    axios.patch(config.categoriesURL + '/' + id, 
      JSON.stringify({
        "category_id": data.category,
        "name": data.name,
      }),
      { headers: { 'Content-Type': 'application/json' } }
    )
      .then((response) => dispatch(categoryEditingSuccess()))
      .catch(() => dispatch(categoryEditingErrored()));
  };
}