import React from "react";

export default function Input({ type = "text", placeholder, name }) {
  return <input type={type} placeholder={placeholder} name={name} />;
}
