import { connect } from 'react-redux';
import Component from '../components';

function mapDispatchToProps(dispatch){
  return {
    onToggleItem: index => {
      dispatch({type: "TOGGLE_TODO", index});
    },
    addItem: label => {
      dispatch({type: "ADD_TODO", label});
    },
    updateFilter: value => {
      dispatch({type: "SET_FILTER", value});
    }
  };
}

function mapStateToProps(state){
  return {
    todos: state.todos,
    filter: state.filter
  }
}

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export default TodosContainer;