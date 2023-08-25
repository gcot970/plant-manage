const  express = require("express")

const mongoose = require( "mongoose")

const app = express()
const PORT = process.env.PORT || 3000


mongoose.connect('mongodb://localhost:27017' , {
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
.then(()=> {
    console.log("connection to mongo")
})
.catch((err)=>{
    console.log("error", err)
})

app.listen(PORT,()=> {
    console.log(`server is running on port ${PORT}`)
})