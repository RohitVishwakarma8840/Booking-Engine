const express = require('express');
const bcrypt = require('bcryptjs');

const db = require('../db/db');

const salt = 10;

const signUp = async(req,res) => {
    try{
        const {name ,email,password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({error:'All fields are required'});
        }

        const [existingUser] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        
   if(existingUser.length > 0){
     return res.status(409).json({error:'User with this email already exists'});
        }

        const hashedPassword = await bcrypt.hash(password, salt);


        // Insert user into database   
        await db.query('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)', [name, email, hashedPassword]); 


        res.status(201).json({message:'User registered successfully'});

    }
    catch(err){
        res.status(500).json({error:'Internal Server Error'});
    }
}

const login = async(req,res) => {
    try{
        res.send("do something");

    }
    catch(err){
        cosnole.error('Error during login:', err);
    }
}

module.exports = {
    login,signUp
};