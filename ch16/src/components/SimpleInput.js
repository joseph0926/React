import React, { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouch, setEnteredValueTouch] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouch, setEnteredEmailTouch] = useState(false);

  const enteredValueIsValid = enteredValue.trim() !== "";
  const nameInputIsValid = !enteredValueIsValid && enteredValueTouch;

  const enteredEmailIsValid = enteredEmail.trim() !== "" && enteredEmail.includes("@");
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouch;

  useEffect(() => {
    if (enteredValueIsValid && enteredEmailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredValueIsValid, enteredEmailIsValid]);

  const inputHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const inputBlurHandler = (e) => {
    setEnteredValueTouch(true);
  };

  const emailInputHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const emailBlurHandler = (e) => {
    setEnteredEmailTouch(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setEnteredValueTouch(true);
    setEnteredEmailTouch(true);

    if (!enteredValueIsValid) {
      return;
    }
    if (!enteredEmailIsValid) {
      return;
    }

    setEnteredValue("");
    setEnteredEmail("");
    setEnteredValueTouch(false);
    setEnteredEmailTouch(false);
  };

  const nameInputClasses = nameInputIsValid ? "form-control invalid" : "form-control";
  const emailInputClasses = enteredEmailIsValid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={inputHandler} onBlur={inputBlurHandler} value={enteredValue} />
        {nameInputIsValid && <p className="error-text">이름이 빈칸일 수 없습니다.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input type="email" id="email" onChange={emailInputHandler} onBlur={emailBlurHandler} value={enteredEmail} />
        {emailInputIsValid && <p className="error-text">이메일 양식을 맞춰주세요.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
