import React, { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

const Search = () => {
  const [term, setTerm] = useState("soil needs worms");
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log("init & term changed");

    const search = async () => {
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
    };

    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);
    return () => {
      console.log("cleanup " + timeoutId);
      clearTimeout(timeoutId);
    };
  }, [term]);

  // array can have multiple items too.  const [termb, setTermb] ...

  const renderedResults = results.map((result) => {
    const snippet = DOMPurify.sanitize(result.snippet, {
      ALLOWED_TAGS: ["span"],
    });
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated button">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <div className="snippet">
            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
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
