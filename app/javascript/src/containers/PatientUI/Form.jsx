import React from "react";
import { reduxForm, Field, formValueSelector, reset } from "redux-form";
import { connect } from "react-redux";
import { map } from "lodash";

import { formInitialValues } from "./selectors";

const selector = formValueSelector("patientForm");

const renderIngredient = (ingredient, formulationId, percentage) => {
  return (
    <tr key={ingredient.id}>
      <td>{ingredient.attributes.name}</td>
      <td>{percentage}</td>
      <td>
        <Field
          name={`prescriptionDetails[${formulationId}][${ingredient.id}]`}
          component={field => (
            <div>
              <input
                max={parseFloat(ingredient.attributes.maximumPercentage)}
                min={parseFloat(ingredient.attributes.minimumPercentage)}
                step={0.001}
                type="range"
                {...field.input}
              />
              <br />
              {field.input.value}
            </div>
          )}
        />
      </td>
      <td>{ingredient.attributes.classes.join(", ")}</td>
      <td>{ingredient.attributes.description}</td>
    </tr>
  );
};

const Form = ({
  handleSubmit,
  ingredients,
  formulations,
  recipeItems,
  selectedFormulation,
  reset
}) => (
  <form onSubmit={handleSubmit}>
    <fieldset>
      <legend>Patient</legend>
      <div>
        <label>Name&nbsp;</label>
        <Field name="name" type="text" component="input" required />
      </div>

      <div>
        <label>Address&nbsp;</label>
        <Field name="address" type="text" component="input" required />
      </div>

      <div>
        <label>Date of birth&nbsp;</label>
        <Field
          name="dob"
          type="date"
          component="input"
          required
          max={new Date().toISOString().split("T")[0]}
        />
      </div>
    </fieldset>
    <fieldset>
      <legend>Prescription</legend>
      <div>
        <label>Formulation</label>
        <Field name="formulationId" component="select" required>
          <option />
          {map(formulations, (f, id) => (
            <option key={id} value={id}>
              {f.attributes.name}
            </option>
          ))}
        </Field>
      </div>
      <div>
        {selectedFormulation && (
          <table>
            <thead>
              <tr>
                <th>Ingredient name</th>
                <th>Suggested percentage</th>
                <th>Selected Percentage</th>
                <th>Classes</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {map(
                formulations[selectedFormulation].relationships.recipeItems
                  .data,
                ({ id }) =>
                  renderIngredient(
                    ingredients[recipeItems[id].attributes.ingredientId],
                    selectedFormulation,
                    recipeItems[id].attributes.percentage
                  )
              )}
            </tbody>
          </table>
        )}
      </div>
    </fieldset>
    <button type="submit" className="submit-btn">
      Create Patient
    </button>
    <button type="button" className="submit-btn" onClick={reset}>
      Reset
    </button>
  </form>
);

const withForm = reduxForm({ form: "patientForm" })(Form);
const mapDispatchToProps = {
  reset: reset("patientForm")
};

export default connect(
  ({ patientUI: { ingredients, formulations, recipeItems }, ...rest }) => ({
    ingredients,
    formulations,
    recipeItems,
    selectedFormulation: selector(rest, "formulationId"),
    initialValues: formInitialValues(formulations, recipeItems)
  }),
  mapDispatchToProps
)(withForm);
