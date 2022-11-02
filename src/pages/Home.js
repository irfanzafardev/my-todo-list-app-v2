import React from 'react'
import Header from '../components/header/Header'
import Form from '../components/form/Form'
import List from '../components/list/List'

import '../App.css'

const Home = () => {
  return (
    <div className='container mb-5'>
      <Header />
      <Form />
      <List />
    </div >
  )
}

export default Home