import React from 'react'
import { DELETE_TODO } from '../actions'

const Event = ({ todo, dispatch }) => {
  const id = todo.id
  const deleteTodo = (e) => {
    e.preventDefault();
    const confirmation = window.confirm(`Are you sure you want to delete this Id: ${id}`)
    if (confirmation) {
      dispatch({ type: DELETE_TODO, id })
    }
  }
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{todo.title}</td>
        <td>{todo.complete}</td>
        <td>
          <button onClick={deleteTodo}>DELETE</button>
        </td>
      </tr>
    </>
  )
}

export default Event
