import { useState } from "react";
import { ADD_TODO, ALL_DELETE_TODO } from "../actions";

const EventForm = ({ state, dispatch }) => {
  const [title, setTitle] = useState("");
  const [complete, setComplete] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      title,
      complete,
    });

    setTitle("");
    setComplete("");
  };

  const allDeleteTodo = (e) => {
    e.preventDefault();
    const confirmation = window.confirm(
      "Are you sure you want to delete all Todos"
    );
    if (confirmation) {
      dispatch({ type: ALL_DELETE_TODO });
    }
  };

  const preventEmptyForm = (title === "") | (complete === "");

  const preventEmptyTodos = state.length === 0;

  return (
    <>
      <h1>TODO LIST</h1>

      <label htmlFor="title">TITLE:</label>
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>

      <select value={complete} onChange={(e) => setComplete(e.target.value)}>
        <option value="">Please Choose Option</option>
        <option value="notStarted">notStarted</option>
        <option value="inProgress">inProgress</option>
        <option value="done">done</option>
      </select>

      <button onClick={addTodo} disabled={preventEmptyForm}>
        ADD
      </button>
      <button onClick={allDeleteTodo} disabled={preventEmptyTodos}>
        ALL DELETE
      </button>
    </>
  );
};

export default EventForm;
