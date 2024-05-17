import express from 'express';
import mysql from 'mysql2';
import cors from 'cors'
const app = express()
const db = mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"admin",
   database:"book_crud"
})

// Attempt to connect to the database
db.connect((err) => {
   if (err) {
      console.error('Error connecting to the database:', err.stack);
      return;
   }
   console.log('Connected to the database as id ' + db.threadId);
});

app.use(express.json());
app.use(cors())

app.get("/",(req,res)=>{
  res.json("Hello this is backend")
})


app.get("/books",(req,res)=>{
    const q = "SELECT * FROM books"
    db.query(q,(err,data)=>{
      if(err) return res.json(err)
       return res.json(data)
    })
})


app.post("/books",(req,res)=>{
   const q = "INSERT INTO books(`title`,`desc`,`cover`,`price`) VALUES (?)"

   const values =[
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price,
   ]

   db.query(q,[values],(err,data)=>{
    if(err) return res.json(err);
     return res.json("Book has been created successfully")
   })

})

app.delete("/books/:id",(req,res)=>{
  const bookId =  req.params.id
  const q = "DELETE FROM books WHERE id=?"
  db.query(q,[bookId],(err,data)=>{
   if(err) return res.json(err);
   return res.json("Book has been deleted successfully")
 })
  
})

app.put("/books/:id",(req,res)=>{
 const bookId =  req.params.id
 const q = "UPDATE books SET `title`=? i,`desc`=?,`cover`=?,`price`=? WHERE id=?"
 const values =[
  req.body.title,
  req.body.desc,
  req.body.cover,
  req.body.price,
 ]

 db.query(q,[...values,bookId],(err,data)=>{
  if(err) return res.json(err);
  return res.json("Book has been updated successfully")
})
 
})

app.listen(8800,()=>{
  console.log("connected to backend")
})