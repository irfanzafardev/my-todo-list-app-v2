import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodo } from '../../redux/modules/todos';
import { Link } from 'react-router-dom'

const ToDoList = () => {
  const toDos = useSelector(state => state.toDos.items)
  const dispatch = useDispatch()

  const handleDelete = ({ id }) => {
    dispatch(deleteTodo(id))
  }

  const handleComplete = ({ id }) => {
    dispatch(updateTodo(id))
  }

  return (
    <div className='list-wrapper mt-4'>
      <div className="incompleted mb-4">
        The incompleted list
        <div className="row">
          {toDos.map(todo => (
            <li className={`col-3 ${todo.completed ? "d-none" : ""} mt-3 me-3 ps-3`} key={todo.id}>
              <div className="mb-3">
                <Link to={`/${todo.id}`} className="detail-btn text-success">Detail</Link>
              </div>
              <h4>{todo.title}</h4>
              <p>{todo.content}</p>
              <div className="action-btn d-flex">
                <div className='button text-primary' onClick={() => handleComplete(todo)}>Done</div>
                <div className='button text-danger ms-3' onClick={() => handleDelete(todo)} >Delete</div>
              </div>
            </li>
          ))}
        </div>
      </div>
      <div className="completed">
        The completed list
        <div className="row">
          {toDos.map((todo) => (
            <li className={`col-3 ${!todo.completed ? "d-none" : ""} mt-3 me-3`} key={todo.id}>
              <div className="mb-3">
                <Link to={`/${todo.id}`} className="detail-btn text-success">Detail</Link>
              </div>
              <h4>{todo.title}</h4>
              <p>{todo.content}</p>
              <div className="action-btn d-flex">
                <div className='button text-secondary' onClick={() => handleComplete(todo)}>Cancel</div>
                <div className='button text-danger ms-3' onClick={() => handleDelete(todo)}> Delete</div>
              </div>
            </li>
          ))}
        </div>
      </div>
    </div >
  )
}

export default ToDoList