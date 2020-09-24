import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flv from "flv.js";

// const NodeMediaServer = require('node-media-server');

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
    this.buildPlayer();
  }
  componentDidUpdate() {
    this.buildPlayer();
  }
  componentWillUnmount() {
    // cleanup resources
    console.log("i was unmounted");
    this.player.destroy();
  }
  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }
    const { id } = this.props.match.params;
    console.log(this.videoRef);
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  renderContent() {
    if (!this.props.stream) {
      return "loading";
    } else {
      const { title, description } = this.props.stream;
      return (
        <div>
          <h1>{title}</h1>
          <video
            className="video-player-01"
            ref={this.videoRef}
            style={{ width: "100%" }}
            controls
          />
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
