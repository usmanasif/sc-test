import React, { Component } from "react";
import { Provider } from "react-redux";

import configureStore from "./store";
import rootReducer from "./reducer";

const store = configureStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <p>Hello from React!</p>
      </Provider>
    );
  }
}

export default App;
