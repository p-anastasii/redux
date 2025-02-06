import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./redux/counterSlice";

const App = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
      <div>
        <h1>Value: {value}</h1>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
      </div>
  );
};

export default App;