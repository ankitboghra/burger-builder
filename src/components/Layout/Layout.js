import React from "react";
import Aux from "../../hoc/Aux";
// import cssClasses from "./Layout.css";
import "./Layout.css";

// const style={
//   padding:"16px"
// }

const layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    {/* <main className={cssClasses.content}> */}
    <main className="content">
      {props.children}
    </main>
  </Aux>
);

export default layout;
