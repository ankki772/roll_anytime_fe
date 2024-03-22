import React, { useState } from "react";

export default function Input(props) {
  const [focused, setFocused] = useState(false);
  const {
    label = "",
    labelTag = false,
    onChange = () => {},
    placeholder = "",
    pattern = "",
    type = "",
    errMsg = "",
    name = "",
    hidden = false,
    svg = false,
    id = "",
    labelClass = "",
    inputClass = "",
    value = "",
    defaultValue="",
    editable = false
    
  } = props;
  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <>
      {labelTag ? <label className={labelClass ? labelClass : ""} htmlFor={id}>
         {label}
      </label>:<label className={labelClass ? labelClass : ""} htmlFor={id}>{svg}</label>}
      {type == "file" ? (
        <input
          type={type}
          name={name}
          onChange={onChange}
          pattern={pattern}
          required
          hidden={hidden}
          id={id}
        />
      ) : (
        <input
          type={type}
          name={name}
          onChange={onChange}
          required
          onBlur={handleFocus}
          focused={focused.toString()}
          hidden={hidden}
          disabled={!editable}
          id={id}
          // value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={inputClass ? inputClass : ""}
        />
      )}
      <span></span>
      {label && !labelTag ? <label>{label}</label> : null}
      <small>
        <i>{errMsg || ""}</i>
      </small>
    </>
  );
}
