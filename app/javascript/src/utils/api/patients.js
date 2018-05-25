import request, { toApiData } from "../request";

export const createPatient = (
  patient,
  loadingAction,
  successAction,
  failureAction
) =>
  request(
    "patients",
    {
      method: "POST",
      body: toApiData("patient", patient)
    },
    loadingAction,
    successAction,
    failureAction
  );
