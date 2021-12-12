import { useReducer } from "react";
import TodosReducer from "../reducers";
import EventForm from './EventForm'

const App = () => {
  const [state, dispatch] = useReducer(TodosReducer, []);

  return (
    <div>
      <EventForm state={state} dispatch={dispatch} />

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
