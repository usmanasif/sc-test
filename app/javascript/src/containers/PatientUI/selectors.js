import { forEach, map } from "lodash";

export const formInitialValues = (formulations, recipeItems) => {
  const prescriptionDetails = {};

  forEach(formulations, ({ attributes, relationships }, id) => {
    prescriptionDetails[id] = {};

    forEach(relationships.recipeItems.data, recipe => {
      const recipeItem = recipeItems[recipe.id].attributes;
      prescriptionDetails[id][recipeItem.ingredientId] = recipeItem.percentage;
    });
  });

  return {
    prescriptionDetails
  };
};

export const formToApiCall = values => {
  const { name, address, dob, formulationId, prescriptionDetails } = values;
  const prescriptionDetailsAttributes = map(
    prescriptionDetails[formulationId],
    (percentage, ingredientId) => ({ ingredient_id: ingredientId, percentage })
  );

  return {
    name,
    address,
    dob,
    prescriptionDetailsAttributes
  };
};
