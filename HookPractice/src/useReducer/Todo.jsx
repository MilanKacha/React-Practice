import React, { useReducer } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: state.length + 1, name: action.payload }];

    case "DELETE_TASK":
      return state.filter((d) => d.id !== action.payload);

    default:
      return state;
  }
}

const Todo = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h4> Todo List: {todos.length}</h4>
      Add New Task:
      <input
        type="text"
        onBlur={(e) => dispatch({ type: "ADD_TASK", payload: e.target.value })}
      />
      <hr />
      {todos.map((todo, index) => (
        <li key={todo.id}>
          {todo.name}
          <span>
            <button
              onClick={() =>
                dispatch({ type: "DELETE_TASK", payload: todo.id })
              }
            >
              Delete
            </button>
          </span>
        </li>
      ))}
    </div>
  );
};

export default Todo;
