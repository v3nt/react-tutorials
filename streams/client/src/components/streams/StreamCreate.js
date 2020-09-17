import React from "react";
// componenents should have Sentence case words and function camelback format.
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

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
  // arrow function solves 'this' error issue, TypeError: Cannot read property 'renderError' of undefined
  renderInput = ({ input, label, meta }) => {
    // console.log(input);
    console.log(meta);
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
    this.props.createStream(formValues);
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
    errors.title = "You must enter a description";
  }

  return errors;
};

// returns a function that is immediately calle with (StreamCreate)

// how to wire up redux form and connect ?
// export default reduxForm({
//   form: "StreamCreate",
//   validate,
// })(StreamCreate);

// solution 1

// export default connect()(
//   eduxForm({
//     form: "StreamCreate",
//     validate,
//   })(StreamCreate)
// );

// option 2

const formWrapped = reduxForm({
  form: "StreamCreate",
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);

// if same reduce validate:validate to one calidate
