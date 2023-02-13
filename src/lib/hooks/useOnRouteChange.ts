import React from "react";
import { useLocation, Location } from "react-router-dom"

export const useOnRouteChange = (actions: (location: Location) => void) => {
  const location = useLocation();
  React.useEffect(() => {
    actions(location);
  }, [location]);
}