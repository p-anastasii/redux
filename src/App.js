import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./redux/counterSlice";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

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
          <div>
              <h1>TODO</h1>
              <TodoForm/>
              <h2>Todos</h2>
              <TodoList/>
          </div>
      </div>
  );
};

export default App;