import React, { useState, useRef, useEffect } from "react";

import styles from "./Checkout.module.css";

const isEmpty = (value) => {
  return value.trim() === "";
};
const isCodeLengthValid = (value) => {
  return value.trim().length === 5;
};

const Checkout = (props) => {
  const [formIsValid, setFormIsValid] = useState({
    name: true,
    street: true,
    code: true,
    city: true,
  });

  const nameInput = useRef();
  const streetInput = useRef();
  const codeInput = useRef();
  const cityInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const name = nameInput.current.value;
    const street = streetInput.current.value;
    const code = codeInput.current.value;
    const city = cityInput.current.value;

    const nameIsValid = !isEmpty(name);
    const streetIsValid = !isEmpty(street);
    const codeIsValid = isCodeLengthValid(code);
    const cityIsValid = !isEmpty(city);

    setFormIsValid({
      name: nameIsValid,
      street: streetIsValid,
      code: codeIsValid,
      city: cityIsValid,
    });

    const inputIsValid = nameIsValid && streetIsValid && codeIsValid && cityIsValid;
    if (!inputIsValid) {
      return;
    }

    props.onConfirm({
      name: name,
      street: street,
      code: code,
      city: city,
    });
  };

  const isNotValid = <p className={styles.not}>is not Valid</p>;
  const nameNotValid = formIsValid.name ? "" : styles.invalid;
  const streetNotValid = formIsValid.street ? "" : styles.invalid;
  const codeNotValid = formIsValid.code ? "" : styles.invalid;
  const cityNotValid = formIsValid.city ? "" : styles.invalid;

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={`${styles.control} ${nameNotValid}`}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameInput}></input>
        {!formIsValid.name && isNotValid}
      </div>
      <div className={`${styles.control} ${streetNotValid}`}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInput}></input>
        {!formIsValid.street && isNotValid}
      </div>
      <div className={`${styles.control} ${codeNotValid}`}>
        <label htmlFor="code">Postal Code</label>
        <input type="text" id="code" ref={codeInput}></input>
        {!formIsValid.code && isNotValid}
      </div>
      <div className={`${styles.control} ${cityNotValid}`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInput}></input>
        {!formIsValid.city && isNotValid}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onClose}>
          Cancle
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
