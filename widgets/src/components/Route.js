import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname); // for Route to update.
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);
  }, [currentPath]);
  return currentPath === path ? children : null;
  // return window.location.pathname === path ? children : null;
};

export default Route;
