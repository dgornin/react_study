import React from "react";

export default function Container({ children, ...rest }) {
  return (
    <div className="ui-container" {...rest}>
      {children}
    </div>
  );
}
