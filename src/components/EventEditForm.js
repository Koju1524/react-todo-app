import React from 'react';

const EventEditForm = ({ setIsEditable }) => {

  const closeEditForm = () => {
    setIsEditable(false)
  }

  return (
    <>
      <h1>EDIT TODO</h1>
      <label htmlFor="newTitle">TITLE:</label>
      <input id="newTitle" value="newTitle"></input>

      <select value="newComplete">
        <option value="">Please Choose Option</option>
        <option value="notStarted">notStarted</option>
        <option value="inProgress">inProgress</option>
        <option value="done">done</option>
      </select>

      <button>EDIT</button>
      <button onClick={closeEditForm}>CANCEL</button>
    </>
  )
}

export default EventEditForm