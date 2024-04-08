const express = require('express');
const cors = require('cors');
const app = express();
require('./db/config');
const User = require('./db/user');
const Contact = require('./db/contact');

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
});

app.post("/login",async (req,res) => {
    if(req.body.password && req.body.email){
        let user =await User.findOne(req.body).select("-password");
        if(user){
            res.send(user);
        }else{
            res.send({result:'No User Found'});
        }
    }else{
        res.send({result:'No User Found'});
    }
    
    
});

app.post("/contact", async (req, res) => {
    let contact = new Contact(req.body);
    let result =await contact.save();
    res.send(result);
})



app.listen(4000);
