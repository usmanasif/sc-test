import request from "../request";

export const fetchIngredients = (loadingAction, successAction, failureAction) =>
  request("ingredients", {}, loadingAction, successAction, failureAction);
