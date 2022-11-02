// initial state value
const initialState = {
  items: [
    { id: '1', title: "Title", content: "Description", completed: false },
    { id: '2', title: "Title", content: "Description", completed: true }
  ]
}

const ADD_TODO = 'my-app/todos/ADD_TODO'
const DELETE_TODO = 'my-app/todos/DELETE_TODO'
const UPDATE_TODO = 'my-app/todos/UPDATE_TODO'

export const addTodo = toDo => {
  return {
    type: ADD_TODO,
    payload: toDo
  }
}

export const deleteTodo = toDo => {
  return {
    type: DELETE_TODO,
    payload: toDo
  }
}

export const updateTodo = toDo => {
  return {
    type: UPDATE_TODO,
    payload: toDo
  }
}

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        items: [...state.items, action.payload]
      }
    case DELETE_TODO:
      return {
        items: state.items.filter((todo) => todo.id !== action.payload)
      }
    case UPDATE_TODO:
      return {
        // Again copy the entire state object
        ...state,
        // This time, we need to make a copy of the old todos array
        items: state.items.map(todo => {
          // If this isn't the todo item we're looking for, leave it alone
          if (todo.id !== action.payload) {
            return todo
          }

          // We've found the todo that has to change. Return a copy:
          return {
            ...todo,
            // Flip the completed flag
            completed: !todo.completed
          }
        })
      }
    // break
    default:
      return state;
  }
};

// In the module file, the reducer is exported by default.
export default reducer;