export const fetch = () => ({
  type: "PATIENT_UI_FETCH"
});

export const fetchSuccess = payload => ({
  type: "PATIENT_UI_FETCH_SUCCESS",
  payload
});

export const fetchFailure = payload => ({
  type: "PATIENT_UI_FETCH_FAILURE",
  payload
});

export const createPatientLoading = () => ({
  type: "PATIENT_UI_CREATE_PATIENT_LOADING"
});

export const createPatientSuccess = payload => ({
  type: "PATIENT_UI_CREATE_PATIENT_SUCCESS",
  payload
});

export const createPatientFailure = payload => ({
  type: "PATIENT_UI_CREATE_PATIENT_FAILURE",
  payload
});
