const express=require('express');
const cors=require('cors');
const app=express();
const bodyParser=require('body-parser');
const User=require('./model')
app.use(cors());
app.use(bodyParser.json()) // for parsing application/json

app.get('/getList',(req,res)=>{
    User.find({}).then((docs)=>{
        res.send(docs);
        res.end();
    }).catch((err)=>{
        console.log(err);
    })
});
app.get('/getSearch/:data',(req,res)=>{
    User.find({name: {$regex: '.*'+req.params.data.toUpperCase()+'.*'}}).then((docs)=>{
        res.send(docs);
        res.end();
    }).catch((err)=>{
        console.log(err);
    })
});

app.post('/add',(req,res)=>{
    console.log("POST")
    if(req.body.name && req.body.phone){
        const {name,phone}=req.body;
        User.find({phone: phone}).then((docs)=>{
            if(docs.length>0){
                res.send(["Contact Already Exists"])
            }
            else{
                const obj=new User({
                    name: name.toUpperCase(),
                    phone: phone
                });
                obj.save().then(()=>{
                    res.send(["Contact Added"])
                }).catch((err)=>{
                    console.log(err);
                })
            }
        })
    }
    else{
        let data=["Name or Phone Number is missing"]
        res.send(data);
        res.end();
    }
})

module.exports=app;