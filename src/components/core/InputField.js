import React from "react";

const InputField = (props) => (
  <div className="form-group">
    {console.warn(props)}
    <label>{props.label}</label>
    <input
      {...props.input}
      className="form-control"
      placeholder={props.label}
      type={props.type}
    />
    <div className="form-messages">
      {props.meta.touched && props.meta.error && <p>{props.meta.error}</p>}
    </div>
  </div>
);


export default InputField;
