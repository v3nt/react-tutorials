import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamDelete extends React.Component {
  // with class needs 'this' for props and fncs inside classs
  componentDidMount() {
    // this populates id on init
    // console.log(this.props.match);
    this.props.fetchStream(this.props.match.params.id);
  }

  // this root div causes style issues (always jsz needs a root div). Fragemnt ( <> abc </> helps here
  renderActions() {
    return (
      <React.Fragment>
        <button onClick={console.log(2)} className="ui button negative">
          Delete
        </button>
        <button onClick={console.log(2)} className="ui button ">
          cancel
        </button>
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
          title={this.renderContent()}
          content="Are you sure sure ???"
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.match);
  // state.streams, all steams, [] = for own props that match .id!!!
  return { stream: state.streams[ownProps.match.params.id] };
};

// export default StreamDelete;

export default connect(mapStateToProps, { fetchStream })(StreamDelete);

//      actions={this.renderActions()}
//      this wiil call it! Without () it will pass the funciton as a prop.
