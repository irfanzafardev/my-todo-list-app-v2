import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';


const Detail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const toDos = useSelector(state => state.toDos.items)
  const result = toDos.find(item => item.id === id);
  const data = result
  console.log(data)
  return (
    <div className="detail-wrapper">
      <div className='box'>
        <h5>Todo list item</h5>
        <div className="item-detail my-5">
          <p>id: {id}</p>
          <h4>Title: {data.title}</h4>
          <p>Content: {data.content}</p>
        </div>
        <div className="d-flex justify-content-end">
          <button className='btn btn-secondary float-right px-5' onClick={() => { navigate('/') }}>Back</button>
        </div>
      </div>
    </div>
  )
}

export default Detail