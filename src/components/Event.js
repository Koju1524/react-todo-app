import { useState } from 'react'
import { DELETE_TODO } from '../actions'

const Event = ({ todo, dispatch }) => {
  const [isEditable, setIsEditable] = useState(false)

  const id = todo.id

  const editTodo = (e) => {
    e.preventDefault()
    setIsEditable(true)
  }

  const deleteTodo = (e) => {
    e.preventDefault();
    const confirmation = window.confirm(`Are you sure you want to delete this Id: ${id}`)
    if (confirmation) {
      dispatch({ type: DELETE_TODO, id })
    }
  }
  return ( //isEditable出し分けがしたい
    <>
      <>
        <tr>
          <td>{id}</td>
          <td>{todo.title}</td>
          <td>{todo.complete}</td>
          <td>
            <button onClick={editTodo}>EDIT</button>
          </td>
          <td>
            <button onClick={deleteTodo}>DELETE</button>
          </td>
        </tr>
      </>

      <>
        <label htmlFor="newTitle">TITLE:</label>
        <input id="newTitle" value="newTitle"></input>

        <select value="newComplete">
          <option value="">Please Choose Option</option>
          <option value="notStarted">notStarted</option>
          <option value="inProgress">inProgress</option>
          <option value="done">done</option>
        </select>

        <button disabled>EDIT</button>
        <button disabled>CANCEL</button>
      </>
    </>
  )
}

export default Event
