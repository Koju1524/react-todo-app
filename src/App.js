import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [complete, setComplete] = useState("");

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

      <button>ADD</button>

      <table>
        {/* <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>COMPLETE</th>
        </tr> */}
      </table>
    </div>
  );
};

export default App;
