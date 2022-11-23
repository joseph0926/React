import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/counter-slice";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.counter.counter;
  });

  const toggle = useSelector((state) => {
    return state.counter.showCounter;
  });

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const increaseHandler = () => {
    dispatch(counterAction.increase(5));
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
