import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// streams comps
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import history from "../history";

// other comps
import Header from "./header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/Show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
