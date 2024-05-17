import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
 const navigate = useNavigate();
 const [book, setBook] = useState({
  title: "",
  desc: "",
  cover: "",
  price: null,
 })

 const handleOnChange = (e) => {
  setBook(prev => ({ ...prev, [e.target.name]: e.target.value }))
 }
 const handleSubmit = async (e) => {
  e.preventDefault()
  try {
   await axios.post("http://localhost:8800/books", book);
   navigate("/")
  } catch (error) {
   console.log(error)
  }
 }
 return (
  <div className='form' style={{ marginTop: "50px" }}>
   <h1>Add Form</h1>
   <input type='text' placeholder='title' onChange={handleOnChange} name='title'></input>
   <input type='text' placeholder='Description' onChange={handleOnChange} name='desc'></input>
   <input type='text' placeholder='Cover' onChange={handleOnChange} name='cover'></input>
   <input type='text' placeholder='Price' onChange={handleOnChange} name='price'></input>
   <button type='submit' onClick={handleSubmit}>Add</button>
  </div>
 )
}

export default Add