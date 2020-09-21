import React from "react";
// componenents should have Sentence case words and function camelback format.
import { connect } from "react-redux";
import { createStream } from "../../actions";

// check brackets or not for definitions
import StreamForm from "./StreamForm";

// convert to class so you can use helper methonds
// const StreamCreate = () => {
//   return <div>StreamCreate</div>;
// };

class StreamCreate extends React.Component {
  // TypeError: Cannot read property 'props' of undefined
  // fixed by using arrow function format
  onSubmit = (formValues) => {
    // console.log(formValues);
    // event.preventDefault(); // not needed with redux-form
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Stream create</h3>
        <StreamForm onSubmit={this.onSubmit}></StreamForm>
      </div>
    );
  }
}

// returns a function that is immediately called with (StreamCreate)

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

export default connect(null, { createStream })(StreamCreate);

// if same reduce validate:validate to one calidate
