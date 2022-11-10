import React, { useState, useRef } from "react";

const SimpleInput = (props) => {
  const enteredRef = useRef();
  const [enteredValue, setEnteredValue] = useState("");
  const inputHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredRefValue = enteredRef.current.value;

    setEnteredValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={inputHandler} ref={enteredRef} value={enteredValue} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
