import React from "react";
// componenents should have Sentence case words and function camelback format.
import { Field, reduxForm } from "redux-form";

// convert to class so you can use helper methonds
// const StreamCreate = () => {
//   return <div>StreamCreate</div>;
// };

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput({ input, label, meta }) {
    // console.log(input);
    console.log(meta);
    // meta hold error object
    // jsx shorthand for forms, {input} is from formProps.input
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit(formValues) {
    // console.log(formValues);
    // event.preventDefault(); // not needed with redux-form
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  // ran per 'Field'
  // console.log("const validate", formValues);
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.title = "You must enter a description";
  }

  return errors;
};

// returns a function that is immediately calle with (StreamCreate)
export default reduxForm({
  form: "StreamCreate",
  validate,
})(StreamCreate);

// if samre reduce validate:validate to one calidate
