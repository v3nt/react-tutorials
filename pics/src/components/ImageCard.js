import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount() {
    // console.log(this.imageRef);
    // console.log(this.imageRef.current.clientHeight);
    //     // but image wont be loaded? So call after DOM?
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    // called from image load listener
    console.log(this.imageRef.current.clientHeight);
    // set css spans
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { alt_description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
