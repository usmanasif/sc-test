import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import patientUI from "./containers/PatientUI/reducer";

const reducer = (state = {}, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  app: reducer,
  form: formReducer,
  patientUI
});
