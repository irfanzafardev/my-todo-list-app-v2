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
        <h5>Detail item</h5>
        <div className="item-detail mt-5">
          <p>id: {id}</p>
          <h4>title: {data.title}</h4>
          <p>content: {data.content}</p>
        </div>
        <button className='btn btn-secondary todo-button px-5' onClick={() => { navigate('/') }}>Back</button>
      </div>
    </div>
  )
}

export default Detail