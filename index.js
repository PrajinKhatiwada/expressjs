const express = require('express')
const path =require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello everyone ')
})
app.get('/about', (req, res) => {
   
    res.sendFile(path.join(__dirname,'index.html'))  //accesing index.html file through server
   // res.status(500)    //sending costume status code
   // res.json({"Name":"Prajin Khatiwada"})    // sending json file
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})