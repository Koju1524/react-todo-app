import { useState, useReducer } from "react";
import TodosReducer from "../reducers";
import { ADD_TODO, ALL_DELETE_TODO } from "../actions";

const App = () => {
  const [state, dispatch] = useReducer(TodosReducer, []);
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
    dispatch({ type: ALL_DELETE_TODO });
  };

  return (
    <div>
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

      <button onClick={addTodo}>ADD</button>
      <button onClick={allDeleteTodo}>ALL DELETE</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>COMPLETE</th>
          </tr>
        </thead>
        <tbody>
          {state.map((todo, index) => {
            return (
              <tr key={index}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.complete}</td>
                <td>
                  <button>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
