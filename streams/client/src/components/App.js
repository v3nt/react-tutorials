import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
  return <div>page one</div>;
};

const PageTwo = () => {
  return (
    <div>
      Page Two <button>Click</button>
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
