import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group" style={{textAlign: "center", width: "100%"}}>
      <input className="form-control" style={{ width: "100%" }} {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "center", marginBottom: 10 }} className="btn btn-block btn-outline-secondary text-light">
      {props.children}
    </button>
  );
}
