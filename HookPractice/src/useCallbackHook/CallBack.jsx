import React, { memo } from "react";

const CallBack = ({ todos, addTodo }) => {
  console.log("render");
  return (
    <div>
      {todos.map((todo, index) => {
        return <p>{todo + index}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default memo(CallBack);
