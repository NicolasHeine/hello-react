import React from "react";

const Button = props => (
  <button onClick={props.onClick}>
    <span className={props.selected ? 'done' : 'todo'}>
      {props.label}
    </span>
  </button>
);

const Footer = props => (
  <div >
    <Button
      label="Tous"
      selected={props.selected === "all"}
      onClick={props.onSelectFilter.bind(this, "all")}
    />
    <Button
      label="Terminé"
      onClick={props.onSelectFilter.bind(this, "done")}
      selected={props.selected === "done"}
    />
    <Button
      label="A faire"
      onClick={props.onSelectFilter.bind(this, "todo")}
      selected={props.selected === "todo"}
    />
  </div>
);
export default Footer;
