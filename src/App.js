import React from 'react';

const App = () => {
  return (
    <div>
      <h1>TODO LIST</h1>

      <label htmlFor="title">TITLE</label>
      <input id='title'></input>

      <select value=''>
        <option value=''>Please Choose Option</option>
        <option value='notStarted'>notStarted</option>
        <option value='inProgress'>inProgress</option>
        <option value='done'>done</option>
      </select>

      <button>ADD</button>

      <table>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>COMPLETE</th>
        </tr>
        <tr>
          <td></td>
          <td>Francisco</td>
          <td>done</td>
        </tr>
      </table>
    </div>
  )

}

export default App;