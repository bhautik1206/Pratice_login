const express=require('express')
const mongoose =require('mongoose')
const cors=require('cors')
const EmployeeModel=require('./models/Employee')

const app=express()
app.use(express.json())
app.use(cors())


mongoose.connect('mongodb://127.0.0.1:27017/employee')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });


app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employee=>res.json(employee))
    .catch(err=>res.json(err)) 
})

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }
            else{
                res.json("The password if failed")
            }
        }
        else{
            res.json("No record exist")
        }
    })
})


app.listen(3001,()=>{
    console.log("server is running ")
})