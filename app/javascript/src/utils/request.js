import { chain, snakeCase } from "lodash";
import normalize from "json-api-normalizer";

const BASE_URI = "/api/v1/";

export const toApiData = (parent, obj = {}) => {
  const data = chain(obj)
    .reduce((acc, value, key) => {
      acc[snakeCase(key)] = value || "";
      return acc;
    }, {})
    .value();

  return JSON.stringify({ [parent]: data });
};

const request = (
  url,
  opts = {},
  loadingAction,
  successAction,
  failureAction
) => dispatch => {
  loadingAction && dispatch(loadingAction());
  fetch(`${BASE_URI}${url}`, {
    headers: { "Content-Type": "application/json" },
    ...opts
  })
    .then(res => res.json())
    .then(res => {
      if (res.errors) throw res;
      return res;
    })
    .then(normalize)
    .then(res => successAction && dispatch(successAction(res)))
    .catch(err => {
      if (!failureAction) return;
      let payload = err;
      if (!payload.errors) payload = { errors: err };
      dispatch(failureAction(payload));
    });
};

export default request;
