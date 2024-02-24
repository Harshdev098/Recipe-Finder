const express=require('express')
const path=require('path')
const app=express()
app.use(express.static(path.join(__dirname, './public')));

// serving html file 
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'))
})

// starting server 
const port=8000;
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})