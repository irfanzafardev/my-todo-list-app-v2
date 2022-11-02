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

// const getTodo = (state, id) =>
//   state.items.find(todo => id === todo.id);

// export const getTodoById = createSelector(
//   [getTodo],
//   todo => todo,
// );

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
        ...state,
        items: state.items.map(todo => {
          if (todo.id !== action.payload) {
            return todo
          }
          return {
            ...todo,
            completed: !todo.completed
          }
        })
      }
    default:
      return state;
  }
};

// In the module file, the reducer is exported by default.
export default reducer;