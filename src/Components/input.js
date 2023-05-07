import React, { useState } from "react";

export default function Input(props) {
  const [focused, setFocused] = useState(false);
  const {
    label = "",
    onChange = () => {},
    placeholder = "",
    pattern = "",
    type = "",
    errMsg='',
    name=''
  } = props;
  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <>
      <input
        type={type}
        name={name}
        onChange={onChange}
        pattern={pattern}
        required
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span></span>
      <label>{label}</label>
      <small>
        <i>{errMsg || ''}</i>
      </small>

    </>
  );
}
