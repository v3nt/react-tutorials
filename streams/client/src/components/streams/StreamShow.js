import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

// const NodeMediaServer = require('node-media-server');

class StreamShow extends React.Component {
  componentDidMount() {
    // const { id } = this.props.state.params;
    this.props.fetchStream(this.props.match.params.id);
  }
  renderContent() {
    if (!this.props.stream) {
      return "loading";
    } else {
      const { title, description } = this.props.stream;
      return (
        <div>
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>
      );
    }
  }
  render() {
    return <div>StreamShow {this.renderContent()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
