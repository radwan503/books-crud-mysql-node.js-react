import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

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
  const { name, value } = e.target;
  setBook(prev => ({ ...prev, [name]: value }))
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

 console.log(book)


 useEffect(() => {
  const fetchSingleBook = async () => {
   try {
    const res = await axios.get(`http://localhost:8800/books/${id}`)
    const fetchedBook = res.data[0];
    setBook({
     title: fetchedBook.title,
     desc: fetchedBook.desc,
     cover: fetchedBook.cover,
     price: fetchedBook.price,
    })
   } catch (error) {
    console.log(error)
   }
  }
  fetchSingleBook()
 }, [id])


 return (
  <div className='form'>
   <h1><span><Link style={{ textDecoration: "none" }} to="/">⬅</Link></span>Update Form</h1>
   <input type='text' value={book.title} placeholder='Title' onChange={handleOnChange} name='title' />
   <input type='text' value={book.desc} placeholder='Description' onChange={handleOnChange} name='desc' />
   <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
    <input style={{ width: "100%" }} type='text' value={book.cover} placeholder='Cover' onChange={handleOnChange} name='cover' />
    <img style={{ height: "40px", width: "40px" }} src={book.cover} alt={book.title} />
   </div>
   <input type='text' value={book.price} placeholder='Price' onChange={handleOnChange} name='price' />
   <button type='submit' onClick={handleSubmit}>Update</button>
  </div>
 )
}

export default Update