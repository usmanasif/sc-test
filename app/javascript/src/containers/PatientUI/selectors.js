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

export const patientHtml = (patient) => {
  const attrs = patient.attributes;
  return (`
    <fieldset>
      <legend>Patient Info</legend>
      <p>Name: ${attrs.name}</p>
      <p>Address: ${attrs.address}</p>
      <p>Date of birth: ${attrs.dob}</p>
    </fieldset>
  `);
};

export const prescriptionHtml = (prescriptionDetails, ingredients) => {
  const rows = map(prescriptionDetails, ({ attributes }) => {
    const ingredient = ingredients[attributes.ingredientId].attributes;
    return (`
      <tr>
        <td>${ingredient.name}</td>
        <td>${attributes.percentage}</td>
      </tr>
    `)
  }).join('');

  return (`
    <fieldset>
      <legend>Prescription Info</legend>
      <table>
        <thead>
          <tr>
            <th>Ingredient name</th>
            <th>Ingredient percentage</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </fieldset>
  `);
};
