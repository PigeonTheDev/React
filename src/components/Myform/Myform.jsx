import React from "react";
import { useState } from "react";
import "./Myform.css";

export const Myform = (props) => {
  const [mail, setMail] = useState("");

  const [pass, setPass] = useState("");

  const handleMailChange = (event) => {
    setMail(event.target.value);
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  const onClickFormSubmit = () => {
    props.onClick(mail + " " + pass);
  };

  return (
    <div className="form2">
      <h1>Please enter your information</h1>

      <input className="inp" placeholder="E-mail" onChange={handleMailChange} type="text" />

      <input placeholder="Password" className="inp" onChange={handlePassChange} type="text" />

      <button className="btn" onClick={onClickFormSubmit}>
        Submit
      </button>
    </div>
  );
};