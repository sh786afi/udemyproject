import React from "react";
import Aux from "../../Aux/Aux";
import classes from "./Layout.module.css";
const Layout = props => {
  return (
    <Aux>
      <div>ToolBar, SideDrawer,BackDrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
