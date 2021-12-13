import { useReducer, useState } from "react";
import TodosReducer from "../reducers";
import EventForm from './EventForm'
import EventEditForm from './EventEditForm'
import Event from './Event'

const App = () => {
  const [state, dispatch] = useReducer(TodosReducer, []);
  const [isEditable, setIsEditable] = useState(false)

  return (
    <> {!isEditable ? (
        <EventForm state={state} dispatch={dispatch} />) : (
          <EventEditForm setIsEditable={setIsEditable} />
      )
    }

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>COMPLETE</th>
          </tr>
        </thead>
        <tbody>
          {state.map((todo, index) => (<Event key={index} todo={todo} dispatch={dispatch} setIsEditable={setIsEditable} />))}
        </tbody>
      </table>

    </>

  );
};

export default App;
