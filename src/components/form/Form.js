import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/modules/todos';


const ToDoForm = () => {
  const id = uuidv4()
  const [titleInput, setTitleInput] = useState('')
  const [contentInput, setContentInput] = useState('')
  const complete = false

  const dispatch = useDispatch()

  const onTitleChange = (event) => {
    setTitleInput(event.target.value)
  }

  const onContentChange = (event) => {
    setContentInput(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    dispatch(addTodo({ id: id, title: titleInput, content: contentInput, completed: complete }))
    setTitleInput('')
    setContentInput('')
  }
  return (
    <div className='form-wrapper'>
      <form className="d-flex justify-content-between" onSubmit={onFormSubmit}>
        <div className="form d-flex">
          <label htmlFor="title" className="form-label align-self-center pt-2">Title</label>
          <input type="text" className="form-control ms-3" placeholder="Enter something to do" id="title" value={titleInput} onChange={onTitleChange} required></input>
          <label htmlFor="context" className="form-label align-self-center pt-2 ms-3">Content</label>
          <input type="text" className="form-control ms-3" placeholder="Enter the detail" id="context" value={contentInput} onChange={onContentChange} required></input>
        </div>
        <div className="button">
          <button className='btn todo-button px-5 ms-3'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default ToDoForm