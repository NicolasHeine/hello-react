import React from "react";
import Input from "./Input";

const Header = props => (
  <header>
    <Input onAdd={props.onAdd} />
  </header>
);
export default Header;
