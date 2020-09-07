import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      page one <Link to="/pagetwo">Page 2</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page Two <button>Click</button> <Link to="/">Page 1</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/*can have multiple for eacch URL*/}
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
rcc;
