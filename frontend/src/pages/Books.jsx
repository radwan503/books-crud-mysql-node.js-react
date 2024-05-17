import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const Books = () => {
 const [books, setBooks] = useState([])


 const handleDelete = async (id) => {
  try {
   await axios.delete(`http://localhost:8800/books/${id}`)
   window.location.reload();
  } catch (error) {
   console.log(err)
  }
 }

 useEffect(() => {
  const fetchAllBoooks = async () => {
   try {
    const res = await axios.get('http://localhost:8800/books')
    setBooks(res?.data)
   } catch (error) {
    console.log(error)
   }
  }
  fetchAllBoooks()
 }, [])

 return (
  <>
   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <h1>Books List</h1>
    <Link to="/add"><button type='button' style={{ height: "36px" }}>Add New  Book</button></Link>
   </div>
   <div className='books'>
    {
     books?.map((book, index) => (
      <div className="card" key={book.id}>
       <img src={book.cover ? book.cover : "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200"} alt="Denim Jeans" />
       <h1>{book.title}</h1>
       <p>{book.price}</p>
       <p>{book.desc}</p>
       <button onClick={() => handleDelete(book.id)}>Delete</button>
       <Link to={`/update/${book.id}`}><button>Update</button></Link>
      </div>
     ))
    }
   </div>
  </>
 )
}

export default Books
