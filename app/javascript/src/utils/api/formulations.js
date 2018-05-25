import request from "../request";

export const fetchFormulations = (
  loadingAction,
  successAction,
  failureAction
) => request("formulations", {}, loadingAction, successAction, failureAction);
