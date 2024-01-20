const express = require('express')
const cors = require('cors')
const {connectToMongo }= require('./db');
const {UserModel} = require('./models/user');

const {calcu} = require('./calcu')

connectToMongo();
const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

// register ==================================================================================
app.post('/createuser',async(req,res)=>{
    let user = await UserModel.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exists" })
    }
    try {
        return await UserModel.create(req.body)
        .then((user)=>
            res.json(user)
        ).catch((err)=>
            res.json(err)
        )  
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error"); 
    }
})

// login =====================================================================================
app.post('/authuser',async(req,res)=>{
    const {email,password} = req.body;

    try {
        let user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
        
        if(user.password === password){
            return res.send(user.id);
        }else{
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

//tracker =====================================================================================
// user/:userID/category
app.put('/category/:id',async(req,res)=>{
    const {business,sports,entertainment,technology,health,science} = req.body;

    console.log(req.params.id);
    console.log(business," ",sports," ",entertainment," ",technology," ",health," ",science);

    let user = null;
    try {
        user = await UserModel.findById(req.params.id);

        if(!user){
            return res.status(400).json({ error: "Not found !! " })
        }

        await UserModel.findByIdAndUpdate(req.params.id, { $set: {business,sports,entertainment,technology,health,science} }, { new: true })
    } catch (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
    }

    res.send("success!")
});

// recommend ===============================================================================
app.get('/recommend/:id',async (req,res)=>{

    console.log("recommend");
    console.log(req.params.id);

    try {
        let userDetail = null
        userDetail = await UserModel.findById(req.params.id);
        if(userDetail !== null){
            var calculated = calcu(userDetail);
            res.send(calculated)
        }
    } catch (error) {
        console.log("Internal server error");
    }
})

//=============================================================================================
app.get('/',(req,res)=>{
    res.send("Hello world!");
})

app.listen(port,()=>{
    console.log(`server is running on port ${port} ! `);
})