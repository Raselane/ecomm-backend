const express = require('express');
const router = express.Router();
const User = require('../models/users')

// Get all Users
router.get("/", async(req, res)=>{
    const users = await User.find();
    if(!users) res.status(500).send("Something went wrong",error)
    res.send(users);
})

// Create User
router.post("/", (req, res)=>{
    const user = new User({
        firstname:req.body.fname,
        lastname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        phone:req.body.phone,
        country:req.body.country,
      
    })

    user.save().then(user => {
        res.send(user);
    }).catch((error)=>{
        res.send("User was not stored in a database", error);
    })
})

// GET user by Id
router.get("/:userId", async(req,res)=>{
    const user = await User.findById(req.params.userId);
    if(!user) res.status(500).send("Something went wrong",error)
    res.send(user);
})

// Update User
router.put("/:userId", async(req,res)=>{
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
        firstname:req.body.fname,
        lastname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        phone:req.body.phone,
        country:req.body.country,
    }, {new:true})
    if(!updatedUser) res.status(404).send("User not found");
    res.send(updatedUser);
})

// Delete a User
router.delete("/:userId", async(req, res)=>{
    const deletedUser = await User.findByIdAndRemove(req.params.userId);
    if(!deletedUser) res.status(404).send("User not found");
    res.send(deletedUser);
})
module.exports = router;
