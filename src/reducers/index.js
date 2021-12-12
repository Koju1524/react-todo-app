import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  ALL_DELETE_TODO
} from '../actions'

const todosReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      const event = { title: action.title, complete: action.complete }
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      return [...state, { id, ...event }]
    case EDIT_TODO:
      return state
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    case ALL_DELETE_TODO:
      return []
    default:
      return state
  }
}

export default todosReducer