import React from "react";

const Item = props => {
  const itemClass = props.done
    ? 'done'
    : 'todo';
  return (
    <li onClick={props.onClick}>
      <span className={itemClass}>{props.label}</span>
    </li>
  );
};

export default Item;
