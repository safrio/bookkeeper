import initialState from './initialState'

export default function categiories(state = initialState, action) {
  switch(action.type) {
    case 'DATE_HAS_CHANGED':
      return { ...state, date: action.date }

    // Fetching all
    case 'CATEGORIES_HAS_ERRORED':
      return {
        ...state,
        categoriesIsLoading: action.categoriesIsLoading,
        categoriesHasErrored: action.categoriesHasErrored
      }
    case 'CATEGORIES_IS_LOADING':
      return {
        ...state,
        categoriesIsLoading: action.categoriesIsLoading
      }
    case 'CATEGORIES_FETCH_DATA_SUCCESS':
      return {
        ...state,
        categoriesIsLoading: action.categoriesIsLoading,
        categories: action.categories
      }

    // Fetching one
    case 'CATEGORY_FETCH_DATA_SUCCESS':
      return { ...state, category: action.category }

    // Adding
    case 'CATEGORY_IS_ADDING':
      return {
        ...state,
        categoryIsAdding: action.categoryIsAdding
      }
    case 'CATEGORY_ADDING_SUCCESS':
      return {
        ...state,
        categoryIsAdding: action.categoryIsAdding,
        categoryAddingSuccess: action.categoryAddingSuccess,
      }
    case 'CATEGORY_ADDING_ERROR':
      return {
        ...state,
        categoryIsAdding: action.categoryIsAdding,
        categoryAddingError: action.categoryAddingErrored,
      }

    // Editing
    case 'CATEGORY_IS_EDITING':
      return {
        ...state,
        categoryIsEditing: action.categoryIsEditing
      }
    case 'CATEGORY_EDITING_SUCCESS':
      return { 
        ...state,
        categoryIsEditing: action.categoryIsEditing,
        categoryEditingSuccess: action.categoryEditingSuccess
      }
    case 'CATEGORY_EDITING_ERROR':
      return {
        ...state,
        categoryIsEditing: action.categoryIsEditing,
        categoryEditingError: action.categoryEditingErrored,
      }

    // Removing
    case 'CATEGORY_IS_REMOVING':
      return {
        ...state,
        categoryIsRemoving: action.categoryIsRemoving,
        categoryRemovingId: action.categoryRemovingId
      }
    case 'CATEGORY_REMOVE_ERROR':
      return { 
        ...state,
        categoryIsRemoving: action.categoryIsRemoving,
        categoryRemoveError: action.categoryRemoveErrored,
        categoryRemovingSuccess: action.categoryRemovingSuccess,
      }
    case 'CATEGORY_REMOVE_SUCCESS':
      return {
        ...state,
        categoryIsRemoving: action.categoryIsRemoving,
        categoryRemovingSuccess: action.categoryRemovingSuccess,
        categoryRemoveError: action.categoryRemoveErrored,
        categories: state.categories.filter((data) => data.id !== action.id)
      }

    default:
      return state
  }
}
