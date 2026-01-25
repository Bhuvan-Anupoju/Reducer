import React, { useState } from "react";
import { useReducer } from "react";

const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.todo)];
  }
}
function newTodo(todo) {
  return { id: Date.now(), todo: todo, complete: false };
}

const Rough = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { todo: todo } });
    setTodo("");
  }

  return (
    <>
      <h1>Reduce</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.todo}</p>;
      })}
    </>
  );
};

export default Rough;
