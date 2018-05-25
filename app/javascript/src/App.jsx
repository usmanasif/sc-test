import React from "react";
import { Provider } from "react-redux";

import configureStore from "./store";
import rootReducer from "./reducer";

import PatientUI from "./containers/PatientUI";

import 'normalize.css';
import './App.css';

const store = configureStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <PatientUI />
  </Provider>
);

export default App;
