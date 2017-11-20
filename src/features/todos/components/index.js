import React, { Component } from "react";

import TodoList from "./TodoList";
import Header from "./Header";
import Footer from "./Footer";

const Places = props => (
    <div>
      <Header onAdd={props.addItem} />
      <ul id="list">
        <TodoList
          todos={props.todos}
          filter={props.filter}
          onSelectItem={props.onToggleItem}
        />
      </ul>
      <Footer
        onSelectFilter={props.updateFilter}
        selected={props.filter}
      />
    </div>
)

export default Places;