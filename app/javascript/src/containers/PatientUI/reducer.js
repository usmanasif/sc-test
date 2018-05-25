const initialState = {
  loading: false,
  errors: undefined,
  successCount: 0,
  formulations: {},
  ingredients: {},
  recipeItems: {}
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "PATIENT_UI_FETCH":
      return {
        ...state,
        loading: true
      };

    case "PATIENT_UI_FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        errors: undefined,
        successCount: state.successCount + 1,
        formulations: payload.formulations || state.formulations,
        ingredients: payload.ingredients || state.ingredients,
        recipeItems: payload.recipeItems || state.recipeItems
      };

    case "PATIENT_UI_FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        successCount: 0,
        errors: payload
      };

    case "PATIENT_UI_CREATE_PATIENT_LOADING":
      return {
        ...state,
        patientLoading: true,
        patients: null
      };

    case "PATIENT_UI_CREATE_PATIENT_SUCCESS":
      return {
        ...state,
        patientLoading: false,
        patientErrors: null,
        patientSuccess: true,
        patients: payload.patients,
        prescriptionDetails: payload.prescriptionDetails
      };

    case "PATIENT_UI_CREATE_PATIENT_FAILURE":
      return {
        ...state,
        patientLoading: false,
        patientErrors: payload,
        patientSuccess: false
      };

    default:
      return state;
  }
};

export default reducer;
