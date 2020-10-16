import React, { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

const Search = () => {
  const [term, setTerm] = useState("soil needs worms");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    if (term) {
      search();
    } else {
    }
  }, [debouncedTerm]);

  // array can have multiple items too.  const [termb, setTerm] ...

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
