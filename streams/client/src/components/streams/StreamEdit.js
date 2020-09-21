import React from "react";

import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamEdit extends React.Component {
  // with class needs 'this' for props and fncs inside classs
  componentDidMount() {
    // this populates id on init
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
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
          <p>{this.props.stream.title}</p>
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

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
