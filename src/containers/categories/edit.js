import React, { Component } from 'react';
import CategoryForm from '../../components/categories/form';

class CategoriesEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      action: 'edit',
      name: '',
      editingSuccess: false,
      editingError: false,
      editing: false,
    }
  }

  componentDidMount() {
    this.props.data.fetchOne(this.props.data.match.params.id);
  }

  componentWillReceiveProps(props) {
    this.setState({
      name: props.data.category.name,
      editingSuccess: props.data.editingSuccess,
      editingError: props.data.editingError,
      editing: props.data.editing,
    });
  }

  handleChange = prop => event => {
    this.setState({
      [prop]: event.target.value
    });
  };

  render() {
    return(
      <CategoryForm
        data={this.props.data}
        states={this.state}
        handleChange={this.handleChange} />
    );
  }
};

export default CategoriesEdit
