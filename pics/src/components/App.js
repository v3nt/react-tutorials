import React from "react";
// conventions to put NPM librarbnies above you projects refs.
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "15px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} testProp="999" />
        {/* 'onSubmit' could be called anything here*/}
        {/* ResultsList results=this.axios.results */}
        {/*   Found: {this.state.images.length} images*/}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
