import React from "react";
import { Router, Route } from "react-router-dom";
// streams comps
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
// for redirection.
import history from "../history";

// other comps
import Header from "./header";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          {/*this add id to props.mratch.params. /streams/edit/:id/:other */}
          <Route path="/streams/Show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
