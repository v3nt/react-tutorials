import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  // with class needs 'this' for props and fncs inside classs
  componentDidMount() {
    // this populates id on init
    // console.log(this.props.match);
    this.props.fetchStream(this.props.match.params.id);
  }

  // this root div causes style issues (always jsz needs a root div). Fragemnt ( <> abc </> helps here
  renderActions() {
    // const id = this.props.match.params.id; // es2016 version below.
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this Stream?";
    }

    return `Are you sure you want to delete this Stream: ${this.props.stream.title} ?`;
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps.match);
  // state.streams, all steams, [] = for own props that match .id!!!
  return { stream: state.streams[ownProps.match.params.id] };
};

// export default StreamDelete;

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);

//      actions={this.renderActions()}
//      this wiil call it! Without () it will pass the funciton as a prop.
