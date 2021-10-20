import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InputWrapper = ({ htmlFor, label, children, labelIcon, className }) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label className="text-gray-200" htmlFor={htmlFor}>
        {labelIcon && (
          <FontAwesomeIcon
            icon={labelIcon}
            className="mr-4 text-gray-300"
            size="1x"
          />
        )}
        {label}
      </label>
      {children}
    </div>
  );
};

export default InputWrapper;
