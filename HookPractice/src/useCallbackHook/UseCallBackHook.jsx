import React, { useCallback, useState } from "react";
import CallBack from "./CallBack";

const UseCallBackHook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, "new entry:"]);
  }, [todos]);

  //   const addTodo = () => {
  //     setTodos((prev) => [...prev, "new entry:"]);
  //   };

  return (
    <div>
      <CallBack todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count:{count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default UseCallBackHook;
