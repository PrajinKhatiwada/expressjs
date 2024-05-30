const express = require('express')
const path =require('path')
const app = express()
const port = 3000

 //creating middleware
//const myMiddleware=(req,res,next)=>{
  //  console.log(req)
    //next()    //next function
//}
//app.use(express.static(path.join(__dirname,"public")))  //serving static folder and files
//using mdiddleware
//app.use(myMiddleware)
 app.get('/hello/:name', (req, res) => {
  res.send('Hello everyone '+req.params.name)
})
//app.get('/about', (req, res) => {
   
    //res.sendFile(path.join(__dirname,'index.html'))  //accesing index.html file through server
   // res.status(500)    //sending costume status code
   // res.json({"Name":"Prajin Khatiwada"})    // sending json file
  //})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})