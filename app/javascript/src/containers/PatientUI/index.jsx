import React, { Component } from "react";
import html2pdf from "html2pdf.js";
import { connect } from "react-redux";

import {
  fetchFormulations,
  fetchIngredients,
  createPatient
} from "src/utils/api";
import {
  fetch,
  fetchSuccess,
  fetchFailure,
  createPatientLoading,
  createPatientSuccess,
  createPatientFailure
} from "./actions";

import { formToApiCall, patientHtml, prescriptionHtml } from "./selectors";
import Form from "./Form";

class PatientUI extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  downloadPdf = () => {
    const { patients, prescriptionDetails, ingredients } = this.props;
    const id = Object.keys(patients)[0];

    html2pdf()
      .from(
        patientHtml(patients[id]) +
          prescriptionHtml(prescriptionDetails, ingredients)
      )
      .toPdf()
      .save(`prescription_${id}.pdf`);
  };

  renderUI() {
    const { patients, onSubmit } = this.props;
    return (
      <div>
        <Form onSubmit={onSubmit} />
        <button
          type="button"
          className="submit-btn"
          disabled={!patients}
          onClick={this.downloadPdf}
        >
          Download PDF
        </button>
      </div>
    );
  }

  render() {
    const {
      loading,
      errors,
      formulations,
      ingredients,
      successCount
    } = this.props;

    if (successCount == 2) {
      return this.renderUI();
    } else if (loading) {
      return <p>Loading...</p>;
    }

    return "Error!";
  }
}

const mapStateToProps = ({ patientUI }) => ({
  ...patientUI
});

const mapDispatchToProps = dispatch => ({
  onMount: () => {
    dispatch(fetchFormulations(fetch, fetchSuccess, fetchFailure));
    dispatch(fetchIngredients(fetch, fetchSuccess, fetchFailure));
  },
  onSubmit: values => {
    dispatch(
      createPatient(
        formToApiCall(values),
        createPatientLoading,
        createPatientSuccess,
        createPatientFailure
      )
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientUI);
