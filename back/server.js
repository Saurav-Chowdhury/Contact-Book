const mongoose=require('mongoose');
const app=require('./app');
const cors=require('cors');
app.use(cors());

mongoose.connect("mongodb://localhost:27017/contact")

mongoose.connection.once("open",()=>{
    console.log("Connected");
}).on("connectionError",(err)=>{
    console.log(err);
});

app.listen(8080,()=>{
    console.log('Listening to port 8080');
})
