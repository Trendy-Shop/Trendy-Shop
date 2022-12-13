const express =require('express')
const mongoose= require('mongoose')
const app =express()
const port = 5000

app.use(express.json())


const db = "mongodb+srv://Ahmedhenchiri:UvZZCyLXCJU7in18@cluster0.yzf24ly.mongodb.net/trendy-shop?retryWrites=true&w=majority";
mongoose.set('strictQuery', true)
mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true })
.then((res) =>{
    console.log('Database in connect ');
})
.catch((err) =>console.log(err))
app.listen(port,()=>{
    console.log(`your server listen in port ${port}` );
})
