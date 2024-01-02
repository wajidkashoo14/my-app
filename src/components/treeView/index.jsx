import "./index.css";

import React from "react";
import MenuList from "./menu-list";

export default function TreeView({ menus = [] }) {
  return (
    <div className="menu-list-container">
      <MenuList list={menus} />
    </div>
  );
}
