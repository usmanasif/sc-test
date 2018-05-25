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

    default:
      return state;
  }
};

export default reducer;
