import React from "react";

export default function Input({ children, ...rest }) {
  return <input className="ui-textfield" {...rest} />;
}
