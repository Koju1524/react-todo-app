import { useReducer } from "react";
import TodosReducer from "../reducers";
import EventForm from './EventForm'
import Event from './Event'

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
          {state.map((todo, index) => (<Event key={index} todo={todo} dispatch={dispatch} />))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
