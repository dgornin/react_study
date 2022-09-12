import React from "react";

export default function Button({ type, disabled, children }) {
  return (
    <button className="ui-button" type={type} disabled={disabled}>
      {children}
    </button>
  );
}
