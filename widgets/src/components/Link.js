import React, { useState, useEffect } from "react";

const Link = ({ className, href, children }) => {
  const [active, setActive] = useState("");

  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
    setActive("active");
  };

  return (
    <a onClick={onClick} className={`item ${active}`} href={href}>
      {children}
    </a>
  );
};

export default Link;
