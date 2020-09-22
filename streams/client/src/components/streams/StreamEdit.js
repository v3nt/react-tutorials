import _ from "lodash"; // for rm unwantrd items from stream obj
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  // with class needs 'this' for props and fncs inside classs
  componentDidMount() {
    // this populates id on init
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    // console.log(formValues);
    // event.preventDefault(); // not needed with redux-form
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    // console.log(this.props);
    // console.log(props.match.params.id);
    if (!this.props.stream) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>StreamEdit</h1>
          <h4>{this.props.stream.title}</h4>
          {/*// this.props.stream passes everything or all values */}
          <StreamForm
            initialValues={_.pick(this.props.stream, "title", "description")}
            onSubmit={this.onSubmit}
          ></StreamForm>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  // select approp stream!:
  // ownProps.match.params.id !!! is undefined on init. Because redux state onject is empty. 'streams' is empty.
  // Needs to fetch own data.
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
