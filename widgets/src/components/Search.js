import React, { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

const Search = () => {
  const [term, setTerm] = useState("soil needs worms");
  const [results, setResults] = useState([]);
  console.log(results);
  useEffect(() => {
    // can't mark function with async or await in >useEffect ;-()
    // #1 const search() ...
    // so we can call a function that doesn't have a 'name'
    // #2
    //
    if (term) {
      (async () => {
        const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
          params: {
            action: "query",
            list: "search",
            origin: "*",
            format: "json",
            srsearch: term,
          },
        });
        setResults(data.query.search);
      })();
    }
    // #3
    // axios.get("abc").then((response) => {});
    //
  }, [term]);
  // array can have multiple items too.  const [termb, setTermb] ...

  const renderedResults = results.map((result) => {
    const snippet = DOMPurify.sanitize(result.snippet, {
      ALLOWED_TAGS: ["span"],
    });
    return (
      <div className="item" key="{result.pageid ? result.pageid : rand(500)} ">
        <div className="content">
          <div className="header">{result.title}</div>
          <div className="snippet">
            <p>{snippet}</p>
            {/*            <p>
              <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
            </p>*/}
            {/*{result.snippet}*/}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search terms</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <ul className="ui big divided list">{renderedResults}</ul>
    </div>
  );
};

export default Search;
