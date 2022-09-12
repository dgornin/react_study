import React from "react";

export default function Link({ children, ...rest }) {
  return (
    <a className="ui-link" {...rest}>
      {children}
    </a>
  );
}
