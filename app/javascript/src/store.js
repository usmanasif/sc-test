import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const configureStore = rootReducer => {
  const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ || (() => noop => noop);
  const enhancers = [applyMiddleware(thunk), devtools()];

  return createStore(rootReducer, compose(...enhancers));
};

export default configureStore;
