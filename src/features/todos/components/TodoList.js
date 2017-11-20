import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
  return props.todos.map((item, index) => {
    if (item.done && props.filter === "todo") return null;
    if (!item.done && props.filter === "done") return null;
    return (
      <TodoItem
        label={item.label}
        done={item.done}
        key={item.id}
        onClick={props.onSelectItem.bind(this, index)}
      />
    );
  });
};
export default TodoList;
