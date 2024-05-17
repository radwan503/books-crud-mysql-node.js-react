import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const Update = () => {
 const navigate = useNavigate();
 const location = useLocation()
 const { id } = useParams();


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
   await axios.put(`http://localhost:8800/books/${id}`, book);
   navigate("/")
  } catch (error) {
   console.log(error)
  }
 }
 return (
  <div className='form'>
   <input type='text' placeholder='title' onChange={handleOnChange} name='title'></input>
   <input type='text' placeholder='Description' on Change={handleOnChange} name='desc'></input>
   <input type='text' placeholder='Cover' onChange={handleOnChange} name='cover'></input>
   <input type='text' placeholder='Price' onChange={handleOnChange} name='price'></input>
   <button type='submit' onClick={handleSubmit}>Update</button>
  </div>
 )
}

export default Update