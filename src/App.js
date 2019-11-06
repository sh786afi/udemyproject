import React, { Component } from "react";
import Layout from "./component/Layout/Layout";
import BurgerBuilder from "./container/BurgerBuiler";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder></BurgerBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
