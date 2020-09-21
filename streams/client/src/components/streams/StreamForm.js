import React from "react";
// componenents should have Sentence case words and function camelback format.
import { Field, reduxForm } from "redux-form";
 
 

// convert to class so you can use helper methonds
// const StreamForm = () => {
//   return <div>StreamForm</div>;
// };

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  // arrow function solves 'this' error issue, TypeError: Cannot read property 'renderError' of undefined
  renderInput = ({ input, label, meta }) => {
    // console.log(input);
    // console.log(meta);
    // meta hold error object
    // jsx shorthand for forms, {input} is from formProps.input
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  // TypeError: Cannot read property 'props' of undefined
  // fixed by using arrow function format
  onSubmit = (formValues) => {
    // console.log(formValues);
    // event.preventDefault(); // not needed with redux-form
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
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
    errors.description = "You must enter a description";
  }

  return errors;
};

 

export default = reduxForm({
  form: "StreamForm",
  validate,
})(StreamForm);

  