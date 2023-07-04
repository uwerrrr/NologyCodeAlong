import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faGear } from "@fortawesome/free-solid-svg-icons";

export const LoadingSpinner = () => {
  return <FontAwesomeIcon icon={faSpinner} spin size="xl" />;
};
